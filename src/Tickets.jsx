import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { FaTicketAlt, FaUsers, FaStar, FaCheckCircle } from "react-icons/fa";

import TicketImage from "./assets/Backgrounds/Ticket-Image.jpg";

function Counter({ end }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const timer = setInterval(() => {
      start += Math.ceil(end / 70);

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(start);
    }, 50);

    return () => clearInterval(timer);
  }, [end]);

  return <>{count.toLocaleString()}</>;
}

function Tickets() {
  const myBook = useNavigate();

  const tickets = [
    {
      title: "Adult Pass",
      price: "₹800",
      desc: "Unlimited access to all major rides.",
    },
    {
      title: "Child Pass",
      price: "₹500",
      desc: "Special access for kids attractions.",
    },
    {
      title: "Family Pack",
      price: "₹3500",
      desc: "Up To 5 Member with extra benefits.",
    },
  ];

  return (
    <div className="tickets-page">
      <section
        className="ticket-hero"
        style={{ backgroundImage: `url(${TicketImage})` }}
      >
        <div className="ticket-overlay" data-aos="zoom-in">
          <h1>🎟️ Water Park Tickets</h1>

          <p>
            Book your adventure today and enjoy Gujarat's most exciting water
            attractions with family and friends.
          </p>
        </div>
      </section>

      <section className="ticket-counter">
        <div className="ticket-counter-card" data-aos="fade-up">
          <FaTicketAlt />

          <h2>
            <Counter end={50000} />+
          </h2>

          <p>Tickets Sold Every Year</p>
        </div>

        <div
          className="ticket-counter-card"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <FaUsers />

          <h2>
            <Counter end={100000} />+
          </h2>

          <p>Happy Visitors</p>
        </div>

        <div
          className="ticket-counter-card"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <FaStar />

          <h2>
            <Counter end={4.9} />
            /5
          </h2>

          <p>Customer Rating</p>
        </div>
      </section>

      <section className="ticket-section">
        <h2 data-aos="fade-down">Choose Your Package</h2>

        <div className="ticket-grid">
          {tickets.map((ticket, index) => (
            <div
              className="ticket-card"
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 150}
            >
              <span>{ticket.title}</span>

              <h1>{ticket.price}</h1>

              <p>{ticket.desc}</p>

              <button onClick={() => myBook("/book")}>Book Now</button>
            </div>
          ))}
        </div>
      </section>

      <section className="ticket-benefits">
        <h2 data-aos="fade-down">What's Included?</h2>

        <div className="benefit-grid">
          <div className="benefit-card" data-aos="flip-left">
            <FaCheckCircle />
            <p>Unlimited Water Rides</p>
          </div>

          <div
            className="benefit-card"
            data-aos="flip-left"
            data-aos-delay="100"
          >
            <FaCheckCircle />
            <p>Wave Pool Access</p>
          </div>

          <div
            className="benefit-card"
            data-aos="flip-left"
            data-aos-delay="200"
          >
            <FaCheckCircle />
            <p>Rain Dance Zone</p>
          </div>

          <div
            className="benefit-card"
            data-aos="flip-left"
            data-aos-delay="300"
          >
            <FaCheckCircle />
            <p>Kids Play Area</p>
          </div>

          <div
            className="benefit-card"
            data-aos="flip-left"
            data-aos-delay="400"
          >
            <FaCheckCircle />
            <p>Free Parking</p>
          </div>

          <div
            className="benefit-card"
            data-aos="flip-left"
            data-aos-delay="500"
          >
            <FaCheckCircle />
            <p>Locker Facility</p>
          </div>

          <div
            className="benefit-card"
            data-aos="flip-left"
            data-aos-delay="600"
          >
            <FaCheckCircle />
            <p>Food Zone</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tickets;
