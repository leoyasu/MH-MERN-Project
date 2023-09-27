import './styles/App.css';
import ResponsiveAppBar from './components/appBar';
import MainSwiper from './components/swiper'
import Footer from './components/footer'
import { Routes, Route } from 'react-router-dom';
import ReservationsContainer from './components/reservations'
import Home from './components/home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveAppBar />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reservations' element={<ReservationsContainer />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
