import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from './routes/auth.route.js'
import cookieParser from "cookie-parser";
import userRoutes from './routes/user.route.js'
import userRoutes from './routes/post.route.js'

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Mongodb is connected"))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json())
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})

app.listen(3000, () => {
  console.log("server is running on 3000");
});
