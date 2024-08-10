const mongoose = require('mongoose');

beforeAll(async () => {
  await mongoose.set('strictQuery', true);
  await mongoose.disconnect();
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/jmr_exam_test');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
});


afterAll(async () => {
  await mongoose.connection.close();
});
