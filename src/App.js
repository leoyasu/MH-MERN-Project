import './styles/App.css';
import ResponsiveAppBar from './components/appBar';
import FooterBar from './components/footerBar'
import { Routes, Route } from 'react-router-dom';
import Reservations from './components/reservations'
import Home from './components/home'
import DoctorDetails from './components/doctorDetails'
import DoctorPlans from './components/doctorPlans'
import SignIn from './components/signIn'
import SignUp from './components/signUp'
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((store) => store.storeUser.userSignIn);

  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveAppBar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          {!user && <Route path='/signIn' element={<SignIn />} />}
          {!user && <Route path='/signUp' element={<SignUp />} />}
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
