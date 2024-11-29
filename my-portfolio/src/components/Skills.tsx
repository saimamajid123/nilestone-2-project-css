import React from 'react';

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <div className="skills-grid">
        <div data-aso="zoom-in-up" className="skills-description">
          <h2 className="skills-title">Technologies I work with</h2>
          <p className="skills-text">
            I have a solid foundation in web development, specializing in HTML, CSS, and JavaScript. My experience extends 
            to using frameworks like React and Next.js to create dynamic and user-friendly applications. Im also proficient 
            in Tailwind CSS for efficient styling and design. With a passion for learning, I stay updated on the latest 
            technologies to enhance my skill set and contribute effectively to projects.
          </p>
        </div>
        <div>
          <div className="skills-list">
            <div className="skills-column">
              <h2 data-aso="zoom-in-up">TypeScript</h2>
              <h2 data-aso="zoom-in-up">React.js</h2>
              <h2 data-aso="zoom-in-up">Next.js</h2>
            </div>
            <div className="skills-column">
              <h2 data-aso="zoom-in-up">Tailwind</h2>
              <h2 data-aso="zoom-in-up">CSS</h2>
              <h2 data-aso="zoom-in-up">Node.js</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
