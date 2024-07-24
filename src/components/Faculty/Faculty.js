import React from 'react';
import { MdExpandMore } from 'react-icons/md';
import { Disclosure } from '@headlessui/react';

const facultyMembers = [
  { name: 'John Doe', position: 'Principal', qualification: 'M.Ed', experience: '20 years' },
  { name: 'Jane Smith', position: 'Vice Principal', qualification: 'M.Sc. in Physics', experience: '15 years' },
  { name: 'Emily Johnson', position: 'English Teacher', qualification: 'M.A. in English', experience: '10 years' },
  { name: 'Michael Brown', position: 'Mathematics Teacher', qualification: 'M.Sc. in Mathematics', experience: '8 years' },
  { name: 'Sophia Davis', position: 'Science Teacher', qualification: 'M.Sc. in Chemistry', experience: '12 years' },
  { name: 'David Wilson', position: 'Computer Science Teacher', qualification: 'B.Tech in Computer Science', experience: '5 years' },
];

const Faculty = () => {
  return (
    <div>
      <div className="p-10">
        <h1 className="text-4xl font-bold mb-6 text-center">Faculty</h1>

        <section className="space-y-4">
          {facultyMembers.map((member, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <div className="bg-gray-100 rounded-lg shadow-md p-4">
                  <Disclosure.Button className="flex justify-between items-center w-full text-left text-lg font-semibold">
                    <span>{member.name}</span>
                    <MdExpandMore
                      className={`transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-2">
                    <p><strong>Position:</strong> {member.position}</p>
                    <p><strong>Qualification:</strong> {member.qualification}</p>
                    <p><strong>Experience:</strong> {member.experience}</p>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Faculty;
