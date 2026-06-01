import "../Styles/Contact.css";
function Contact(){
    return(
        <section className="contact">
            <h2>Contact Us</h2>
            <div className="contact-container">
                <div className="contact-info">
                    <h3>Bangalore Bakery</h3>
                    <p>📍 Bangalore, Karnataka</p>
                    <p>📞 +91 9876543210</p>
                    <p>📧 bangalorebakery@gmail.com</p>
                </div>
                <div className="contact-form">
                    <input type="email" placeholder="Enter your Email" />
                    <button>Submit</button>
                </div>
            </div>
        </section>
    );
}
export default Contact;