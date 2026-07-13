import { useState, useEffect } from "react";

import AboutImage from "./assets/Backgrounds/About-Image.jpg";

function About() {
  const [attractions, setAttractions] = useState(0);
  const [visitors, setVisitors] = useState(0);
  const [safety, setSafety] = useState(0);
  const [experience, setExperience] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAttractions((prev) => (prev < 50 ? prev + 1 : 50));

      setVisitors((prev) => (prev < 100000 ? prev + 1000 : 100000));

      setSafety((prev) => (prev < 99 ? prev + 1 : 99));

      setExperience((prev) => (prev < 15 ? prev + 1 : 15));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${AboutImage})` }}
      >
        <div className="about-overlay" data-aos="zoom-in">
          <h1>About Holiday Water Park</h1>
          <p>
            Gujarat's Biggest Water Adventure Destination For Family Fun &
            Thrilling Experiences.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <span className="about-tag" data-aos="fade-right">
              WELCOME TO HOLIDAY WATER PARK
            </span>

            <h2 data-aos="fade-up">
              Gujarat's Ultimate Water Adventure Destination
            </h2>

            <p data-aos="fade-right">
              Holiday Water Park is one of Gujarat's most exciting and
              entertaining destinations where fun, adventure and safety come
              together. From thrilling water slides to relaxing wave pools, we
              provide unforgettable experiences for families, friends and
              adventure lovers.
            </p>

            <p data-aos="fade-left">
              Our park features world-class attractions, modern safety systems,
              delicious food courts, dedicated kids zones and exciting events
              throughout the year. Every visitor enjoys a perfect mix of fun,
              relaxation and entertainment.
            </p>

            <p data-aos="fade-right">
              With thousands of happy visitors every year, Holiday Water Park
              continues to be a favorite destination for creating memories that
              last forever.
            </p>

            <div className="about-stats">
              <div className="stat-card" data-aos="zoom-in">
                <h3>{attractions}+</h3>
                <p>Water Attractions</p>
              </div>

              <div
                className="stat-card"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <h3>{visitors.toLocaleString()}+</h3>
                <p>Happy Visitors</p>
              </div>

              <div
                className="stat-card"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <h3>{safety}%</h3>
                <p>Safety Standards</p>
              </div>

              <div
                className="stat-card"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <h3>{experience}+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>

          <div className="about-image" data-aos="fade-left">
            <img
              src="https://images.unsplash.com/photo-1642717841683-c0323214617c?fm=jpg&q=60&w=3000"
              alt="Water Park"
            />
          </div>
        </div>
      </section>

      <section className="vision-section">
        <div className="vision-card" data-aos="fade-right">
          <h2>Our Vision</h2>
          <p>
            To become Gujarat's most loved family entertainment destination by
            delivering world-class attractions, innovative rides and exceptional
            guest experiences.
          </p>
        </div>

        <div className="vision-card" data-aos="fade-left">
          <h2>Our Mission</h2>
          <p>
            Creating happiness through safe, innovative and exciting water park
            adventures for visitors of all ages while maintaining the highest
            standards of quality and customer satisfaction.
          </p>
        </div>
      </section>

      <section className="why-about">
        <h2 data-aos="fade-up">Why Choose Us?</h2>

        <div className="why-grid">
          <div className="why-card" data-aos="flip-left">
            <h3>🎢 Exciting Rides</h3>
            <p>Enjoy thrilling slides, wave pools and adventure attractions.</p>
          </div>

          <div className="why-card" data-aos="zoom-in">
            <h3>🛟 High Safety</h3>
            <p>Trained lifeguards and advanced safety systems at every ride.</p>
          </div>

          <div className="why-card" data-aos="zoom-in-up">
            <h3>👨‍👩‍👧‍👦 Family Friendly</h3>
            <p>Special attractions and entertainment for all age groups.</p>
          </div>

          <div className="why-card" data-aos="flip-right">
            <h3>🍔 Food Zone</h3>
            <p>Multiple food courts serving delicious snacks and meals.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
