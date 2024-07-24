import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center text-white">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="Springdale Public School" className="h-12" />
        </Link>
      </div>
      <div className="space-x-4">
        <Link to="/" className="hover:bg-white hover:text-blue-600 p-2 rounded">Home</Link>
        <Link to="/about" className="hover:bg-white hover:text-blue-600 p-2 rounded">About Us</Link>
        <Link to="/academics" className="hover:bg-white hover:text-blue-600 p-2 rounded">Academics</Link>
        <Link to="/admissions" className="hover:bg-white hover:text-blue-600 p-2 rounded">Admissions</Link>
        <Link to="/faculty" className="hover:bg-white hover:text-blue-600 p-2 rounded">Faculty</Link>
        <Link to="/students" className="hover:bg-white hover:text-blue-600 p-2 rounded">Students</Link>
        <Link to="/gallery" className="hover:bg-white hover:text-blue-600 p-2 rounded">Gallery</Link>
        <Link to="/contact" className="hover:bg-white hover:text-blue-600 p-2 rounded">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
