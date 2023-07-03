import React, { useState } from 'react';
import "../style/carousel.css"

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  if (!images || images.length === 0) {
    return <div>No images found</div>;
  }

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>

      <button className="prev-button" onClick={prevSlide}>
        Previous
      </button>
      <button className="next-button" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
