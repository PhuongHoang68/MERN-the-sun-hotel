const faker = require('faker');

const db = require('../config/connection');
const { User, Review } = require('../models');

db.once('open', async () => {
  await Review.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create reviews DOES NOT WORK YET
  let createdReviews = [];
  for (let i = 0; i < 100; i += 1) {
    const reviewText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    const createdReview = await Review.create({ reviewText, username });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { reviews: createdReview._id } }
    );

    createdReviews.push(createdReview);
  }

  console.log('all done!');
  process.exit(0);
});
