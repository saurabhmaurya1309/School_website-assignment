import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel'; // Ensure you have this installed
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import logo from '../../assets/logo.jpeg'; // Update path to your logo
import sportsDayImg from '../../assets/sports_day.jpeg'; // Update paths to your images
import scienceExhibitionImg from '../../assets/science_exhibition.jpeg';
import culturalFestImg from '../../assets/cultural_fest.jpeg';

const highlights = [
  {
    img: sportsDayImg,
    text: "Annual Sports Day - Celebrating Excellence in Sports",
  },
  {
    img: scienceExhibitionImg,
    text: "Science Exhibition - Showcasing Student Innovations",
  },
  {
    img: culturalFestImg,
    text: "Cultural Fest - Embracing Diversity and Creativity",
  },
];

const Home = () => {
  return (
    <div>
    

      <header className="relative text-white text-center py-16 md:py-24">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <img src={logo} alt="Springdale Public School" className="mx-auto mb-6 w-32 md:w-40" />
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 relative z-10">Welcome to Springdale Public School</h1>
        <p className="text-lg md:text-xl mb-6 relative z-10">Where we nurture young minds for a brighter future.</p>
      </header>

      <section className="py-8 px-4 bg-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Highlights</h2>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          className="carousel-wrapper"
        >
          {highlights.map((highlight, index) => (
            <div key={index} className="relative">
              <img src={highlight.img} alt={highlight.text} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <p className="text-white text-2xl md:text-3xl font-semibold text-center px-4">{highlight.text}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      <section className="py-8 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Quick Links</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {['About Us', 'Academics', 'Admissions', 'Faculty', 'Students', 'Gallery', 'Contact Us'].map((link, index) => (
            <Link
              key={index}
              to={`/${link.toLowerCase().replace(/ /g, '-')}`}
              className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
            >
              {link}
            </Link>
          ))}
        </div>
      </section>

      <footer className="bg-blue-800 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Springdale Public School. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
