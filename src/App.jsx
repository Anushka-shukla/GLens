import './App.css';
import Home from './views/Home/Home';
import BottomNav from "./components/BottomNav";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lens from './views/Lens/Lens';

// Create an inner component inside App to use useLocation
function AppWithRouter() {
  const location = useLocation();
  const hideBottomNav = location.pathname === '/lens';

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lens" element={<Lens />} />
      </Routes>

      {!hideBottomNav && <BottomNav />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWithRouter />
    </Router>
  );
}

export default App;
