import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

import HomeImage from "./assets/Backgrounds/Home-Image.jpg";

import Ride1 from "./assets/Rides/Ride1.jpg";
import Ride2 from "./assets/Rides/Ride2.jpg";
import Ride3 from "./assets/Rides/Ride3.jpg";
import Ride4 from "./assets/Rides/Ride4.jpg";
import Ride5 from "./assets/Rides/Ride5.jpg";
import Ride6 from "./assets/Rides/Ride6.jpg";

import Image1 from "./assets/Gallerys/Image1.png";
import Image2 from "./assets/Gallerys/Image2.png";
import Image3 from "./assets/Gallerys/Image3.png";
import Image4 from "./assets/Gallerys/Image4.png";
import Image5 from "./assets/Gallerys/Image5.png";
import Image6 from "./assets/Gallerys/Image6.png";

import Video1 from "./assets/Gallerys/Video1.mp4";
import Video2 from "./assets/Gallerys/Video2.mp4";
import Video3 from "./assets/Gallerys/Video3.mp4";
import Video4 from "./assets/Gallerys/Video4.mp4";

function Home() {
  const [selectedImgIndex, setSelectedImgIndex] = useState(null);
  const [selectedVidIndex, setSelectedVidIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const myPage = useNavigate();

  const minSwipeDistance = 50;

  const galleryImages = [Image1, Image2, Image3, Image4, Image5, Image6];
  const galleryVideos = [Video1, Video2, Video3, Video4];

  const ride = [
    { title: "Wave Pool", image: Ride1 },
    { title: "Tornado Slide", image: Ride2 },
    { title: "Lazy River", image: Ride3 },
    { title: "Kids Zone", image: Ride4 },
    { title: "Rain Dance", image: Ride5 },
    { title: "Speed Coaster", image: Ride6 },
  ];

  const showNextImg = () => {
    if (selectedImgIndex !== null) {
      setSelectedImgIndex((prev) => (prev + 1) % galleryImages.length);
    }
  };
  const showPrevImg = () => {
    if (selectedImgIndex !== null) {
      setSelectedImgIndex(
        (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
      );
    }
  };

  const showNextVid = () => {
    if (selectedVidIndex !== null) {
      setSelectedVidIndex((prev) => (prev + 1) % galleryVideos.length);
    }
  };
  const showPrevVid = () => {
    if (selectedVidIndex !== null) {
      setSelectedVidIndex(
        (prev) => (prev - 1 + galleryVideos.length) % galleryVideos.length,
      );
    }
  };

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (type) => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (type === "image") {
      if (isLeftSwipe) showNextImg();
      else if (isRightSwipe) showPrevImg();
    } else if (type === "video") {
      if (isLeftSwipe) showNextVid();
      else if (isRightSwipe) showPrevVid();
    }
  };

  return (
    <div>
      <section
        className="section1"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${HomeImage})`,
        }}
      >
        <div className="hero1">
          <div className="highlight-banner" data-aos="fade-down">
            ✨ Get Ready For The Ultimate Summer Escape! ✨
          </div>

          <h1 data-aos="zoom-in-down">Holiday Water Park</h1>

          <TypeAnimation
            sequence={[
              `Gujarat's Biggest Water Adventure Destination`,
              2000,
              "",
              500,
            ]}
            wrapper="p"
            speed={30}
            repeat={Infinity}
            className="p"
          />

          <br />

          <div className="hero2" data-aos="fade-up" data-aos-delay="300">
            <button onClick={() => myPage("/book")}>Book Tickets</button>
            <button className="btn1" onClick={() => myPage("/rides")}>
              Explore Rides
            </button>
          </div>
        </div>
      </section>

      <section className="section2">
        <h2 data-aos="fade-right">Why Choose Holiday?</h2>

        <div className="cards1">
          <div className="card1" data-aos="fade-right">
            <h3>50+ Attractions</h3>
            <p>Exciting rides for all age groups.</p>
          </div>

          <div className="card1" data-aos="fade-left">
            <h3>100% Safety</h3>
            <p>International safety standards.</p>
          </div>

          <div className="card1" data-aos="zoom-in">
            <h3>Food Zone</h3>
            <p>Delicious meals and beverages.</p>
          </div>

          <div className="card1" data-aos="flip-left">
            <h3>Family Friendly</h3>
            <p>Fun activities for everyone.</p>
          </div>

          <div className="card1" data-aos="zoom-in-up">
            <h3>Children Area</h3>
            <p>Shallow pools and mini slides for kids.</p>
          </div>

          <div className="card1" data-aos="flip-right">
            <h3>Live DJ</h3>
            <p>Groove to the beats by the wave pool.</p>
          </div>
        </div>
      </section>

      <section className="section3">
        <h2 data-aos="fade-up">Popular Rides</h2>

        <div className="rides1">
          {ride.map((rides, index) => (
            <div
              className="images"
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <img src={rides.image} alt={rides.title} />

              <div className="titles">
                <h3>{rides.title}</h3>
                <br />
                <button onClick={() => myPage("/rides")}>Explore Ride</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section4">
        <h2 data-aos="fade-up">Ticket Packages</h2>

        <div className="price">
          <div className="p-card1" data-aos="zoom-in-right">
            <span>Kids</span>
            <h1>₹500 /-</h1>
            <button onClick={() => myPage("/book")}>Buy Now</button>
          </div>

          <div className="p-card1" data-aos="zoom-in">
            <span>Adults</span>
            <h1>₹800 /-</h1>
            <button onClick={() => myPage("/book")}>Buy Now</button>
          </div>

          <div className="p-card1" data-aos="zoom-in-left">
            <span>Family Pack</span>
            <h1>₹3500 /-</h1>
            <button onClick={() => myPage("/book")}>Buy Now</button>
          </div>
        </div>
      </section>

      <section className="section5">
        <h2 data-aos="fade-up">Photo Gallery</h2>

        <div className="gallery1">
          {galleryImages.map((imgUrl, index) => (
            <img
              key={index}
              src={imgUrl}
              alt={`Gallery ${index}`}
              onClick={() => setSelectedImgIndex(index)}
              data-aos={
                index % 3 === 0
                  ? "flip-left"
                  : index % 3 === 1
                    ? "zoom-in"
                    : "flip-right"
              }
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
      </section>

      <section className="section5" style={{ paddingTop: "0px" }}>
        <h2 data-aos="fade-up">Video Gallery</h2>

        <div className="gallery1">
          {galleryVideos.map((vidUrl, index) => (
            <div
              key={index}
              className="video-card"
              data-aos={index % 2 === 0 ? "fade-up" : "zoom-in"}
              onClick={() => setSelectedVidIndex(index)}
              style={{
                cursor: "pointer",
                position: "relative",
              }}
            >
              <video src={vidUrl} muted autoPlay loop />
            </div>
          ))}
        </div>
      </section>

      {selectedImgIndex !== null && (
        <div
          className="lightbox"
          onClick={() => setSelectedImgIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => handleTouchEnd("image")}
        >
          <button
            className="lightbox-close"
            onClick={() => setSelectedImgIndex(null)}
          >
            <FaTimes />
          </button>

          <img
            src={galleryImages[selectedImgIndex]}
            alt="Full Screen View"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {selectedVidIndex !== null && (
        <div
          className="lightbox"
          onClick={() => setSelectedVidIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => handleTouchEnd("video")}
        >
          <button
            className="lightbox-close"
            onClick={() => setSelectedVidIndex(null)}
          >
            <FaTimes />
          </button>

          <video
            src={galleryVideos[selectedVidIndex]}
            controls
            autoPlay
            muted
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "85%",
              maxHeight: "85vh",
              borderRadius: "15px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}
          />
        </div>
      )}

      <section className="section6">
        <h2 data-aos="fade-up">Customer Reviews</h2>

        <div className="reviews1">
          <div className="r-card1" data-aos="fade-right">
            ⭐⭐⭐⭐⭐
            <p>Amazing water rides and clean facilities.</p>
            <h4>- Rahul</h4>
          </div>

          <div className="r-card1" data-aos="zoom-in">
            ⭐⭐⭐⭐⭐
            <p>Best family destination in Gujarat.</p>
            <h4>- Priya</h4>
          </div>

          <div className="r-card1" data-aos="fade-left">
            ⭐⭐⭐⭐⭐
            <p>Kids enjoyed every attraction.</p>
            <h4>- Amit</h4>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
