import './App.css';
import Home from './views/Home/Home';
import BottomNav from "./components/BottomNav";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lens from './views/Lens/Lens';
import ImageSearchResult from './views/ImageSearchResult/ImageSearchResult';
import ImageSearchContext from './context/ImageSearchContext';
import { useState } from 'react';

// Create an inner component inside App to use useLocation
function AppWithRouter() {
  const location = useLocation();
  const hideBottomNav = location.pathname === '/lens';
  
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lens" element={<Lens />} />
        <Route path="/search/image" element={< ImageSearchResult/>}/>
      </Routes>

      {!hideBottomNav && <BottomNav />}
    </>
  );
}

function App() {
  const [capturedImage, setCapturedImage] = useState(null);
  return (
    <ImageSearchContext.Provider value={[capturedImage, setCapturedImage]}>
    <Router>
      <AppWithRouter />
    </Router>
    </ImageSearchContext.Provider>
  );
}

export default App;
