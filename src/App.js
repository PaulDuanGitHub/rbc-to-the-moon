import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import WelcomePage from './pages/WelcomePage';
import LanguagePage from './pages/LanguagePage';
import Map from './pages/map';
import QRComponment from './pages/QRComponenet';
import EnglishPage from './pages/EnglishPage';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/en" element={<EnglishPage/>}/>
          <Route path="/lang" element={<LanguagePage/>}/>
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
