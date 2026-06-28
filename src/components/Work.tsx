import { useState } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import ProjectCaseStudy from "./ProjectCaseStudy";
import { caseStudies } from "../data/projectCaseStudies";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MdOpenInNew } from "react-icons/md";

gsap.registerPlugin(useGSAP);

const Work = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null);
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {caseStudies.map((project, index) => (
            <div
              className="work-box"
              key={project.id}
              onClick={() => setSelectedCaseStudy(project.id)}
              style={{ cursor: "pointer" }}
            >
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                      <h4>
                        {project.title.split(" - ")[0]}
                      </h4>
                      <p>
                        {project.category}
                      </p>
                  </div>
                </div>
                  <h4>Tech Stack</h4>
                  <p>
                    {project.techStack.slice(0, 5).join(", ")}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-live-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <MdOpenInNew size={16} />
                      View Live Project
                    </a>
                  )}
                  </p>
              </div>
                <WorkImage
                  image={
                    index === 0
                      ? "/images/healthease-placeholder.svg"
                      : index === 1
                      ? "/images/wanderlust-placeholder.svg"
                      : index === 2
                      ? "/images/mohishree-placeholder.svg"
                      : "/images/placeholder.webp"
                  }
                  alt={
                    index === 0
                      ? "HealthEase project preview"
                      : index === 1
                      ? "Wanderlust project preview"
                      : index === 2
                      ? "Mohishree project preview"
                      : "Project preview"
                  }
                />
            </div>
          ))}

            {/*
              Future placeholders (hidden for now):
              - Project 04
              - Project 05
              - Project 06

              To show them again, change Array(3) back to Array(6)
              and add your project details for indices 3, 4, and 5.
            */}
        </div>
      </div>

      {selectedCaseStudy && (
        <ProjectCaseStudy
          project={caseStudies.find((p) => p.id === selectedCaseStudy)!}
          isOpen={!!selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}
    </div>
  );
};

export default Work;
