import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";
import { HashRouter as Router } from 'react-router-dom'


const Layout = () =>{
    return(
    <div>
        <Router>
          <NavBar />
        </Router>
        <Footer/>
    </div>
    )
}
export default Layout;