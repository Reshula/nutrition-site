import About from "../About/About";
import Home from "../Components/Home"
import Program from "../Program/Program";
import NavBar from "../Navbar/NavBar";
import NutritionCal from "../Nutrition/NutritionCal";
import Routers from "../routers/Routers";
import Footer from "../Footer/Footer";
import { HashRouter as Router } from 'react-router-dom'


const Layout = () =>{
    return(
    <div>
        <Router>
          <NavBar />
        </Router>
        <div>
        <Routers/>
        </div>
        {/* <Home /> */}
        {/* <Program />
        <About/>
        <NutritionCal /> */}
        <Footer/>
    </div>
    )
}
export default Layout;