import './styles/App.css';
import ResponsiveAppBar from './components/appBar';
import Footer from './components/footer'
import { Routes, Route } from 'react-router-dom';
import Reservations from './components/reservations'
import Home from './components/home'

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
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
