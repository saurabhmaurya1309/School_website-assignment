import React from 'react';

const ImportantDates = () => {
  const dates = [
    { label: 'Admission Form Availability', date: 'March 1st' },
    { label: 'Last Date for Submission', date: 'March 31st' },
    { label: 'Entrance Test', date: 'April 15th' },
    { label: 'Announcement of Results', date: 'April 30th' },
  ];

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Important Dates</h2>
      <div className="space-y-4">
        {dates.map((item, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-md shadow-md flex justify-between items-center">
            <span className="text-lg font-medium">{item.label}</span>
            <span className="text-lg">{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Admissions = () => {
  return (
    <div>
      <div className="p-10">
        <h1 className="text-4xl font-bold mb-6 text-center">Admissions</h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Admission Process</h2>
          <p>Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Admission Criteria</h2>
          <p>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
        </section>

        <ImportantDates />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Download Admission Forms</h2>
          <a
            href="/assets/admission-form.pdf" // Ensure this path is correct
            className="inline-block py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            download
          >
            Download Form
          </a>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us for More Information</h2>
          <form action="/submit" method="post" className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Admissions;
