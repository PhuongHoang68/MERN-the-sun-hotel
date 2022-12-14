//import dependencies
const faker = require('faker');
const db = require('../config/connection');
const { User, Review, Room, Reservation } = require('../models');

db.once('open', async () => {
  await Review.deleteMany({});
  await User.deleteMany({});
  await Room.deleteMany({});
  await Reservation.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create reviews
  let createdReviews = [];
  for (let i = 0; i < 100; i += 1) {
    const reviewText = faker.lorem.words(Math.round(Math.random() * 20) + 1);
    const reviewStars = 5;

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    const createdReview = await Review.create({ reviewText, reviewStars, username });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { reviews: createdReview._id } }
    );

    createdReviews.push(createdReview);

  }

  // create room data
  const roomData = [];

  for (let i = 0; i < 10; i += 1) {
    const roomType = faker.random.word();
    const inventory = 2;
    const price = 30;

    roomData.push({ roomType, inventory, price });
  }
  const createdRooms = await Room.collection.insertMany(roomData);

  // create reservations
  let createdReservations = [];
  for (let i = 0; i < 10; i += 1) {
    const arrivalDate = faker.date.past();
    const departureDate = faker.date.future();
  
    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    const randomRoomTypeIndex = Math.floor(Math.random() * createdRooms.ops.length);
    const { roomType, _id: roomTypeId } = createdRooms.ops[randomRoomTypeIndex];

    const createdReservation = await Reservation.create({ arrivalDate, departureDate, username, roomType });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { reservations: createdReservation._id } }
    );

    createdReservations.push(createdReservation);
    console.log(createdReservations);
  }

  console.log('all done!');
  process.exit(0);
});
