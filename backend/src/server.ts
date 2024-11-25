import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

function generateRandomData(startDate: string, days: number) {
  const result = [];
  const start = new Date(startDate);
  
  for (let i = 0; i < days; i++) {
    const currentDate = new Date(start);
    currentDate.setDate(start.getDate() + i);
    
    result.push({
      date: currentDate.toISOString().split('T')[0],
      value: Number((Math.random() * 100 + 200).toFixed(1)) 
    });
  }
  
  return result;
}

const threeMothsData = generateRandomData('2023-07-01', 120);




// Middleware
app.use(cors());
app.use(express.json());

// CORS configuration
app.use(cors({
  origin: 'http://localhost:5173', 
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
    threeMothsData}
  );
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});