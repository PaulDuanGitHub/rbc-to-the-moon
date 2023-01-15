import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import WelcomePage from './pages/WelcomePage';
import LanguagePage from './pages/LanguagePage';
import MapPage from './pages/MapPage';
import QRComponment from './pages/QRComponenet';
import EnglishPage from './pages/EnglishPage';
import LHBW from './pages/LHBW';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/en" element={<EnglishPage/>}/>
          <Route path="/lang" element={<LanguagePage/>}/>
          <Route path="/ho" element={<LHBW/>}/>
          <Route path="/fi" element={<MapPage/>}/>
          <Route path="*" element={<HomePage/>}/>
          <Route/>
        </Routes>
      </HashRouter>
      {/* <HomePage></HomePage>
      <WelcomePage></WelcomePage> */}
    </div>
  );
}

export default App;
