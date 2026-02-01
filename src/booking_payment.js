import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import "./booking_payment.css";

function BookingAndPaymentWithNavigate(props) {
  const navigate = useNavigate();
  return <BookingAndPayment {...props} navigate={navigate} />;
}

class BookingAndPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingDetails: {
        name: "",
        email: "",
        phone: "",
        pickupDate: "",
        dropoffDate: "",
        paymentMethod: "creditCard",
      },
      paymentDetails: {
        cardNumber: "",
        cardExpiry: "",
        cardCVV: "",
      },
      showPopup: false,
    };
  }

  handleBookingChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      bookingDetails: {
        ...prevState.bookingDetails,
        [name]: value,
      },
    }));
  };

  handlePaymentChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      paymentDetails: {
        ...prevState.paymentDetails,
        [name]: value,
      },
    }));
  };

  validateForm = () => {
    const { name, email, phone, pickupDate, dropoffDate } = this.state.bookingDetails;
    const { cardNumber, cardExpiry, cardCVV } = this.state.paymentDetails;
    const today = new Date().toISOString().split("T")[0];

    const nameRegex = /^[A-Za-z ]+$/;
    if (!nameRegex.test(name)) {
      alert("Name should contain only letters.");
      return false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Phone number must be exactly 10 digits.");
      return false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email format.");
      return false;
    }

    if (pickupDate < today) {
      alert("Pickup date cannot be in the past.");
      return false;
    }

    if (dropoffDate <= pickupDate) {
      alert("Dropoff date must be after pickup date.");
      return false;
    }

    const cardRegex = /^[0-9]{16}$/;
    if (!cardRegex.test(cardNumber)) {
      alert("Card number must be exactly 16 digits.");
      return false;
    }

    const expiryRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    if (!expiryRegex.test(cardExpiry)) {
      alert("Expiry date must be in MM/YY format.");
      return false;
    }

    const cvvRegex = /^[0-9]{3}$/;
    if (!cvvRegex.test(cardCVV)) {
      alert("CVV must be exactly 3 digits.");
      return false;
    }

    return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      this.setState({ showPopup: true });
    }
  };

  closePopup = () => {
    this.setState({ showPopup: false });
    this.props.navigate("/");
  };

  render() {
    const { bookingDetails, paymentDetails, showPopup } = this.state;
    return (
      <div className="booking-payment-container">
        <h2>Booking and Payment</h2>
        <div className="form-section">
          <h3>Booking Details</h3>
          <form onSubmit={this.handleSubmit}>
            <label>Name</label><input type="text" name="name" value={bookingDetails.name} onChange={this.handleBookingChange} required />
            <label>Email</label><input type="email" name="email" value={bookingDetails.email} onChange={this.handleBookingChange} required />
            <label>Phone</label><input type="number" name="phone" value={bookingDetails.phone} onChange={this.handleBookingChange} required />
            <label>Pickup Date</label><input type="date" name="pickupDate" value={bookingDetails.pickupDate} onChange={this.handleBookingChange} required />
            <label>Dropoff Date</label><input type="date" name="dropoffDate" value={bookingDetails.dropoffDate} onChange={this.handleBookingChange} required />
            
            <div className="form-section">
              <h3>Payment Details</h3>
              <select name="paymentMethod" value={bookingDetails.paymentMethod} onChange={this.handleBookingChange} required>
              <option value="creditCard">Credit Card</option>
              <option value="debitCard">Debit Card</option>
            </select>
              Card Number<input type="text" name="cardNumber" value={paymentDetails.cardNumber} onChange={this.handlePaymentChange} required />
              Card Expiry<input type="text" name="cardExpiry" value={paymentDetails.cardExpiry} onChange={this.handlePaymentChange} required />
              CVV<input type="text" name="cardCVV" value={paymentDetails.cardCVV} onChange={this.handlePaymentChange} required />
            </div>
            <button type="submit" className="submit-btn">Confirm Booking & Pay</button>
          </form>
        </div>
        {showPopup && (
          <div className="popup">
            <div className="popup-content-booking">
              <h3 style={{ color: "black" }}>Payment Successful</h3>
              <p style={{ color: "black" }}>Your booking and payment were successful.</p>
              <button onClick={this.closePopup}>Close</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BookingAndPaymentWithNavigate;
