import './styles/App.css';
import ResponsiveAppBar from './components/appBar';
import FooterBar from './components/footerBar'
import { Routes, Route } from 'react-router-dom';
import Reservations from './components/reservations'
import Home from './components/home'
import DoctorDetails from './components/doctorDetails'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveAppBar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/reservations' element={<Reservations />} />
          <Route path='/doctorDetails' element={<DoctorDetails />} />
        </Routes>
      </main>
      <footer>
        <FooterBar />
      </footer>
    </div>
  );
}

export default App;
