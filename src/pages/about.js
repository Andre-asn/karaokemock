import React from 'react';

const Staff = () => {
  return (
    <div id="staff" className="bg-black flex items-center justify-center my-10 pl-96 min-h-screen">
      <div className="md:flex-col max-w-4xl mx-16 bg-white shadow-md overflow-hidden sm:rounded-lg md:flex">
        <div className="md:flex-shrink-0">
          <img
            src={"/headshot.jpg"}
            alt="profile picture"
            objectfit="cover"
            className="min-w-full"
          />
        </div>
        <div className="p-8">
          <p className="text-black leading-relaxed mb-8">       
Welcome to our vibrant karaoke bar! As the proud owner, I blend my Asian-American heritage with a passion for music, and creating unforgettable experiences. With a diverse song selection, state-of-the-art sound systems, and a vibrant stage, we bring performances to life. We're a melting pot of diverse backgrounds, fostering a sense of community where friendships form and memories are made. Join us in celebrating music without boundaries!
          </p>
          <figcaption className="font-medium">
            <div className="text-red-400">
              Tailong Shen
            </div>
            <div className="text-slate-500">
              Owner
            </div>
          </figcaption>
        </div>
      </div>
      <div className="md:flex-col max-w-4xl mx-16 bg-white shadow-md overflow-hidden sm:rounded-lg md:flex">
        <div className="md:flex-shrink-0">
          <img
            src={"/headshot1.jpg"}
            alt="profile picture"
            objectfit="cover"
            className="min-w-full"
          />
        </div>
        <div className="p-8">
          <p className="text-black leading-relaxed mb-8">
          As the head manager of this incredible establishment, I'm dedicated to providing exceptional service and creating unforgettable experiences for our guests. With a genuine passion for hospitality, I strive to ensure that every visitor feels welcomed and valued. Drawing inspiration from diverse influences, I bring a unique perspective to our bar, fostering a warm and inviting atmosphere where lasting memories are made. Join us in celebrating music, community, and the joy of coming together at our karaoke bar!
          </p>
          <figcaption className="font-medium">
            <div className="text-red-400">
              Elias Lorenzo
            </div>
            <div className="text-slate-500">
              Head Manager
            </div>
          </figcaption>
        </div>
      </div>
    </div>
  );
}

export default Staff;
