import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import LanguagePage from './pages/LanguagePage';
import Map from './pages/map';
import QRComponment from './pages/QRComponenet';

function App() {
  return (
    <div className="App">
      <HomePage></HomePage>
      <LanguagePage></LanguagePage>
      <Map></Map>
    </div>
  );
}

export default App;
