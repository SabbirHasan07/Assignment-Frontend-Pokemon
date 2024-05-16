import React, { useState, useEffect } from 'react';

const HomeSlider = () => {
  // State to keep track of the current active slide
  const [currentSlide, setCurrentSlide] = useState(0); // Start from the first slide

  // Array of image URLs for each slide
  const images = [
    "https://i.ibb.co/RNrkGNY/396723353-380821564472510-3420629505396603627-n.jpg",
    "https://i.ibb.co/swNCyHV/391636175-368353785719288-6632421898154180740-n.jpg",
    "https://i.ibb.co/yXPBStd/394700727-374618305092836-6055408268252241086-n.jpg",
  ];

  // Function to handle navigation to the next slide
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length); // Loop back to the first slide if at the end
  };

  // Function to handle navigation to the previous slide
  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length); // Loop back to the last slide if at the beginning
  };

  // Auto transition to the next slide after a certain interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(intervalId); // Clean up timer on component unmount
    };
  }, [currentSlide]); // Re-run effect when currentSlide changes

  return (
    <div className="carousel w-full w-wrap">
      <div className="carousel-item relative w-full">
        <img 
          src={images[currentSlide]} 
          className="w-full h-[500px] object-cover" 
        //   alt={Slide ${currentSlide + 1}} 
        //   style={{ minHeight: "200px" }} 
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button className="btn btn-circle" onClick={prevSlide}>❮</button>
          <button className="btn btn-circle" onClick={nextSlide}>❯</button>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;