import { useState } from 'react';

import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import './App.scss';

function App() {
  return (
    <div className="layout">
      <Navbar />
      <Sidebar />
      <div>
        <p>App comes here</p>
      </div>
    </div>
  );
}

export default App;
