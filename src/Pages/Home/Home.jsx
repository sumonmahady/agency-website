
import Contact from "../../Components/Contact/Contact";
import Courses from "../../Components/Courses/Courses";
import Footer from "../../Components/Footer/Footer";
import Homes from "../../Components/Homes/Homes";
import Reviews from "../../Components/Reviews/Reviews";
import About from "../About/About";


import Nav from "./Navbar/Nav";



const Home = () => {
    return (
        <div>
            <Nav></Nav>
           <div id="homes">
           <Homes></Homes>
           </div>
            <div id="about">
                <About></About>
            </div>
            <div id="courses">
                <Courses></Courses>
            </div>
            <div id="reviews">
                <Reviews></Reviews>
            </div>
            <div id="contact">
                <Contact></Contact>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
      
       
        
    );
};

export default Home;