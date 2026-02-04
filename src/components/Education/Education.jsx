import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My academic journey and educational background
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative">
        {/* Vertical Line (desktop only) */}
        <div className="hidden sm:block absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-white h-full"></div>

        {/* Education Cards */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex w-full mb-20 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Card */}
            <div
              className={`w-full sm:w-[480px] bg-gray-900 border border-white rounded-2xl shadow-2xl p-6 sm:p-8 backdrop-blur-md
              shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
              transform transition-transform duration-300 hover:scale-[1.03]
              ${
                index % 2 === 0
                  ? "sm:mr-20"
                  : "sm:ml-20"
              }`}
            >
              {/* Header */}
              <div className="flex items-center gap-5">
                {/* Logo */}
                <div className="w-16 h-16 bg-white rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-300 text-sm">{edu.school}</p>
                  <p className="text-gray-500 text-sm mt-1">{edu.date}</p>
                </div>
              </div>

              {/* Body */}
              <p className="mt-4 text-gray-400 font-semibold">
                Grade: {edu.grade}
              </p>
              <p className="mt-3 text-gray-400 leading-relaxed">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
