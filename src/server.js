import express from 'express';
import { logger } from './middlewares/logger.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import productsRouter from './routers/products.js';
import { connectMongoDB } from './db/connectMongoDB.js';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use(logger);

// routes
app.use('/products', productsRouter);

// 404
app.use(notFoundHandler);

// error handler
app.use(errorHandler);

const startServer = async () => {
  await connectMongoDB();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
