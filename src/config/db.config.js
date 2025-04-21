// db.js
import mongoose from 'mongoose';

const mongoURI = 'mongodb+srv://sjasvin9493:zT7EFb7dJaiiVoXg@cluster0.29pquzz.mongodb.net/';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the process if DB connection fails
  }
};

export default connectDB;
