import React from "react";
import { Link } from "react-router-dom";
import "./category.css";

const SedanPage = () => {
  const sedans = [
        {
            name: "Honda Civic",
            image: "/images/honda civic.jpg",
            engine: "1.5L Petrol",
            transmission: "Manual",
            seats: 5,
            fuelEconomy: "17 km/l",
            pricePerDay: "₹2,200", // Added price per day
        },
        {
            name: "Hyundai Verna",
            image: "/images/hyundai verna.jfif",
            engine: "1.6L Petrol",
            transmission: "Automatic",
            seats: 5,
            fuelEconomy: "16 km/l",
            pricePerDay: "₹2,500", // Added price per day
        },
        {
            name: "Suzuki Dzire",
            image: "/images/suzuki dzire.jpg",
            engine: "1.3L Diesel",
            transmission: "Manual",
            seats: 5,
            fuelEconomy: "20 km/l",
            pricePerDay: "₹1,800", // Added price per day
        },
        {
            name: "Hyundai Xcent",
            image: "/images/hyundai xcent.jpg",
            engine: "1.8L Petrol",
            transmission: "Automatic",
            seats: 5,
            fuelEconomy: "14 km/l",
            pricePerDay: "₹2,000", // Added price per day
        },
        ];

  return (
    <div className="car-page-container">
      <header
        className="hero-sedan"
        style={{
          backgroundImage: "url('/images/honda city.jpg')",
          backgroundSize: "80%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="overlay-sedan"></div>
        <div className="hero-content-sedan">
          <h2>Sedan Collection</h2>
          <p>Elegant, efficient, and comfortable. Discover our sedan options.</p>
        </div>
      </header>

      <section className="sedan-collection">
        <h2>Our Top Sedans</h2>
        <div className="sedan-grid">
          {sedans.map((sedan, index) => (
            <div key={index} className="sedan-card">
              <img src={sedan.image} alt={sedan.name} className="sedan-image" />
              <div className="sedan-info">
                <h3>{sedan.name}</h3>
                <ul>
                  <li><strong>Engine:</strong> {sedan.engine}</li>
                  <li><strong>Transmission:</strong> {sedan.transmission}</li>
                  <li><strong>Seats:</strong> {sedan.seats}</li>
                  <li><strong>Fuel Economy:</strong> {sedan.fuelEconomy}</li>
                  <li><strong>Price per Day:</strong> {sedan.pricePerDay}</li>
                </ul>
                <Link to="/booking_payment" className="book-btn">Rent Now</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

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

export default SedanPage;
