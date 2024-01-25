import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreenComponent from './Components/HomeScreen';
import { DetailComponent } from './Components/DetailTable'
import './App.css';
import { data, headers } from './Data/Data';
import APP_ROUTES from './Constant/Routes';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreenComponent data={data} headers={headers} />} />
        <Route path={APP_ROUTES.DETAILS_PAGE} element={<DetailComponent />} />
      </Routes>
    </Router>
  );
};

export default App;

