import logo from './logo.svg';
import './App.css';
import LanguagePage from './pages/LanguagePage';
import MapPage from './pages/MapPage';
import ChoicePage from './pages/ChoicePage';
import OpenAccount from './pages/OpenAccount';
// import AppointmentForm from './pages/AppointmentForm';
import Submit from './pages/Submit';
import RecieveMoney from './pages/RecieveMoney';
import LHBW from './pages/LHBW';
import { HashRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/ch" element={<ChoicePage/>}/>
          <Route path="/ba" element={<OpenAccount/>}/>
          {/* <Route path="/fo" element={<AppointmentForm/>}/> */}
          <Route path="/su" element={<Submit/>}/>
          <Route path="/fi" element={<MapPage/>}/>
          <Route path="/lang" element={<LanguagePage/>}/>
          <Route path="/re" element={<RecieveMoney/>}/>
          <Route path="/ho" element={<LHBW/>}/>
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
