import { BrowserRouter as Routers, Route, Routes } from 'react-router-dom';
import './App.css';
import Program from './Program/Program';
import About from './About/About';
import Home from './Components/Home';
import NutritionCal from './Nutrition/NutritionCal';
import Consultation from './Consultation/Consultation';
import NavBar from './Navbar/NavBar';
import Footer from './Footer/Footer';



function App() {
  return (
    <div>
    <Routers>
    <NavBar/>
    <Routes >
      <Route path="/" exact element={<Home/>} />
      <Route path="/program_section" element={<Program/>} />
      <Route path="/about_section" element={<About/>} />
      <Route path="/nutritionCal_section" element={<NutritionCal/>} />
      <Route path="/consultation_section" element={<Consultation/>} />
    </Routes>  
    
    </Routers>
    
    <Footer/>
    </div>
  );
}

export default App;
