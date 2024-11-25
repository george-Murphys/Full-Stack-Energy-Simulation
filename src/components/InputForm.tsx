import React, {  useState, useEffect } from "react";
import  './../App.css';
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid2,
  Stack
  

} from "@mui/material";
import Grid from '@mui/material/Grid2';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { LineChart, BarChart, TableView } from "./DataVisualizationComponents.tsx"; // Import components for visualization


// Define the type of mockData using an index signature
interface MockData {
  [parameter: string]: {
    [site: string]: {
      [timeSeries: string]: number[]; // Array of numbers representing data
    };
  };
}


const InputForm = () => {
  
 // State for storing user inputs
 const [temperatureUnit, setTemperatureUnit] = useState("Celsius");
 const [buildingSize, setBuildingSize] = useState("10000 sqft");
 const [insulationFactor, setInsulationFactor] = useState("");
 const [hvacEfficiency, setHvacEfficiency] = useState("16 SEER");

 // Predefined options
 const houseSizes = ["1200 sqft", "1500 sqft", "1800 sqft", "2000 sqft", "2500 sqft"];
 const buildingSizes = [
   "5000 sqft",
   "10000 sqft",
   "15000 sqft",
   "20000 sqft",
   "25000 sqft",
   "30000 sqft",
   "35000 sqft",
   "40000 sqft",
   "45000 sqft",
   "50000 sqft",
 ];
 const hvacEfficiencies = [
   { value: "13 SEER", description: "Standard for most modern homes built post-2006." },
   { value: "16 SEER", description: "High efficiency, common in energy-conscious homes." },
   { value: "20 SEER", description: "Premium efficiency, typical for extreme climates." },
 ];
       // theme colors
const theme = {
 primary: '#003366',
 secondary: '#4a90e2',
 background: '#f8f9fa',
 surface: '#ffffff',
 text: {
   primary: '#2c3e50',
   secondary: '#7f8c8d'
 }
};

//SideBar Controls
const [sidebarOpen, setSidebarOpen] = useState(true);
 
  // Handle sidebar toggle
  const handleSidebarToggle = () => {
    setSidebarOpen(prev => !prev);
    
  };

  const [category, setCategory] = useState("Heat Pump Performance");
  const [parameter, setParameter] = useState("Total heat pump power (W)");
  const [site, setSite] = useState("Oregon");
  const [viewType, setViewType] = useState("Graph");
  const [timeSeries, setTimeSeries] = useState("Minute");
  const [simulationData, setSimulationData] = useState([]);

  // Mock data for demonstration (replace with fetched data)
   // Define mock data with the correct structure
   const mockData: MockData = {
    "Total heat pump power (W)": {
      Oregon: {
        "1 second": [10, 20, 30],
        "1 minute": [100, 150, 200],
      },
      Florida: {
        "1 second": [20, 40, 30],
        "1 minute": [120, 180, 240],
      },
    },
    // Add more parameters and sites as needed
  };

  // Predefined alternative time-series options
  const timeSeriesOptions = ["Minute", "Hour", "Day", "Week"];

  
  
  // 1. Add a state for the test data
  const [testData, setTestData] = useState<TestData | null>(null);

  const fetchBackendData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/test');
      const data = await response.json();
      setTestData(data); // Store the data in state
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const [simulationSeason, setSimulationSeason] = useState('Summer');

// Handler for analysis buttons
const handleSimulation = (analysisType: string) => {
  console.log(`Simulation ${analysisType} .. Done`);
  // Add your analysis logic here
};

  interface TestData {
    id:number,
    name: string,
    energyUsage: number,
    efficiency: number
  }
  // 3. Use useEffect to fetch data when component mounts
useEffect(() => {
  fetchBackendData();
  fetchSimulationData();
  // Data for visualization
 
}, []);

const fetchSimulationData = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/simulationData');
    const data = await response.json();
    setSimulationData(data.data); // Store the data in state
    console.log(simulationData );
  } catch (error) {
    console.error('Error fetching data:', error);
  }}

  const data: number[] = simulationData;
   

   

  return (

    
    <Box sx={{ display: 'flex',flexDirection: 'column', minHeight: '100vh' }}>
      {/* Navigation Bar */}
      <Box sx={{ 
        width: '100%', 
        height: '64px', 
        backgroundColor: '#003366', 
        position: 'fixed',
        top: 0,
        left: 0,  // Add this
      right: 0, // Add this
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px'
      }}>
         {/* Add sidebar toggle button */}
         <IconButton
          color="inherit"
          onClick={handleSidebarToggle}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ color: '#fff' }}>
          Building Energy Simulation 
        </Typography>
    <Box sx={{ flexGrow: 1 }} /> {/* This pushes the following items to the right */}

      </Box>
     
      
      {/* Sidebar with transition */}
      <Box
        sx={{
          width: sidebarOpen ? '240px' : '0px',
          backgroundColor: '#f5f5f5',
          borderRight: '1px solid #ddd',
          position: 'fixed',
          height: 'calc(100vh - 64px)',
          left:0,
          top: '64px',
          transition: 'width 0.3s ease',
          overflowX: 'hidden',
          whiteSpace: 'nowrap'
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography 
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              color: theme.text.secondary,
              fontSize: '14px'
            }}
          >
            Sidebar Controls
          </Typography>
        </Box>
      </Box>

      {/* Main Content Area with transition */}
      <Box sx={{
        marginLeft: sidebarOpen ? '240px' : '0px',
        marginTop: '64px',
        flex: 1,
        padding: '20px',
        transition: 'margin-left 0.3s ease',
        width: sidebarOpen ? 'calc(100% - 240px)' : '100%',
        position: 'relative' // Add this
      }}>
