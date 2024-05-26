import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Program from './Program/Program';
import About from './About/About';
import Home from './Components/Home';
import NutritionCal from './Nutrition/NutritionCal';
import Consultation from './Consultation/Consultation';
import NavBar from './Navbar/NavBar';
import Footer from './Footer/Footer';
import AboutProduct from './Program/AboutProduct';
import FreeMat from './FreeMaterial/FreeMat';
import Cart from './Cart/Cart';
import AboutConsultation from './Consultation/AboutConsultation';
import LoginForm from './LoginForm/LoginForm';
import ScrollButton from './ScrollButton/ScrollButton';

function App() {
  return (
    <div className="main-root">
      <Router>
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/program_section" element={<Program />} />
            <Route path="/about_section" element={<About />} />
            <Route path="/nutritionCal_section" element={<NutritionCal />} />
            <Route path="/consultation_section" element={<Consultation />} />
            <Route path="/program_section/:name" element={<AboutProduct />} />
            <Route path="/consultation_section/:titleC" element={<AboutConsultation />} />
            <Route path="/freeMat_section" element={<FreeMat />} />
            <Route path="/freeMat_section/loginForm_section" element={<LoginForm />} />
            <Route path="/cart_section" element={<Cart />} />
          </Routes>
        </div>
        <Footer />
        <ScrollButton/>
      </Router>
    </div>
  );
}

export default App;

