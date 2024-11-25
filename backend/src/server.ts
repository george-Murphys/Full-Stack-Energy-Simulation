import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// CORS configuration
app.use(cors({
  origin: 'http://localhost:5173', // Your React app's URL
  credentials: true
}));

app.use(express.json());


// Test route
app.get('/api/test', (req: Request, res: Response) => {
  res.json(
    { id: 1, name: "Building A", energyUsage: "1200 kWh", efficiency: "85%" }
  );
});


app.get('/api/simulationData', (req: Request, res: Response) => {
  res.json({data:
    [0.0,2.63,5.26,7.89,10.53,13.16,15.79,18.42,21.05,23.68,26.32,28.95,31.58,34.21,36.84,39.47,42.11,44.74,47.37,50.0]}
  );
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});