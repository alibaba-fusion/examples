import React from 'react';
// import { Select as RSelect } from '@alifd/next';
import './App.css';
import Select from '@alifd/next/lib/select/';
import RSelect from '@alifd/next/lib/select/mobile';
import { Select as MSelect } from '@alifd/meet-react';


console.log(Select, '\n========\n', RSelect, '\n========\n', MSelect)

const App = () => {
  return (
    <div className="App">
      <Select>
        <Select.Option value={1}>option 1</Select.Option>
        <Select.Option value={2}>option 2</Select.Option>
        <Select.Option value={3}>option 3</Select.Option>
      </Select>
      <MSelect></MSelect>
      {/* <RSelect></RSelect> */}
      
    </div>
  );
}

export default App;
