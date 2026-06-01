import "../Styles/Footer.css";
import instagram from "../assets/instagram.jpeg";
import facebook from "../assets/facebook.jpeg";
import twitter from "../assets/twitter.jpeg";
import whatsapp from "../assets/whatsapp.jpeg";
function Footer(){
    return(
        <footer className="footer">
            <h3>Bangalore Bakery</h3>
            <p>Freshly Baked Every Day 🍰</p>
            <div className="social-icons">
                <img src={instagram} alt="icon" />
                <img src={facebook} alt="icon" />
                <img src={twitter} alt="icon" />
                <img src={whatsapp} alt="icon" />
            </div>
            <p>© 2026 Bangalore Bakery. All Rights Reserved.</p>
        </footer>
    );
}
export default Footer;