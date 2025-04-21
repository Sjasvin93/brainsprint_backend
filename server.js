import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import http from 'http';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import connectDB from './src/config/db.config.js';

dotenv.config();
connectDB();

const app = express();
const httpServer = http.createServer(app);

// Middleware
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cors('*'));
app.use(morgan('dev'));
app.use(helmet());
app.use(cookieParser());

// Static Files
app.use(express.static('public'));

// Welcome Route
app.get('/v1/api', (req, res) => {
  sendApiResponse(res, 'Welcome to Integration Tools Service');
});

// Handle Invalid Routes
app.use((req, res) => {
  res.status(404).json({
    error: 'Invalid API Path',
    message: `The path '${req.originalUrl}' does not exist`,
  });
});

// Start Server
const PORT = process.env.PORT || 8090;
httpServer.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// Graceful Shutdown
process.on('SIGINT', () => {
  console.log('Shutting down server...');
  httpServer.close(() => {
    console.log('Server shut down gracefully');
    process.exit(0);
  });
});

export { app };
