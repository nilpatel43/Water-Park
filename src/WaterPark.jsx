import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { useEffect, useState } from "react"; // useState ઇમ્પોર્ટ કરો
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./Scroll.jsx";
import Header from "./Header.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Rides from "./Rides.jsx";
import Tickets from "./Tickets.jsx";
import Gallery from "./Gallery.jsx";
import Reviews from "./Reviews.jsx";
import Contact from "./Contact.jsx";
import Book from "./Book.jsx";
import Footer from "./Footer.jsx";
import Admin from "./Admin.jsx";

function Waterpark() {
  // લોડિંગ માટે નવું state બનાવો
  const [isLoading, setIsLoading] = useState(true);

  const MainLayout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2500 મિલીસેકન્ડ = 2.5 સેકન્ડ
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Lodaing Page

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="circular-water-loader">
          <div className="water-fluid"></div>
        </div>
        <h2 className="loader-text">Diving into fun...</h2>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div>
        <div>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/rides" element={<Rides />} />
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/book" element={<Book />} />
            </Route>

            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Waterpark;
