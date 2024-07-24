import React from 'react';
import { FaSchool, FaBook, FaChalkboardTeacher, FaBuilding, FaTachometerAlt } from 'react-icons/fa'; // Corrected import

const AboutUs = () => {
  return (
    <div className="py-8 px-4 bg-gray-100 min-h-screen">
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg md:text-xl text-gray-700">
          Discover more about Springdale Public School, our values, and what makes us unique.
        </p>
      </header>
      <div className="container mx-auto">
        <section className="bg-white rounded-lg shadow-lg mb-8 p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FaSchool className="text-blue-500 mr-2" /> History
          </h2>
          <p className="text-gray-700">
            Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
          </p>
        </section>
        <section className="bg-white rounded-lg shadow-lg mb-8 p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FaTachometerAlt className="text-blue-500 mr-2" /> Vision
          </h2>
          <p className="text-gray-700">
            To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
          </p>
        </section>
        <section className="bg-white rounded-lg shadow-lg mb-8 p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FaBook className="text-blue-500 mr-2" /> Mission
          </h2>
          <p className="text-gray-700">
            To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
          </p>
        </section>
        <section className="bg-white rounded-lg shadow-lg mb-8 p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FaChalkboardTeacher className="text-blue-500 mr-2" /> Principal's Message
          </h2>
          <p className="text-gray-700">
            At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.
          </p>
        </section>
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FaBuilding className="text-blue-500 mr-2" /> Infrastructure and Facilities
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>State-of-the-art science and computer labs</li>
            <li>Spacious and well-equipped classrooms</li>
            <li>Library with a vast collection of books and digital resources</li>
            <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
          </ul>
        </section>
      </div>
      <section className="text-center py-8 mt-12 bg-blue-500 text-white rounded-lg">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Join Our Community</h2>
        <p className="text-lg mb-4">Become a part of our vibrant school community. Learn more about our programs and facilities.</p>
        <a href="/admissions" className="bg-white text-blue-500 py-2 px-4 rounded-lg hover:bg-gray-100 transition">Learn More About Admissions</a>
      </section>
    </div>
  );
};

export default AboutUs;
