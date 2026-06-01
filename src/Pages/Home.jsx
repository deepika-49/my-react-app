import Navbar from "../Components2/Navbar";
import Hero from "../Components2/Hero";
import CakeSection from "../Components2/CakeSection";
import About from "../Components2/About";
import Gallery from "../Components2/Gallery";
import Contact from "../Components2/Contact";
import Footer from "../Components2/Footer";

function Home() {
    return (
    <div>
        <Navbar />
        <Hero />
        <CakeSection />
        <About />
        <Gallery />
        <Contact />
        <Footer />
    </div>
);
}

export default Home;