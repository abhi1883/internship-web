import { useState } from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "Movie Review Sentiment Analyzer",
      image: "/sentiment-analysis.jpeg.png",
      category: "ai",
      description: "Predicts whether a movie review is positive or negative using NLP and a Naive Bayes model, trained on 50,000 IMDB reviews with 84.8% accuracy.",
      tech: ["Python", "NLTK", "Streamlit"],
      demo: "https://abhinanda-sentiment-analyzer.streamlit.app",
      github: "https://github.com/abhi1883/sentiment-analysis-app",
    },
    {
      id: 2,
      name: "Career Trends Dashboard",
      image: "/career-trends.jpg",
      category: "data",
      description: "Analyzes 565 data science job salaries and predicts salary based on job title, experience, and location. Random Forest model achieved R²=0.319.",
      tech: ["Python", "Pandas", "Streamlit"],
      demo: "https://abhinanda-career-trends.streamlit.app",
      github: "https://github.com/abhi1883/career-trends-dashboard-",
    },
    {
      id: 3,
      name: "Plant Disease Classifier",
      image: null,
      category: "ai",
      description: "A CNN-based image classifier trained on the PlantVillage dataset to detect plant diseases from leaf photos across 38 categories. In progress.",
      tech: ["Python", "TensorFlow", "CNN"],
      demo: "#",
      github: "https://github.com/abhi1883",
    },
  ];

  const [filter, setFilter] = useState("all");
  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>

      <div className="filter-buttons">
        <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>All</button>
        <button className={filter === "ai" ? "active" : ""} onClick={() => setFilter("ai")}>AI</button>
        <button className={filter === "data" ? "active" : ""} onClick={() => setFilter("data")}>Data</button>
      </div>

      <div className="project-grid">
        {filteredProjects.map((project) => (
          <article className="project-card" key={project.id}>
            {project.image && <img src={project.image} alt={project.name} />}
            <div className="project-card-body">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tech.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
              <div className="project-buttons">
                <a href={project.demo} className="btn" target="_blank" rel="noreferrer">Live Demo</a>
                <a href={project.github} className="btn" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;