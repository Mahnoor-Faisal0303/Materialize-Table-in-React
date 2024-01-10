import React from 'react';
import CustomTable from './Components/CustomTable';
import './App.css';
import { data, headers } from './Components/Data';
const App: React.FC = () => {
  return (
    <div>
      <h1 id="textStyle">Materialize Table</h1>
      <CustomTable data={data} headers={headers}/>
    </div>
  );
};
export default App;
