import React, { useState } from 'react';

const PhotoGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div id="gallery" className="max-w-screen-2xl mx-auto my-10 pl-96 min-h-screen">
      <div className="relative">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="w-[2000px] h-[850px] object-cover"
        />
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-25 text-white font-bold py-2 px-4 rounded-full"
          onClick={handlePrev}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
          </svg>

        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-25 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleNext}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
          </svg>

        </button>
      </div>
    </div>
  );
};

const Gallery = () => {
  const images = [
    '/sampleimg1.jpg',
    '/sampleimg2.jpg',
    '/sampleimg3.jpg',
    //... add more image URLs here
  ];

  return (
    <div>
      {/* Render other content */}
      <PhotoGallery images={images} />
    </div>
  );
};

export default Gallery;
