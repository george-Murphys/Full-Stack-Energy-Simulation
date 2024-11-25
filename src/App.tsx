import React from 'react'

import {BrowserRouter as Router, Routes,Route}  from 'react-router-dom'

import HistoricalDataPage  from './components/HistoricalDataPage'

import InputForm from './components/InputForm' 

import ResultsPage from './components/ResultsPage'

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const theme = createTheme({
  // You can customize your theme here
  palette: {
    mode: 'light', // or 'dark'
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Router>
      <Routes>
        <Route path="/"  element={<InputForm/>}/>     
        <Route path="/results" element={<ResultsPage/>}/>     
        <Route path="/historical" element={<HistoricalDataPage/>}/>      
      </Routes >
    </Router>
    </ThemeProvider>
  )
}