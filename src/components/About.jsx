import React from 'react';
import WorkItem from './WorkItem';

const data = [
  {
    year: 2022,
    title: "Full-Stack Developer Intern",
    duration: "May - August",
    details: "Worked on building responsive web applications using React and Node.js.",
  },
  {
    year: 2021,
    title: "Software Engineering Intern",
    duration: "June - August",
    details: "Developed features for a mobile application using React Native and Firebase.",
  },
  {
    year: 2020,
    title: "Web Development Intern",
    duration: "July - September",
    details: "Assisted in the development and maintenance of company websites using HTML, CSS, and JavaScript.",
  },
  {
    year: 2019,
    title: "Junior Software Developer",
    duration: "Part-Time",
    details: "Contributed to the development of internal tools and utilities using Python and Django.",
  },
  {
    year: 2018,
    title: "Freelance Web Developer",
    duration: "Ongoing",
    details: "Collaborated with clients to design and develop custom websites tailored to their needs.",
  },
];

function About() {
  return (
    <div className='w-full h-screen m-auto md:pl-20 p-4 py-16'>
      <div className="text-center">
        <img
          src="https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
          alt="Profile"
          className="rounded-full h-32 w-32 mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold text-[#006D77]">Yashaswi Kumar Mishra</h1>
        <p className="text-lg text-[#e29578]">Full-Stack Developer | Technology Enthusiast</p>
        <p className="text-lg mt-4">
          Hello! I'm Yashaswi, a passionate developer with a keen interest in building web applications and exploring new technologies. I have experience working with React, Node.js, Python, and more. Let's create something amazing together!
        </p>
      </div>
      <h2 className="text-3xl font-bold text-center text-[#006D77] mt-8">Work Experience</h2>
      {data.map((item, id) => (
        <WorkItem key={id} year={item.year} title={item.title} duration={item.duration} details={item.details} />
      ))}
    </div>
  );
}

export default About;
