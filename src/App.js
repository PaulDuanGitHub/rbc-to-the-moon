import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import WelcomePage from './pages/WelcomePage';
import LanguagePage from './pages/LanguagePage';
import EnglishPage from './pages/EnglishPage';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/en" element={<EnglishPage/>}/>
          <Route path="*" element={<LanguagePage/>}/>
          <Route/>
        </Routes>
      </HashRouter>
      {/* <HomePage></HomePage>
      <WelcomePage></WelcomePage> */}
    </div>
  );
}

export default App;
