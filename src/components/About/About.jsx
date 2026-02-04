import React from "react";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
import ProfilePic from "../../assets/profile2.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row items-center">

        {/* LEFT SIDE */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Sachin Singh
          </h2>

          <h3 className="text-xl sm:text-3xl font-semibold mb-4">
            <span className="text-white">I am a </span>
            <span className="text-[#8245ec]">
              <Typewriter
                options={{
                  strings: [
                    "Full-Stack Developer.",
                    "UI/UX Designer.",
                    "Tech Enthusiast.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 70,
                  deleteSpeed: 40,
                }}
              />
            </span>
          </h3>

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8">
            I build modern, responsive web applications with clean UI and
            scalable code. Passionate about learning new technologies and
            solving real-world problems.
          </p>

          <a
            href="#"
            className="inline-block text-white px-8 py-3 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow:
                "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            Download CV
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-1/2 flex justify-center md:justify-end">

        <Tilt
        className='w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem ] border-4 border-purple-700 rounded-full'>
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
         <img
            src={ProfilePic}
            alt="Sachin"
            className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
          />
        </Tilt>
         
        </div>

      </div>
    </section>
  );
};

export default About;
 