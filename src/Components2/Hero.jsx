import "../Styles/hero.css";
function Hero() {
    return (
    <section className="hero">
        <div className="overlay">
            <div className="hero-content">
                <h1>Freshly Baked Every Day</h1>
                <p> Enjoy delicious cakes, breads and pastries made with
                    premium ingredients.</p>
                <button>Explore Menu</button>
            </div>
        </div>
    </section>
);
}

export default Hero;