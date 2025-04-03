import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import homeRoutes from './routes/homeRoutes.js';
import { connectDB } from './config/db.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger/swagger.js';

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/images', express.static('public/images'));
app.use('/api/homes', homeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
