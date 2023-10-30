import './styles/App.css';
import ResponsiveAppBar from './components/appBar';
import FooterBar from './components/footerBar'
import { Routes, Route } from 'react-router-dom';
import Reservations from './components/reservations'
import Home from './components/home'
import DoctorDetails from './components/doctorDetails'
import DoctorPlans from './components/doctorPlans'
import SignIn from './components/signIn'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveAppBar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/reservations' element={<Reservations />} />
          <Route path='/doctorDetails' element={<DoctorDetails />} />
          <Route path='/doctorPlans' element={<DoctorPlans />} />
        </Routes>
      </main>
      <footer>
        <FooterBar />
      </footer>
    </div>
  );
}

export default App;
