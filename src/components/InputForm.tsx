import React, { useRef, useEffect, useState } from "react";
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
  Grid2

} from "@mui/material";
import Grid from '@mui/material/Grid2';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';




const InputForm = () => {
  
 // State for storing user inputs
 const [temperatureUnit, setTemperatureUnit] = useState("Celsius");
 const [buildingSize, setBuildingSize] = useState("");
 const [insulationFactor, setInsulationFactor] = useState("");
 const [hvacEfficiency, setHvacEfficiency] = useState("");

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
       // Add these theme colors at the top of your component
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

const [sidebarOpen, setSidebarOpen] = useState(true);
 


  // Handle sidebar toggle
  const handleSidebarToggle = () => {
    setSidebarOpen(prev => !prev);
    
  };

  
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
          Solar Panel Energy Simulation
        </Typography>
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
            Home / Simulation / New Project
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
        {/* Content Grid */}
        <Box sx={{ display: 'grid', gap: 3, maxWidth: '1200px', margin: '0 auto', padding: '0 20px'  }}>
          {/* Basic Information Card */}
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Basic Information</Typography>
            <Grid container spacing={2}>
              <Grid size={{xs:12, md:6}}>
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
              </Grid>
              <Grid size={{xs:12, md:6}}>
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
              </Grid>
            </Grid>
          </Paper>

          {/* Technical Specifications Card */}
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Technical Specifications</Typography>
            <Grid container spacing={2}>
              <Grid size={{xs:12, md:6}}>
                <TextField
                  fullWidth
                  label="Insulation Factor (R-value)"
                  type="number"
                  value={insulationFactor}
                  onChange={(e) => setInsulationFactor(e.target.value)}
                />
              </Grid>
              <Grid size={{xs:12, md:6}}>
                <FormControl fullWidth>
                  <InputLabel>HVAC Efficiency</InputLabel>
                  <Select
                    value={hvacEfficiency}
                    onChange={(e) => setHvacEfficiency(e.target.value)}
                  >
                    {hvacEfficiencies.map((efficiency) => (
                      <MenuItem key={efficiency.value} value={efficiency.value}>
                        {efficiency.value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>

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
