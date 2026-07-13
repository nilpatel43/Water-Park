import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="f-container1">
        <div className="f-box1">
          <h3>Holiday Water Park</h3>
          <p>
            Gujarat's ultimate and most thrilling water adventure destination. A
            perfect place for the entire family to create unforgettable memories
            together.
          </p>
          <div className="f-socials">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="f-box1">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/rides">Rides</Link>
            </li>
            <li>
              <Link to="/tickets">Tickets</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="f-box1">
          <h3>Timings</h3>
          <ul>
            <li>Mon - Fri: 10:00 AM - 06:00 PM</li>
            <li>Sat - Sun: 09:30 AM - 06:30 PM</li>
            <li>
              <span className="live-status">
                Park Open | Nylon costumes are mandatory.
              </span>
            </li>
          </ul>
        </div>

        <div className="f-box1">
          <h3>Contact Us</h3>
          <p>
            <FaMapMarkerAlt /> SG Highway, Ahmedabad, Gujarat
          </p>
          <p>
            <FaPhoneAlt /> +91 98765 43210
          </p>
          <p>
            <FaEnvelope /> info@holidaywaterpark.com
          </p>
        </div>
      </div>

      <div className="f-bottom1">
        <p>
          &copy; 2026 Holiday Water Park. All Rights Reserved | Designed with ❤️
        </p>
        <p className="nil">
          Develop By: &nbsp;
          <a
            target="_blank"
            href="https://nilportfolio-jet-chi-lt4cj4fub2.vercel.app/"
            style={{
              color: "lightgreen",
              letterSpacing: "1px",
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            Nil Sanghani
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
