import {BrowserRouter as 
    Router,
    Route, 
    Routes } from 'react-router-dom'
import Program from '../Program/Program';
import About from '../About/About';
import Home from '../Components/Home';
import NutritionCal from '../Nutrition/NutritionCal';
import Consultation from '../Consultation/Consultation';


const Routers = () =>{
    return(
        <Router >

    <Routes >
      <Route path="/" exact element={<Home/>} />
      <Route path="/program" element={<Program/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/nutritonCal" element={<NutritionCal/>} />
      <Route path="/consultation" element={<Consultation/>} />
    </Routes>  
 
</Router>
    )
}
export default Routers