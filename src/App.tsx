import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomTable from './Components/CustomTable';
import { DetailComponent } from './Components/DetailTable'
import './App.css';
import { data, headers } from './Data/Data';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomTable data={data} headers={headers} />} />
        <Route path="/details/:id" element={<DetailComponent />} />
      </Routes>
    </Router>
  );
};

export default App;

