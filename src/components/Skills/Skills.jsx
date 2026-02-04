import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Skills
        </h2>

        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>

        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise honed through
          various projects and experiences
        </p>
      </div>

      {/* Skills Cards */}
      <div className="flex flex-wrap gap-5 py-10 justify-between">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-white/5 backdrop-blur-xl
                       px-6 sm:px-10 py-8 mb-10
                       w-full sm:w-[48%]
                       rounded-2xl
                       border border-white/10
                       hover:border-[#8245ec]/40
                       hover:shadow-[0_0_25px_2px_rgba(130,69,236,0.35)]
                       transition-all duration-300"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-6 text-center">
              {category.title}
            </h3>

            {/* Skills Grid with Tilt */}
            <Tilt
              tiltMaxAngleX={18}
              tiltMaxAngleY={18}
              perspective={1000}
              transitionSpeed={900}
              scale={1.04}
              gyroscope={true}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                {category.skills?.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2
                               border border-white/10
                               rounded-lg
                               py-2 px-3
                               text-sm text-gray-300
                               min-w-0 overflow-hidden
                               hover:bg-white/5
                               transition"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-5 h-5 flex-shrink-0"
                    />

                    <span
                      title={skill.name}
                      className="truncate whitespace-nowrap"
                    >
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
 