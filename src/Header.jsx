import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import Logo from "./assets/WaterParkLogo.png";

function Header() {
  const myBook = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuclose = () => {
    setMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      <ul className={menuOpen ? "nav1 active" : "nav1"}>
        <li>
          <NavLink onClick={menuclose} to="/">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={menuclose}
            to="/about"
          >
            About Us
          </NavLink>
        </li>

        <li>
          <NavLink onClick={menuclose} to="/rides">
            Rides
          </NavLink>
        </li>

        <li>
          <NavLink onClick={menuclose} to="/tickets">
            Tickets
          </NavLink>
        </li>

        <li>
          <NavLink onClick={menuclose} to="/gallery">
            Gallery
          </NavLink>
        </li>

        <li>
          <NavLink onClick={menuclose} to="/reviews">
            Reviews
          </NavLink>
        </li>

        <li>
          <NavLink onClick={menuclose} to="/contact">
            Contact
          </NavLink>
        </li>

        {/* Menu ma pan Book Now */}
        <li className="mobile-book">
          <button
            className="book1"
            onClick={() => {
              myBook("/book");
              setMenuOpen(false);
            }}
          >
            Book Now
          </button>
        </li>
      </ul>

      {/* Header nu Book Now */}
      <div className="h-btn1">
        <button className="book1" onClick={() => myBook("/book")}>
          Book Now
        </button>
      </div>

      <span className="menu1 name1">Water Park</span>

      <div className="menu1" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
}

export default Header;
