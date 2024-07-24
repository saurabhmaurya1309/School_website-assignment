import React from 'react';
import { Disclosure } from '@headlessui/react';
import { MdExpandMore } from 'react-icons/md'; // Updated icon import

const CurriculumSection = ({ title, content }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="mb-4">
          <Disclosure.Button className="w-full text-left flex items-center justify-between p-4 bg-gray-100 rounded-md shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300">
            <span className="text-xl font-semibold">{title}</span>
            <MdExpandMore
              className={`w-5 h-5 transition-transform ${open ? 'rotate-180' : ''}`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="p-4 bg-gray-50 border border-gray-200 rounded-md mt-2">
            {typeof content === 'string' ? <p>{content}</p> : content}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};

const Academics = () => {
  return (
    <div>
      <div className="p-10">
        <h1 className="text-4xl font-bold mb-6 text-center">Academics</h1>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Curriculum Overview</h2>
          <div className="flex space-x-4">
            <button className="flex-1 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
              Primary
            </button>
            <button className="flex-1 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
              Secondary
            </button>
            <button className="flex-1 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
              Senior Secondary
            </button>
          </div>
        </div>
        <section className="mb-8">
          <CurriculumSection
            title="Primary (Grades 1-5)"
            content="English, Mathematics, Science, Social Studies, Art, Physical Education"
          />
          <CurriculumSection
            title="Secondary (Grades 6-10)"
            content="English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art"
          />
          <CurriculumSection
            title="Senior Secondary (Grades 11-12)"
            content={
              <div>
                <p><strong>Science Stream:</strong> Physics, Chemistry, Biology, Mathematics, Computer Science, English</p>
                <p><strong>Commerce Stream:</strong> Accountancy, Business Studies, Economics, Mathematics, English</p>
              </div>
            }
          />
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Teaching Methodologies</h2>
          <p>We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Educational Resources</h2>
          <p>Digital classrooms, interactive learning modules, and access to online educational platforms.</p>
        </section>
      </div>
    </div>
  );
};

export default Academics;
