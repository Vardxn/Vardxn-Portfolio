import { motion } from "framer-motion";
import { skillsData } from "../data/skills";
import "./styles/Skills.css";

const Skills = () => {
  const skillRows = skillsData.reduce<typeof skillsData[]>((rows, category, index) => {
    if (index % 2 === 0) {
      rows.push([category]);
    } else {
      rows[rows.length - 1].push(category);
    }

    return rows;
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const skillBarVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "100%",
      opacity: 1,
      transition: {
        duration: 1.2,
      },
    },
  }

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="skills-header"
        >
          <h2>
            My <span>Skills</span>
          </h2>
          <p className="skills-subtitle">
            Resume-aligned strengths across backend engineering, full-stack delivery, AI integrations, cloud, and core CS
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillRows.map((row, rowIndex) => (
            <div className="skills-row" key={`skills-row-${rowIndex}`}>
              {row.map((category) => (
                <motion.div key={category.category} className="skill-category">
                  <h3 className="category-title">{category.category}</h3>

                  <div className="skills-list">
                    {category.skills.map((skill, idx) => (
                      <motion.div
                        key={`${category.category}-${skill.name}`}
                        className="skill-item"
                        variants={skillBarVariants}
                        custom={idx}
                      >
                        <div className="skill-header">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.proficiency}%</span>
                        </div>

                        <div className="skill-bar-container">
                          <div
                            className="skill-bar"
                            style={{
                              width: `${skill.proficiency}%`,
                              backgroundColor: skill.color || "var(--accentColor)",
                            }}
                          >
                            <motion.div
                              className="skill-bar-glow"
                              animate={{
                                opacity: [0.6, 1, 0.6],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                              }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>

        <motion.div
          className="skills-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="stat">
            <h4>20+</h4>
            <p>API Endpoints Shipped</p>
          </div>
          <div className="stat">
            <h4>3</h4>
            <p>Production-Grade Projects</p>
          </div>
          <div className="stat">
            <h4>~98%</h4>
            <p>OCR Extraction Accuracy</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
