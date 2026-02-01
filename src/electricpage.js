import React from "react";
import { Link } from "react-router-dom";
import "./category.css";

const ElectricPage = () => {
  // Dummy data for Electric Cars
  const electricCars = [
        {
            name: "Tata Tiago EV",
            image: "/images/Tata Tiago EV.jpg",
            engine: "Electric",
            transmission: "Automatic",
            seats: 5,
            fuelEconomy: "15 kWh/100 km",
            pricePerDay: "₹2,200", 
        },
        {
            name: "MG ZS EV",
            image: "/images/MG ZS EV.jpg",
            engine: "Electric",
            transmission: "Automatic",
            seats: 5,
            fuelEconomy: "16 kWh/100 km",
            pricePerDay: "₹3,000", 
        },
        {
            name: "Mahindra eKUV100",
            image: "/images/Mahindra-eKUV100.jpg",
            engine: "Electric",
            transmission: "Automatic",
            seats: 4,
            fuelEconomy: "13 kWh/100 km",
            pricePerDay: "₹2,000", 
        },
        {
            name: "Tata Tigor EV",
            image: "/images/Tata Tigor EV.jpg",
            engine: "Electric",
            transmission: "Automatic",
            seats: 5,
            fuelEconomy: "18 kWh/100 km",
            pricePerDay: "₹2,500", 
        },
        ];

  return (
    <div className="car-page-container">
      <header
        className="hero-electric"
        style={{
          backgroundImage: "url('/images/Tata Nexon EV.jpg')",
          backgroundSize: "80%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="overlay-electric"></div>
        <div className="hero-content-electric">
          <h2>Electric Car Collection</h2>
          <p>Drive into the future with our eco-friendly electric vehicles.</p>
        </div>
      </header>

      <section className="electric-collection">
        <h2>Our Top Electric Cars</h2>
        <div className="electric-grid">
          {electricCars.map((car, index) => (
            <div key={index} className="electric-card">
              <img src={car.image} alt={car.name} className="electric-image" />
              <div className="electric-info">
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

export default ElectricPage;
