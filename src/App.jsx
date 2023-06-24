import { useState } from 'react';

import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Homepage from './Components/Home';
import './App.scss';

function App() {
  return (
    <div className="layout">
      <Navbar />
      <Sidebar />
      <Homepage />
    </div>
  );
}

export default App;
