import React, { useState } from 'react';
import { Switch } from '@alifd/next';
import './App.css';

function App() {
  const [content, setContent] = useState('light theme');
  const handleChange = checked => {
    document.documentElement.classList.toggle('dark');
    if (checked) {
      setContent('dark theme');
    } else {
      setContent('light theme');
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <Switch checkedChildren="🌞" unCheckedChildren="🌙" onChange={handleChange}/>
        <h1>{content}</h1>
      </header>
    </div>
  );
}

export default App;
