import "../Styles/about.css";
import bakeryImg from "../assets/bakery.jpeg";

function AboutPage() {
  return (
    <section className="about">
      <div className="about-image">
        <img src={bakeryImg} alt="bakery" />
      </div>

      <div className="about-content">
        <h2>About Our Bakery</h2>
        <p>
          We have been serving freshly baked cakes, breads and pastries made with premium ingredients.
          Our bakery is known for quality, taste and customer satisfaction.
        </p>
        <button>Learn More</button>
      </div>
    </section>
  );
}

export default AboutPage;