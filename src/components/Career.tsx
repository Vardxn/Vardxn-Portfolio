import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Career <span>&</span>
          <br /> credentials
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                  <h4>Student at NIT Srinagar</h4>
                  <h5>National Institute of Technology, Srinagar</h5>
              </div>
                <h3>2022 - 2026</h3>
            </div>
            <p>
                Pursuing B.Tech in Information Technology with coursework in Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks, and System Design. Earlier academics: Class XII CBSE 87.4% and Class X CBSE 91.4% at Army Public School.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                  <h4>Production-Grade Projects</h4>
                  <h5>Full Stack, AI, and B2B Domains</h5>
              </div>
              <h3>2023 - 2025</h3>
            </div>
            <p>
                Independently architected and delivered HealthEase, Wanderlust, and Mohishree across telemedicine AI, travel listings, and industrial B2B. The projects cover 20+ REST endpoints, OCR pipelines, Dockerized services, multi-role RBAC systems, maps, media workflows, and marketplace onboarding.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                  <h4>Full Stack Web Development</h4>
                  <h5>Sigma 8.0 - Apna College</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
                Completed a comprehensive MERN stack program covering DSA, system design, backend engineering, REST APIs, and deployment workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                  <h4>AI/ML Prime</h4>
                  <h5>Apna College</h5>
              </div>
              <h3>2024 - 2025</h3>
            </div>
            <p>
                In-progress AI/ML program focused on machine learning fundamentals, Python data science libraries, and AI-powered application development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                  <h4>Software Engineering Intern</h4>
                  <h5>Noventiq (Umbrella Infotech), Noida</h5>
              </div>
                <h3>Dec 2024 - Feb 2025</h3>
            </div>
            <p>
                Engineered 8+ modular RESTful API endpoints for enterprise cloud-native applications, containerized 3 backend microservices with Docker, strengthened authentication and authorization flows, optimized MongoDB query patterns, and contributed through Agile/Scrum reviews and production defect resolution.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                  <h4>Software Engineering Job Simulation</h4>
                  <h5>JPMorgan Chase & Co. via Forage</h5>
              </div>
              <h3>Jan 2026</h3>
            </div>
            <p>
                Completed simulated enterprise engineering tasks including Kafka integration, H2 in-memory database setup, REST API design, and controller implementation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
