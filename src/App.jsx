import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Ssbu from './pages/ssbu/Ssbu';
import Sf6 from './pages/sf6/Sf6';
import Tekken8 from './pages/tekken8/Tekken8';
import Mk1 from './pages/mk1/Mk1';
import Fruits from './pages/Fruits';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Ssbu" element={<Ssbu />} />
          <Route path="/Tekken8" element={<Tekken8 />} />
          <Route path="/Sf6" element={<Sf6 />} />
          <Route path="/Mk1" element={<Mk1 />} />
          <Route path="/fruits" element={<Fruits />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;