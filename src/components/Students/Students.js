import React from 'react';
import { Disclosure } from '@headlessui/react';
import { MdExpandMore } from 'react-icons/md';

const extracurricularActivities = [
  'Music', 'Dance', 'Drama', 'Art', 'Sports', 'Robotics', 'Debate Club', 'Science Club'
];

const clubsAndSocieties = [
  'Literary Society', 'Environmental Club', 'Astronomy Club', 'Coding Club'
];

const achievements = [
  'John Smith - National Level Math Olympiad Winner',
  'Sarah Lee - Gold Medalist in State Swimming Championship',
  'Tech Innovators Club - Winners of Inter-School Robotics Competition'
];

const studentCouncil = [
  { role: 'President', name: 'Amy Parker', grade: 'Grade 12' },
  { role: 'Vice President', name: 'Rajiv Mehta', grade: 'Grade 11' },
  { role: 'Secretary', name: 'Lisa Wong', grade: 'Grade 10' }
];

const Students = () => {
  return (
    <div>
      <div className="p-10">
        <h1 className="text-4xl font-bold mb-6 text-center">Student Life at Springdale</h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Extracurricular Activities</h2>
          <ul className="list-disc pl-6 space-y-2">
            {extracurricularActivities.map((activity, index) => (
              <li key={index} className="text-lg">{activity}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Clubs and Societies</h2>
          <ul className="list-disc pl-6 space-y-2">
            {clubsAndSocieties.map((club, index) => (
              <li key={index} className="text-lg">{club}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="p-4 bg-gray-100 rounded-md shadow-md">
                <p className="text-lg">{achievement}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Student Council</h2>
          <div className="space-y-4">
            {studentCouncil.map((member, index) => (
              <Disclosure key={index}>
                {({ open }) => (
                  <div className="bg-gray-100 rounded-lg shadow-md p-4">
                    <Disclosure.Button className="flex justify-between items-center w-full text-left text-lg font-semibold">
                      <span>{member.role}: {member.name} - {member.grade}</span>
                      <MdExpandMore
                        className={`transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2">
                      <p><strong>Role:</strong> {member.role}</p>
                      <p><strong>Name:</strong> {member.name}</p>
                      <p><strong>Grade:</strong> {member.grade}</p>
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Students;
