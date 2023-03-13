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

      //create reviews
    let createdReviews = [];
    for (let i = 0; i < 100; i += 1) {
    const reviewText = faker.lorem.words(Math.round(Math.random() * 20) + 1);
    const reviewStars = 5;

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { _id: userId } = createdUsers.ops[randomUserIndex];
    const user = userId

    const createdReview = await Review.create({ reviewText, reviewStars, user });

     const updatedUser = await User.updateOne(
       { _id: userId },
       { $push: { reviews: createdReview._id } }
     );

    createdReviews.push(createdReview);
  }

  // // create room data
   const roomData = [];

  for (let i = 0; i < 10; i += 1) {
    const roomType = faker.random.word();
    const price = 30;
    const count = 2;

    roomData.push({ roomType, price, count });
  }
  const createdRooms = await Room.collection.insertMany(roomData);

   // create reservations
   let createdReservations = [];
   for (let i = 0; i < 10; i += 1) {
     const arrivalDate = faker.date.past();
     const departureDate = faker.date.future();
  
     const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
     const { _id: userId } = createdUsers.ops[randomUserIndex];
     const user = userId

     const randomRoomTypeIndex = Math.floor(Math.random() * createdRooms.ops.length);
     const { _id: roomId } = createdRooms.ops[randomRoomTypeIndex];
     const room = roomId

     const createdReservation = await Reservation.create({ arrivalDate, departureDate, user, room });

     const updatedUser = await User.updateOne(
       { _id: userId },
       { $push: { reservations: createdReservation._id } }
     );

    createdReservations.push(createdReservation);
  }

  console.log('all done!');
  process.exit(0);
});
