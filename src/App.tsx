import React from 'react';
import CustomTable from './Components/CustomTable';
import { data } from './Components/Data';
const App: React.FC = () => {
  return (
    <div>
      <h1 id="textStyle">Materialize Table</h1>
      <CustomTable data={data} />
    </div>
  );
};
export default App;
