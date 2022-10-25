import './App.css';
import RegistrationPage from './pages/RegistrationPage';
import MainPage from './pages/MainPage';
import LandingPage from './pages/LandingPage';
// import Landing from './pages/Landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    // <RegistrationPage />
    // <LoginPage />
    // <MainPage />
    // <LandingPage />
    // <Landing />

    <Router>
      <Routes>
        {/* <Route path={'/'} element={<LoginPage />}/> */}
        <Route path={'/'} element={<LandingPage />}/>
        <Route path={'/MainPage'} element={<MainPage />}/>
        <Route path={'/RegistrationPage'} element={<RegistrationPage />}/>
        <Route path={'ProfilePage'} element={<ProfilePage/>}/>
      </Routes>
    </Router>

  );
}

export default App;
