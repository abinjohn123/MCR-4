import { useState } from 'react';

import Sidebar from './Components/Sidebar';
import './App.scss';

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <div>
        <p>App comes here</p>
      </div>
    </div>
  );
}

export default App;
