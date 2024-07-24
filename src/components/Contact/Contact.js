import React from 'react';

const Contact = () => {
  return (
    <div>
      <div className="p-10">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-lg mb-4"><strong>Address:</strong> Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
            <p className="text-lg mb-4"><strong>Phone:</strong> +1 (123) 456-7890</p>
            <p className="text-lg mb-4"><strong>Email:</strong> <a href="mailto:info@springdale.edu" className="text-blue-500 hover:underline">info@springdale.edu</a></p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
          <form className="space-y-4 bg-gray-100 p-6 rounded-lg shadow-md">
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full p-2 border border-gray-300 rounded" required></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Send Message</button>
          </form>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Find Us on the Map</h2>
          <div className="relative w-full h-64">
            <iframe
              title="Google Maps Location"
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7897921759164!2d-122.43129768468115!3d37.77397297975919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064a5ff4d27%3A0xd1a22653960d83b7!2s1600%20Amphitheatre%20Parkway%2C%20Mountain%20View%2C%20CA%2094053%2C%20USA!5e0!3m2!1sen!2sin!4v1623738045944!5m2!1sen!2sin"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
