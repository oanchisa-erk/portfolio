import React from "react";
import bgProfile from "../Image/bg-profile.png";
import me from "../Image/me.png";

const Home = () => {
  const skills = ["Figma", "Node.js", "React", "HTML", "CSS", "JS"];

  return (
    <section
      id="home"
      className="
        scroll-mt-24
        sm:scroll-mt-24
        lg:scroll-mt-20
        xl:scroll-mt-16
        2xl:scroll-mt-16

        w-full
        flex flex-col items-center text-center
        font-inter sm:px-10

        lg:flex-row
        lg:items-center
        lg:text-left

        font-inter
      "
    >
      {/* Left */}
      <div className="relative flex items-center justify-center w-full h-auto inline-block md:mb-10">
        <img
          src={bgProfile}
          alt="bgProfile"
          className="
            absolute

            2xl:w-[540px]
            xl:w-[500px]
            lg:w-[420px]
            md:w-[340px]
            sm:w-[300px]

            max-w-[540px]
            sm:mt-64 lg:mt-0 xl:mt-0 2xl:mt-0
          "
        />
        <img
          src={me}
          alt="me"
          className="
            absolute pl-3

            2xl:w-[600px]
            xl:w-[540px]
            lg:w-[440px]
            md:w-[360px]
            sm:w-[340px]

            max-w-[600px]
            sm:mt-[300px] lg:mt-0 xl:mt-0 2xl:mt-0
          "
        />
      </div>

      {/* Right */}
      <div className="w-full flex flex-col justify-start text-center lg:text-left">
        {/* Intro Text */}
        <div
          className="
            text-white font-semibold

            2xl:text-[84px]
            xl:text-[72px]
            lg:text-[60px]
            md:text-[52px]
            sm:text-[44px]
            text-[36px]

            -mb-8
            sm:mt-[280px] lg:mt-0 xl:mt-0 2xl:mt-0
          "
        >
          Hi, I'm
        </div>

        <div
          className="
            text-purple-1000 font-extrabold

            2xl:text-[96px]
            xl:text-[82px]
            lg:text-[70px]
            md:text-[60px]
            sm:text-[50px]
            text-[42px]

            -mb-8
            sm:mt-4 lg:mt-0 xl:mt-0 2xl:mt-0
          "
        >
          Oanchisa
        </div>

        <div
          className="
            text-yellow-1000 font-extrabold

            2xl:text-[64px]
            xl:text-[54px]
            lg:text-[46px]
            md:text-[40px]
            sm:text-[34px]
            text-[28px]

            mb-5
            sm:mt-4 lg:mt-0 xl:mt-0 2xl:mt-0
          "
        >
          a Frontend Developer
        </div>

        {/* Description */}
        <p
          className="
            text-white

            2xl:text-[26px]
            xl:text-[22px]
            lg:text-[20px]
            md:text-[18px]
            sm:text-[16px]
            text-[15px]

            mb-5
          "
        >
          Previously worked with Infuse — passionate about learning beyond the
          UI/UX layer, and exploring backend and IoT to broaden my technical
          expertise through hands-on projects.
        </p>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1ZPDIPx_UObC2nJ2Lq7fV7M2UzbHUoulA/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="
              bg-yellow-1000 font-semibold

              2xl:text-[17px]
              xl:text-[15px]
              lg:text-[14px]
              md:text-[14px]
              sm:text-[13px]
              text-[12px]

              p-3 rounded-xl mt-4 mb-5
            "
          >
            View Resume
          </button>
        </a>

        {/* Skills */}
        <div className="flex w-full flex-wrap md:justify-center lg:justify-start sm:justify-center">
          {skills.map((skill) => (
            <div
              key={skill}
              className="
                bg-purple-1100/20 text-white
                font-light border border-purple-1100
                rounded-3xl px-5 py-1 mr-4 mb-3

                2xl:text-[20px]
                xl:text-[18px]
                lg:text-[16px]
                md:text-[14px]
                sm:text-[12px]
                text-[10px]
              "
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
