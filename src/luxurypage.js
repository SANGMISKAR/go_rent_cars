import React from "react";
import { Link } from "react-router-dom";
import "./category.css";

const LuxuryPage = () => {
  // Dummy data for Luxury Cars
  const luxuryCars = [
    {
      name: "Mercedes-Benz G-Wagon",
      image: "/images/Mercedes-Benz G-Wagon.jpg",
      engine: "4.0L V8 Petrol",
      transmission: "Automatic",
      seats: 5,
      fuelEconomy: "12 km/l",
    },
    {
      name: "BMW 7 Series",
      image: "/images/BMW 7 Series.jpg",
      engine: "3.0L I6 Petrol",
      transmission: "Automatic",
      seats: 5,
      fuelEconomy: "11 km/l",
    },
    {
      name: "Audi A8",
      image: "/images/Audi A8.jpg",
      engine: "3.0L V6 Petrol",
      transmission: "Automatic",
      seats: 5,
      fuelEconomy: "13 km/l",
    },
    {
      name: "Jaguar XJ",
      image: "/images/Jaguar XJ.jpg",
      engine: "3.0L V6 Petrol",
      transmission: "Automatic",
      seats: 5,
      fuelEconomy: "14 km/l",
    },
  ];

  return (
    <div className="car-page-container">
      <header
        className="hero-luxury"
        style={{
          backgroundImage: "url('/images/Mercedes-Benz S-Class.jpg')",
          backgroundSize: "80%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="overlay-luxury"></div>
        <div className="hero-content-luxury">
          <h2>Luxury Collection</h2>
          <p>Experience the finest luxury cars for a lavish drive.</p>
        </div>
      </header>

      <section className="luxury-collection">
        <h2>Our Top Luxury Cars</h2>
        <div className="luxury-grid">
          {luxuryCars.map((car, index) => (
            <div key={index} className="luxury-card">
              <img src={car.image} alt={car.name} className="luxury-image" />
              <div className="luxury-info">
                <h3>{car.name}</h3>
                <ul>
                  <li><strong>Engine:</strong> {car.engine}</li>
                  <li><strong>Transmission:</strong> {car.transmission}</li>
                  <li><strong>Seats:</strong> {car.seats}</li>
                  <li><strong>Fuel Economy:</strong> {car.fuelEconomy}</li>
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

export default LuxuryPage;
