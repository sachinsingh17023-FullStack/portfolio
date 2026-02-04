import React from "react";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
import ProfilePic from "../../assets/Profile2.png";

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

          <p className="text-base sm:text-lg text-gray-400 mb-10 mt-8">
            I build modern, responsive web applications with clean UI and
            scalable code. Passionate about learning new technologies and
            solving real-world problems.
          </p>

          {/* DOWNLOAD CV */}
          <a
            href="/sachin-cv.pdf"
            download
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
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            transitionSpeed={1000}
            scale={1.05}
            gyroscope={true}
            className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border-4 border-purple-700 flex items-center justify-center"
          >
            <img
              src={ProfilePic}
              alt="Sachin Singh"
              className="w-full h-full rounded-full object-cover"
            />
          </Tilt>
        </div>

      </div>
    </section>
  );
};

export default About;
