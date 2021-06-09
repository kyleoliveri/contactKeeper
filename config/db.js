const mongoose = require('mongoose');
// const config = require('config');
// const db = config.get('mongoURI');
const db = "mongodb+srv://koliveri:kyle123@contactbook.zf9en.mongodb.net/contactkeeper?retryWrites=true&w=majority"
// const dotenv = require('dotenv');
console.log(db);
// dotenv.config();
// const url = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
