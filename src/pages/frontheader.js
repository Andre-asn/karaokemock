import React from 'react';

const FrontHeader = () => {
  return (
    <header id="home" className="flex items-center justify-center w-screen h-screen mb-12 overflow-hidden">
      <div className="z-10 p-5 text-white rounded-xl">
        <h1 className="text-5xl font-black text-center pl-96">Sing</h1>
        <p className="text-3xl font-light text-center pl-96">All Night Long</p>
      </div>
      <video
        src={"sample.mp4"}
        type="video/mp4"
        className="absolute -z-0 bg-white object-fill w-full h-full"
        autoPlay
        muted
        loop
        playsInline
      />
    </header>
  );
};

export default FrontHeader;
