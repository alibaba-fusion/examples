import React, { useState } from 'react';
// import { Switch } from '@alifd/next';
import Switch from '@alifd/next/lib/switch';
import '@alifd/next/lib/switch/style.js';
//import '@alifd/next/lib/switch/index.css';
import './App.css';
import './theme-dark.css';
import './theme-light.css';

function App() {
  const [content, setContent] = useState('light theme');
  const handleChange = checked => {
    document.documentElement.classList.toggle('dark');
    document.documentElement.classList.toggle('light');

    if (checked) {
      setContent('dark theme');
    } else {
      setContent('light theme');
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <Switch unCheckedChildren="🌞" checkedChildren="🌙" onChange={handleChange}/>
        <h1>{content}</h1>
      </header>
    </div>
  );
}

export default App;
