import React from 'react';
import BasicTable from './App2';
import { data } from './Components/Data';
const App: React.FC = () => {
  return (
    <div>
      <h1 id="textStyle">Materialize Table</h1>
      <BasicTable data={data} />
    </div>
  );
};
export default App;
