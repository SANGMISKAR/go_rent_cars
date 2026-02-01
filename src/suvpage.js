import React from "react";
import { Link } from "react-router-dom";
import "./category.css"; // Assuming you have styles specific to the car pages.

const SUVPage = () => {
  // Dummy data for SUVs
  const suvs = [
        {
            name: "Tata Harrier",
            image: "/images/Tata Harrier.jpg",
            engine: "2.0L Diesel",
            transmission: "Automatic",
            seats: 7,
            fuelEconomy: "15 km/l",
            pricePerDay: "₹8,500/day"  // Updated to rupees with descriptive label
        },
        {
            name: "Mahindra XUV700",
            image: "/images/Mahindra XUV700.jpg",
            engine: "2.2L Diesel",
            transmission: "Automatic",
            seats: 7,
            fuelEconomy: "14 km/l",
            pricePerDay: "₹9,200/day"  // Updated to rupees with descriptive label
        },
        {
            name: "Toyota Fortuner",
            image: "/images/toyota fortuner.jpg",
            engine: "2.0L Petrol",
            transmission: "Automatic",
            seats: 5,
            fuelEconomy: "13 km/l",
            pricePerDay: "₹10,000/day"  // Updated to rupees with descriptive label
        },
        {
            name: "Renault Duster",
            image: "/images/Renault Duster.jpg",
            engine: "1.5L Diesel",
            transmission: "Manual",
            seats: 5,
            fuelEconomy: "16 km/l",
            pricePerDay: "₹7,000/day"  // Updated to rupees with descriptive label
        },
  ];

  return (
    <div className="car-page-container">
      {/* Hero Section */}
      <header
        className="hero-suv"
        style={{
            backgroundImage: "url('/images/Mahindra XUV700.jpg')",
            backgroundSize: "80%", // Adjusting image size to 80%
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            }}

      >
        <div className="overlay-suv"></div>
        <div className="hero-content-suv">
          <h2>SUV Collection</h2>
          <p>Explore our powerful and versatile SUVs for every adventure.</p>
        </div>
      </header>

      {/* SUV Collection Section */}
      <section className="suv-collection">
        <h2>Our Top SUVs</h2>
        <div className="suv-grid">
          {suvs.map((suv, index) => (
            <div key={index} className="suv-card">
              <img src={suv.image} alt={suv.name} className="suv-image" />
              <div className="suv-info">
                <h3>{suv.name}</h3>
                <ul>
                  <li><strong>Engine:</strong> {suv.engine}</li>
                  <li><strong>Transmission:</strong> {suv.transmission}</li>
                  <li><strong>Seats:</strong> {suv.seats}</li>
                  <li><strong>Fuel Economy:</strong> {suv.fuelEconomy}</li>
                  <li><strong>Price per Day:</strong> {suv.pricePerDay}</li>
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

export default SUVPage;
