import "./Skills.css";

function Skills() {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 80 },
    { name: "JavaScript", level: 70 },
    { name: "React", level: 60 },
    { name: "Python", level: 90 },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skill-grid">
        {skills.map((skill) => (
          <div className="skill-item" key={skill.name}>
            <h3>{skill.name}</h3>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: `${skill.level}%` }} />
            </div>
            <span>{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;