import React from 'react';
import { Select } from '@alifd/next';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Select>
        <Select.Option value={1}>option 1</Select.Option>
        <Select.Option value={2}>option 2</Select.Option>
        <Select.Option value={3}>option 3</Select.Option>
      </Select>
    </div>
  );
}

export default App;
