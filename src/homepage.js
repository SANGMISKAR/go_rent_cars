import React from "react";
import { FaUserCircle, FaHeadset, FaTimesCircle, FaCarSide } from "react-icons/fa";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">GoRentalz</h1>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#cars">Collections</a>
          <a href="#contact">Contacts</a>
        </div>
        <div className="nav-icons">
          <FaUserCircle className="icon" />
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="hero" style={{
        backgroundImage: "url('/images/car-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "90% 60%",
        backgroundRepeat: "no-repeat",
      }}>
        <div className="overlay"></div>
        <div className="hero-content">
          <h2>Premium Car Rental Services</h2>
          <p>Affordable and flexible car rental for every journey.</p>
        </div>
      </header>

      {/* Services Section */}
      <section id="services">
        <h2>Our Services</h2>
        <div className="services">
          <div className="service-item" title="24/7 Support">
            <FaHeadset className="service-icon" />
            <p>24/7 Support</p>
          </div>
          <div className="service-item" title="Free Cancellation">
            <FaTimesCircle className="service-icon" />
            <p>Free Cancellation</p>
          </div>
          <div className="service-item" title="Flexible Rentals">
            <FaCarSide className="service-icon" />
            <p>Flexible Rentals</p>
          </div>
        </div>
      </section>

      {/* Available Cars Section */}
      <section id="cars" className="cars-section">
        <h2>Available Cars</h2>
        <div className="car-list">
          <Link to="/sedanpage" className="car">
            <img src="/images/sedan-display.jpg" alt="Sedan" />
            <h3>Sedan</h3>
          </Link>
          <Link to="/suvpage" className="car">
            <img src="/images/hyundai creta.jpg" alt="SUV" />
            <h3>SUV</h3>
          </Link>
          <Link to="/luxurypage" className="car">
            <img src="/images/BMW 7 Series.jpg" alt="Luxury" />
            <h3>Luxury</h3>
          </Link>
          <Link to="/electricpage" className="car">
            <img src="/images/Hyundai Kona EV.jpg" alt="Electric" />
            <h3>Electric</h3>
          </Link>
        </div>
      </section>

      {/* Customer Reviews Section
      <section className="testimonials">
        <h2>Customer Reviews and Stories</h2>
        <div className="testimonial-container">
          <div className="testimonial">
            <div className="customer-info">
              <img src="images/customer1.jpeg" alt="Customer 1" />
              <div>
                <h3>Ketan Nalawade</h3>
                <p>Rental: Sedan, 4.1 ★<br />Location: Pune</p>
              </div>
            </div>
            <p className="review">"GoRentalz made my trip stress-free! The car was in excellent condition and the service was top-notch. Highly recommend!"</p>
          </div>
          <div className="testimonial">
            <div className="customer-info">
              <img src="images/customer2.jpg" alt="Customer 2" />
              <div>
                <h3>Omkar Salunkhe</h3>
                <p>Rental: SUV, 4.5 ★<br />Location: Indore</p>
              </div>
            </div>
            <p className="review">"Excellent service from GoRentalz. The car rental process was quick and easy, and the vehicle exceeded my expectations!"</p>
          </div>
          <div className="testimonial">
            <div className="customer-info">
              <img src="images/customer3.jpeg" alt="Customer 3" />
              <div>
                <h3>Riya Keni</h3>
                <p>Rental: Luxury car, 4.8 ★<br />Location: Jaipur</p>
              </div>
            </div>
            <p className="review">"Great experience with GoRentalz. The Mercedes-Benz was perfect for my beach vacation. Will definitely use their service again!"</p>
          </div>
          <div className="testimonial">
            <div className="customer-info">
              <img src="images/customer4.jpeg" alt="Customer 4" />
              <div>
                <h3>Saif Khan</h3>
                <p>Rental: Electric, 4.4 ★<br />Location: Mumbai</p>
              </div>
            </div>
            <p className="review">"GoRentalz nailed it! The car was spotless, the ride smooth, and exploring Mumbai was a breeze. Quick booking, excellent support—I'll be back for sure!"</p>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact">
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <ul>
            <li>Email: support@gorentalz.com</li>
            <li>Phone: 9372619390</li>
            <li>Address: 1234 Car Rental Ave, Suite 100, City, State, ZIP</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
