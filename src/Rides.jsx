import { useState, useEffect } from "react";

import RideImage from "./assets/Backgrounds/Ride-Image.jpg";

import Ride1 from "./assets/Rides/Ride1.jpg";
import Ride2 from "./assets/Rides/Ride2.jpg";
import Ride3 from "./assets/Rides/Ride3.jpg";
import Ride4 from "./assets/Rides/Ride4.jpg";
import Ride5 from "./assets/Rides/Ride5.jpg";
import Ride6 from "./assets/Rides/Ride6.jpg";
import Ride7 from "./assets/Rides/Ride7.jpg";
import Ride8 from "./assets/Rides/Ride8.jpg";
import Ride9 from "./assets/Rides/Ride9.jpg";
import Ride10 from "./assets/Rides/Ride10.jpg";
import Ride11 from "./assets/Rides/Ride11.jpg";
import Ride12 from "./assets/Rides/Ride12.jpg";

function Rides() {
  const [rides, setRides] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRides((prev) => (prev < 100 ? prev + 2 : 100));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const rideData = [
    {
      title: "Wave Pool",
      image: Ride1,
      level: "Medium",
    },
    {
      title: "Tornado Slide",
      image: Ride2,
      level: "High",
    },
    {
      title: "Lazy River",
      image: Ride3,
      level: "Low",
    },
    {
      title: "Kids Zone",
      image: Ride4,
      level: "Kids",
    },
    {
      title: "Rain Dance",
      image: Ride5,
      level: "Medium",
    },
    {
      title: "Speed Coaster",
      image: Ride6,
      level: "Extreme",
    },
    {
      title: "Aqua Loop",
      image: Ride7,
      level: "Extreme",
    },
    {
      title: "Boomeranggo",
      image: Ride8,
      level: "High",
    },
    {
      title: "Black Hole Slide",
      image: Ride9,
      level: "High",
    },
    {
      title: "Family Pool & Jacuzzi",
      image: Ride10,
      level: "Low",
    },
    {
      title: "Mat Racer",
      image: Ride11,
      level: "Medium",
    },
    {
      title: "Pirate Bay",
      image: Ride12,
      level: "Kids",
    },
  ];

  return (
    <div>
      <section
        className="rides-hero"
        style={{ backgroundImage: `url(${RideImage})` }}
      >
        <div className="rides-overlay" data-aos="zoom-in">
          <h1>Water Park Rides</h1>
          <p>
            Experience thrilling adventures, family attractions and exciting
            water fun.
          </p>
        </div>
      </section>

      <section className="ride-counter">
        <div className="ride-counter-card" data-aos="zoom-in">
          <h2>{rides}+</h2>
          <p>World Class Attractions</p>
        </div>
      </section>

      <section className="ride-section">
        <h2 data-aos="fade-up">
          Popular Attractions ({rideData.length} Rides)
        </h2>

        <div className="ride-grid">
          {rideData.map((ride, index) => (
            <div
              className="ride-card"
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <img src={ride.image} alt={ride.title} />

              <div className="ride-info">
                <h3>{ride.title}</h3>
                <span>{ride.level} Thrill</span>

                <p>
                  Enjoy unforgettable water adventures with friends and family.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="ride-category">
        <h2 data-aos="fade-up">Ride Categories</h2>

        <div className="category-grid">
          <div className="category-card" data-aos="flip-left">
            <h3>⚡ Extreme Rides</h3>
            <p>High-speed slides for thrill seekers.</p>
          </div>

          <div className="category-card" data-aos="zoom-in">
            <h3>🌊 Family Rides</h3>
            <p>Fun attractions for the whole family.</p>
          </div>

          <div className="category-card" data-aos="zoom-in-up">
            <h3>👶 Kids Attractions</h3>
            <p>Safe and exciting rides for children.</p>
          </div>

          <div className="category-card" data-aos="flip-right">
            <h3>🎵 Rain Dance</h3>
            <p>Music, water and unlimited entertainment.</p>
          </div>
        </div>
      </section>

      <section className="ride-safety">
        <h2 data-aos="fade-up">Ride Safety</h2>

        <div className="safety-box">
          <div data-aos="fade-right">
            <h3>🛟 Certified Lifeguards</h3>
            <p>Professional staff available at every attraction.</p>
          </div>

          <div data-aos="zoom-in">
            <h3>✅ Daily Inspection</h3>
            <p>All rides undergo regular safety checks.</p>
          </div>

          <div data-aos="fade-left">
            <h3>🏥 First Aid Support</h3>
            <p>Medical assistance available throughout the park.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Rides;
