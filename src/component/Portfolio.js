import ProjectCard from "./ProjectCard";
import InternshipCard from "./InternshipCard";

import webApp from "../Image/webApp.png";
import schedule from "../Image/schedule.png";
import clock from "../Image/clock.png";
import alarmClock from "../Image/alarmClock.png";
import half from "../Image/halfProject.png";
import bgIntern from "../Image/BgInternship.png";
import DetailInternship from "../Image/DetailInternship.png";
import debt from "../Image/Debt.png";

const Portfolio = () => {
  return (
    <section id="portfolio" className="flex flex-col w-full font-inter">
      <div className="p-16 items-center">
        <div
          className="text-white 
        2xl:text-[68px] 
        xl:text-[64px] 
        lg:text-[60px] 
        md:text-[54px]
        sm:text-[48px]  
        font-bold"
        >
          Project Experience
        </div>

        <ProjectCard
          title="Web Application"
          description="Build a web application with React to efficiently manage teaching schedules and prevent conflicts."
          skills={["Figma", "Node.js", "React", "CSS", "JS"]}
          image={schedule}
          bg={webApp}
          githubLink="https://github.com/Phitchayp/Project-SE.git"
        />

        <ProjectCard
          title="Alarm Clock"
          description="Created a smart alarm system using ESP32 and sensors to detect sleepers and set timers for alarms."
          skills={["HTML", "Arduino", "ESP32"]}
          image={alarmClock}
          bg={clock}
          reverse={true}
          githubLink="https://drive.google.com/file/d/1_PWhrpLUUoydS2iakXcmTZxEZo6OIAzu/view?usp=sharing"
        />

        <div className="flex flex-wrap -mx-2">
          <ProjectCard
            title="POS System Simulation"
            description="Simulated a POS system using Python and NFC reader to read student ID cards, manage wallet balances, and accumulate points for rewards."
            skills={["Python", "NFC Reader"]}
            bg={half}
            layout="half"
            githubLink="https://figma.com/exit?url=https%3A%2F%2Fgithub.com%2Foanchisa%2FNFC_store.git"
          />

          <ProjectCard
            title="Emotion Detection"
            description="Trained a machine learning model with Python and OpenCV to detect emotions from camera images."
            skills={["Python", "Open CV", "Model"]}
            bg={half}
            layout="half"
            githubLink="https://drive.google.com/file/d/1ufuMo0fcaR7eEsCxzppKq3si42FGk-5b/view?usp=sharing"
          />
        </div>
        <InternshipCard
          title="Debt Tracking"
          description={[
            "Designed and implemented a debt tracking system with React (frontend), Java (backend), and SQL (database), allowing users to effectively monitor and manage debtor statuses.",
            "Built a report generation system using React, Java, and SQL, integrating with Jaspersoft Studio to export reports based on predefined templates.",
          ]}
          bg={bgIntern}
          detailImage={DetailInternship}
          rightImage={debt}
          link="https://drive.google.com/file/d/1AvQOgHVk8P6--7FlxcJqCt-XQXkZUvDC/view"
        />
      </div>
    </section>
  );
};

export default Portfolio;
