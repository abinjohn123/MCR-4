import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Homepage from './Components/Home';
import SinglePost from './Components/Home/SingePost';
import './App.scss';

function App() {
  return (
    <div className="layout">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="posts/:postId" element={<SinglePost />} />
      </Routes>
    </div>
  );
}

export default App;
