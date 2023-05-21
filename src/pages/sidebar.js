import React from 'react';
import { Link } from 'react-scroll';

const Sidebar = () => {
  return (
    <aside className="bg-gray-900 box-border fixed top-0 h-screen flex flex-col justify-between z-40"> {/* Set z-index to a lower value */}
      <div className="bg-gray-900 text-white text-center font-medium pt-5">
        <div className="container h-32 w-96 bg-white flex justify-center items-center">
          <ul>
            <li>
              <h3 className="text-black text-6xl font-medium break-words">Tailongs</h3>
            </li>
            <li>
              <h3 className="text-black text-3xl font-thin break-words">Karaoke Bar</h3>
            </li>
          </ul>
        </div>
        <ul className="bg-gray-900 grid grid-cols-1 divide-y font-normal">
          <li className="py-5 mt-12 nav-item">
            <Link to="home" spy={true} smooth={true} offset={-200} duration={500} className="text-5xl text-gray-500 hover:text-white transition duration-300 cursor-pointer">Home</Link>
          </li>
          <li className="py-5 nav-item">
            <Link to="staff" spy={true} smooth={true} offset={-200} duration={500} className="text-5xl text-gray-500 hover:text-white transition duration-300 cursor-pointer">Staff</Link>
          </li>
          <li className="py-5 nav-item">
            <Link to="menu" spy={true} smooth={true} offset={-200} duration={500} className="text-5xl text-gray-500 hover:text-white transition duration-300 cursor-pointer">Menu</Link>
          </li>
          <li className="py-5 nav-item">
            <Link to="gallery" spy={true} smooth={true} offset={-200} duration={500} className="text-5xl text-gray-500 hover:text-white transition duration-300 cursor-pointer">Gallery</Link>
          </li>
        </ul>
      </div>
      <div className="h-96 bg-gray-900"></div>
    </aside>
  );
};

export default Sidebar;
