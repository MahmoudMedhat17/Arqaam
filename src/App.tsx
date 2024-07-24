import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Aboutus from "./components/Aboutus/Aboutus";
import Mission from "./components/Mission/Mission";
import Services from "./components/Ourservices/Services";
import Partners from "./components/Partners/Partners";
import Contactus from "./components/Contactus/Contactus";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Aboutus />
      <Mission />
      <Services />
      <Partners />
      <Contactus />
      <Footer />
    </>
  );
};

export default App;
