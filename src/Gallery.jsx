import { useState } from "react";
import { FaTimes } from "react-icons/fa";

import GalleryImage from "./assets/Backgrounds/Gallery-Image.jpg";

import Image1 from "./assets/Gallerys/Image1.png";
import Image2 from "./assets/Gallerys/Image2.png";
import Image3 from "./assets/Gallerys/Image3.png";
import Image4 from "./assets/Gallerys/Image4.png";
import Image5 from "./assets/Gallerys/Image5.png";
import Image6 from "./assets/Gallerys/Image6.png";
import Image7 from "./assets/Gallerys/Image7.png";
import Image8 from "./assets/Gallerys/Image8.png";
import Image9 from "./assets/Gallerys/image9.png";
import Image10 from "./assets/Gallerys/Image10.png";
import Image11 from "./assets/Gallerys/Image11.png";
import Image12 from "./assets/Gallerys/Image12.png";
import Image13 from "./assets/Gallerys/Image13.png";
import Image14 from "./assets/Gallerys/Image14.png";
import Image15 from "./assets/Gallerys/Image15.png";
import Image16 from "./assets/Gallerys/Image16.png";
import Image17 from "./assets/Gallerys/Image17.png";
import Image18 from "./assets/Gallerys/Image18.png";
import Image19 from "./assets/Gallerys/Image19.png";
import Image20 from "./assets/Gallerys/Image20.png";
import Image21 from "./assets/Gallerys/Image21.png";

import Video1 from "./assets/Gallerys/Video1.mp4";
import Video2 from "./assets/Gallerys/Video2.mp4";
import Video3 from "./assets/Gallerys/Video3.mp4";
import Video4 from "./assets/Gallerys/Video4.mp4";
import Video5 from "./assets/Gallerys/Video5.mp4";
import Video6 from "./assets/Gallerys/Video6.mp4";
import Video7 from "./assets/Gallerys/Video7.mp4";
import Video8 from "./assets/Gallerys/VIdeo8.mp4";
import Video9 from "./assets/Gallerys/Video9.mp4";
import Video10 from "./assets/Gallerys/Video10.mp4";
import Video11 from "./assets/Gallerys/Video11.mp4";
import Video12 from "./assets/Gallerys/Video12.mp4";

function Gallery() {
  const [selectedImgIndex, setSelectedImgIndex] = useState(null);
  const [selectedVidIndex, setSelectedVidIndex] = useState(null);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const galleryImages = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
    Image13,
    Image14,
    Image15,
    Image16,
    Image17,
    Image18,
    Image19,
    Image20,
    Image21,
  ];

  const galleryVideos = [
    Video1,
    Video2,
    Video3,
    Video4,
    Video5,
    Video6,
    Video7,
    Video8,
    Video9,
    Video10,
    Video11,
    Video12,
  ];

  const showNextImg = () =>
    setSelectedImgIndex((prev) => (prev + 1) % galleryImages.length);

  const showPrevImg = () =>
    setSelectedImgIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );

  const showNextVid = () =>
    setSelectedVidIndex((prev) => (prev + 1) % galleryVideos.length);

  const showPrevVid = () =>
    setSelectedVidIndex(
      (prev) => (prev - 1 + galleryVideos.length) % galleryVideos.length,
    );

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

    if (distance > minSwipeDistance) {
      type === "image" ? showNextImg() : showNextVid();
    }

    if (distance < -minSwipeDistance) {
      type === "image" ? showPrevImg() : showPrevVid();
    }
  };

  return (
    <>
      <section
        className="gallery-hero"
        style={{ backgroundImage: `url(${GalleryImage})` }}
      >
        <div className="gallery-overlay" data-aos="zoom-in">
          <h1>Gallery</h1>

          <p>
            Explore unforgettable memories, thrilling rides, exciting moments
            and amazing attractions at Holiday Water Park.
          </p>
        </div>
      </section>

      <section className="gallery-section">
        <h2 data-aos="fade-up">Photo Gallery</h2>

        <div className="gallery-page-grid">
          {galleryImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              onClick={() => setSelectedImgIndex(index)}
              data-aos="zoom-in"
            />
          ))}
        </div>
      </section>

      <section className="gallery-video-section">
        <h2 data-aos="fade-up">Video Gallery</h2>

        <div className="gallery-page-grid">
          {galleryVideos.map((video, index) => (
            <div
              className="video-card"
              key={index}
              onClick={() => setSelectedVidIndex(index)}
              data-aos="zoom-in-up"
            >
              <video src={video} muted autoPlay loop />
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
            alt=""
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
          />
        </div>
      )}
    </>
  );
}

export default Gallery;
