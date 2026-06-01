import "../Styles/cake-section.css";
import Chocolate from "../assets/Chocolate.jpeg";
import Venilla from "../assets/Venilla.jpeg";
import RedVelvet from "../assets/Red-velvet.jpeg";
import ButterScotch from "../assets/Butter-scotch.jpg";
import BlackForest from "../assets/Black-Forest.jpeg";
import straberry from "../assets/straberry.jpeg";
function CakeSection() {
    return(
        <section className="cakes">
            <h2>Our Special Cakes</h2>
            <div className="cake-container">
                <div className="cake-card">
                    <img src={Chocolate} alt="Chocolate-Cake" className="cake-img" />
                    <h3>Chocolate Cake</h3>
                    <p>Rich chocolate flavour.</p>
                    <h4>₹500</h4>
                    <button>Order Now</button>
                </div>
                <div className="cake-card">
                    <img src={Venilla} alt="Venilla-Cake" className="cake-img" />
                    <h3>Vanilla Cake</h3>
                    <p>Soft and creamy Vanilla.</p>
                    <h4>₹250</h4>
                    <button>Order Now</button>
                </div>
                <div className="cake-card">
                    <img src={RedVelvet} alt="Red-Velvet" className="cake-img" />
                    <h3>Red Velvet Cake</h3>
                    <p>Classic red velvet taste.</p>
                    <h4>₹390</h4>
                    <button>Order Now</button>
                </div>
                <div className="cake-card">
                    <img src={ButterScotch} alt="Butter-Scotch" className="cake-img" />
                    <h3>Butter Scotch</h3>
                    <p>Creamy with notes of caramel.</p>
                    <h4>₹600</h4>
                    <button>Order Now</button>
                </div>
                <div className="cake-card">
                    <img src={BlackForest} alt="Black-Forest" className="cake-img" />
                    <h3>Black Forest</h3>
                    <p>Chocolate layers with tart cherries.</p>
                    <h4>500</h4>
                    <button>Order Now</button>
                </div>
                <div className="cake-card">
                    <img src={straberry} alt="straberry" className="cake-img" />
                    <h3>Strawberry</h3>
                    <p>captures the sweetness of the frosting.</p>
                    <h4>₹650</h4>
                    <button>Order Now</button>
                </div>
            </div>
        </section>
    );
}
export default CakeSection;