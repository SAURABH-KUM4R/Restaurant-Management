import Express from "express";
import { config } from 'dotenv';
import userRoutes from './Router/user.routes.js'
// used to configure the file to get value from .env file
config();

const app = Express();

// Routes
app.use("/api/v1/user",userRoutes);

export default app;