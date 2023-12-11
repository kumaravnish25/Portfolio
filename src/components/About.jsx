import React from 'react'
import aboutImg from "../assets/images/aboutKunal.png";

function About() {

  const info = [
    { text: "Years experience", count: "02" },
    { text: "Completed Projects", count: "20" },
    { text: "Companies Work", count: "03" },
  ];

  return (
    <section id="about" className="py-10 text-white ">
    <div className="text-center -mt-6">
      <h3 className="text-5xl font-semibold">
        About <span className="text-cyan-600">Me</span>
      </h3>
      <p className="text-gray-400 my-3 text-xl">My introduction</p>
      <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
        <div className="p-2">
          <div className="text-gray-300 my-3">
            <p className="text-justify leading-7 w-11/12 mx-auto">
            My Portfolio as a Web Developer My work in web development
            has a good reputation. I have created high quality websites 
            and web apps that showcase my skill, talent and innovation. 
            My goal is always to meet the needs of users.
            I build, program, and design websites that are user-friendly 
            and accessible. My functionality, coding skills, and ability 
            to keep up with the latest technology make me a good web developer.
            </p>
            <div className="flex mt-10 items-center gap-7">
              {info.map((content) => (
                <div key={content.text}>
                  <h3 className="md:text-4xl text-2xl font-semibold text-white">
                    {content.count}
                    <span className="text-cyan-600">+</span>{" "}
                  </h3>
                  <span className="md:text-base text-xs">{content.text}</span>
                </div>
              ))}
            </div>
            <br />
            <br />
            <a href="./src/assets/Avnish-resume.pdf" download>
              <button className="btn-primary">Download CV</button>
            </a>
          </div>
        </div>
        <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
          <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
            <img
              src={aboutImg}
              alt=""
              className="w-full  object-fill bg-cyan-600 rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);
};

export default About;