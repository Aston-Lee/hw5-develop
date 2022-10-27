import './App.css';
import RegistrationPage from './pages/RegistrationPage';
import MainPage from './pages/MainPage';
import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<LandingPage />}/>
        <Route path={'/MainPage'} element={<MainPage />}/>
        <Route path={'/RegistrationPage'} element={<RegistrationPage />}/>
        <Route path={'/ProfilePage'} element={<ProfilePage/>}/>
      </Routes>
    </Router>

  );
}

export default App;