</Box>
        {/* Content Grid */}
        <Box sx={{ display: 'grid', gap: 3, maxWidth: '1200px', margin: '0 auto', padding: '0 20px'  }}>
          {/* Basic Information Card */}
          {/* Simulation Controller Card */}
<Paper sx={{ 
  p: 3, 
  mb: 3,
  backgroundColor: '#f5f5f5',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  borderRadius: '8px'
}}>
  <Typography variant="h6" sx={{ mb: 2 }}>Simulation Controller</Typography>
  <Grid2 container spacing={2}>
    {/* First Column */}
    <Grid2  size={{xs:12,md:4}} component="div" >
      <Stack spacing={2}>
        <FormControl fullWidth>
          <InputLabel>Temperature Unit</InputLabel>
          <Select
            value={temperatureUnit}
            onChange={(e) => setTemperatureUnit(e.target.value)}
          >
            <MenuItem value="Celsius">Celsius (°C)</MenuItem>
            <MenuItem value="Fahrenheit">Fahrenheit (°F)</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Building Size</InputLabel>
          <Select
            value={buildingSize}
            onChange={(e) => setBuildingSize(e.target.value)}
          >
            {houseSizes.map((size) => (
              <MenuItem key={size} value={size}>
                {size} (Residential)
              </MenuItem>
            ))}
            {buildingSizes.map((size) => (
              <MenuItem key={size} value={size}>
                {size} (Commercial)
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Site</InputLabel>
          <Select
            value={site}
            onChange={(e) => setSite(e.target.value)}
          >
            <MenuItem value="Oregon">Oregon</MenuItem>
            <MenuItem value="Florida">Florida</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Grid2>

    {/* Second Column */}
    <Grid2  size={{xs:12, md:4}}>
      <Stack spacing={2}>
        <FormControl fullWidth>
          <InputLabel>View Type</InputLabel>
          <Select
            value={viewType}
            onChange={(e) => setViewType(e.target.value)}
          >
            <MenuItem value="Graph">Graph</MenuItem>
            <MenuItem value="Table">Table</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Time Series</InputLabel>
          <Select
            value={timeSeries}
            onChange={(e) => setTimeSeries(e.target.value)}
          >
            {timeSeriesOptions.map((option) => (
              <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Simulation Season</InputLabel>
          <Select
            value={simulationSeason}
            onChange={(e) => setSimulationSeason(e.target.value)}
          >
            <MenuItem value="Summer">Summer</MenuItem>
            <MenuItem value="Fall">Fall</MenuItem>
            <MenuItem value="Winter">Winter</MenuItem>
            <MenuItem  value="Spring">Spring</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Grid2>

    {/* Third Column */}
    <Grid2   size={{xs:12, md:4}}>
      <Stack spacing={2}>
        <Typography variant="subtitle1" gutterBottom>Analysis Tools</Typography>
        
        <Button 
          variant="contained" 
          fullWidth
          onClick={() => handleSimulation('Running')}
          sx={{ mb: 1 }}
        >
          Run Simulation
        </Button>

        <Button 
          variant="contained" 
          fullWidth
          onClick={() => handleSimulation('Loading')}
          sx={{ mb: 1 }}
        >
          Load Previouse Simulation
        </Button>

        <Button 
          variant="contained" 
          fullWidth
          onClick={() => handleSimulation('Saving')}
          sx={{ mb: 1 }}
        >
          Save Simulation
        </Button>
      </Stack>
    </Grid2>
  </Grid2>
</Paper>

          
          <Paper sx={{ p: 3 }}>
          <Box sx={{ padding: 4, bgcolor: "#f9f9f9", borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom>
        Data Visualization
      </Typography>

      

      {/* Render the selected visualization */}
      <Box sx={{ mt: 4, p: 3, border: "1px solid #ddd", borderRadius: 2, bgcolor: "#fff" }}>
        {viewType === "Graph" && <LineChart data={data} parameter={parameter} />}
        {viewType === "Histogram" && <BarChart data={data} parameter={parameter} />}
        {viewType === "Table" && <TableView data={data} parameter={parameter} />}
      </Box>

      {/* Refresh Button */}
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button variant="contained" color="primary" onClick={fetchSimulationData}>
          Refresh Data
        </Button>
      </Box>
    </Box>
          </Paper>

        
          <Box >
  {/* Data Display Section */}
<Box>
  {testData ? (
    <Box sx={{ bgcolor: 'background.paper', p: 3, borderRadius: 1 }}>
      {/* Title - Changed from Typography p variant to div */}
      <Typography variant="h4" component="div" gutterBottom>
        Energy Simulation Data
      </Typography>

      {/* Table container */}
      <Box
        sx={{
          width: "100%",
          overflowX: "auto",
          boxShadow: 1,
          borderRadius: 1,
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Building Name</TableCell>
              <TableCell>Energy Usage</TableCell>
              <TableCell>Efficiency</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{testData.id}</TableCell>
              <TableCell>{testData.name}</TableCell>
              <TableCell>{testData.energyUsage}</TableCell>
              <TableCell>{testData.efficiency}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Box>
  ) : (
    <Typography>Loading data...</Typography>
  )}
</Box>


          {/* HVAC Efficiency Table */}
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>HVAC Efficiency Standards</Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: theme.primary }}>
                    <TableCell sx={{ color: '#fff' }}>HVAC Efficiency</TableCell>
                    <TableCell sx={{ color: '#fff' }}>Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {hvacEfficiencies.map((efficiency) => (
                    <TableRow key={efficiency.value}>
                      <TableCell>{efficiency.value}</TableCell>
                      <TableCell>{efficiency.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};


export default InputForm;
