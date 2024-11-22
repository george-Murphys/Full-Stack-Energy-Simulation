import React from 'react'

import {BrowserRouter as Router, Routes,Route}  from 'react-router-dom'

import HistoricalDataPage  from './components/HistoricalDataPage'

import InputForm from './components/InputForm' 

import ResultsPage from './components/ResultsPage'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<InputForm/>}/>     
        <Route path="/results" element={<ResultsPage/>}/>     
        <Route path="/historical" element={<HistoricalDataPage/>}/>      
      </Routes >
    </Router>
  )
}