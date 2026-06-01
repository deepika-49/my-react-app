import "../Styles/Gallery.css";
import Chocolate from "../assets/Chocolate.jpeg";
import Venilla from "../assets/Venilla.jpeg";
import RedVelvet from "../assets/Red-velvet.jpeg";
import ButterScotch from "../assets/Butter-scotch.jpg";
import BlackForest from "../assets/Black-Forest.jpeg";
import straberry from "../assets/straberry.jpeg";
function Gallery(){
    return(
        <section className="gallery">
            <div className="gallery-container">
            <img src={Chocolate} alt="cake1" />
            <img src={Venilla} alt="cake2" />
            <img src={RedVelvet} alt="cake3" />
            <img src={ButterScotch} alt="cake4" />
            <img src={BlackForest} alt="cake5" />
            <img src={straberry} alt="cake6" />
        </div>
        </section>
        
    );
}
export default Gallery;