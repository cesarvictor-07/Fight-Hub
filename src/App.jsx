import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SsbuHome from './pages/SsbuHome';
import Sf6Home from './pages/Sf6Home';
import Tekken8Home from './pages/Tekken8Home';
import Mk1Home from './pages/Mk1Home';
import Fruits from './pages/Fruits';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/SsbuHome" element={<SsbuHome />} />
          <Route path="/Tekken8Home" element={<Tekken8Home />} />
          <Route path="/Sf6Home" element={<Sf6Home />} />
          <Route path="/Mk1Home" element={<Mk1Home />} />
          <Route path="/fruits" element={<Fruits />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;