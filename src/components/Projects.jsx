import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";

// Manual Featured Projects
const manualProjects = [
  {
    name: "Project Paradox",
    desc: "Crop recommendation system",
    img: "paradox1.png",
    link: "https://github.com/Pranav8722/project_paradox"
  },
  {
    name: "Milk Dairy Billing",
    desc: "Console-based billing app",
    img: "dairy.png",
    link: "https://github.com/Pranav8722/milkdairy-app/tree/main/try"
  },
  {
    name: "signature matching ",
    desc: "match two signature and identify orignality",
    img: "signature.png",
    link: "https://github.com/Pranav8722/signature-matching.git"
  },
  {
    name: "Academia",
    desc: "Mini e-learning site",
    img: "academia.jpg",
    link: "https://github.com/Pranav8722/Academia"
  }
];

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [selectedReadme, setSelectedReadme] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  // Use token only in development
  const token =
    process.env.NODE_ENV === "development" && process.env.REACT_APP_GITHUB_TOKEN
      ? process.env.REACT_APP_GITHUB_TOKEN
      : null;

  // Fetch GitHub Repositories
  useEffect(() => {
    fetch("https://api.github.com/users/Pranav8722/repos?sort=updated", {
      headers: token ? { Authorization: `token ${token}` } : {}
    })
      .then((response) => {
        if (!response.ok) throw new Error("GitHub API Error");
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data);
        } else {
          setErrorMsg("Unexpected response from GitHub API.");
        }
        setLoading(false);
      })
      .catch(() => {
        setErrorMsg("Could not load GitHub repositories (API limit reached) wait for 1/hr or try connecting to other wifi 😔.");
        setLoading(false);
      });
  }, [token]);

  // Fetch README for a selected repository
  const fetchReadme = (repoName) => {
    setSelectedReadme("Loading...");
    fetch(`https://api.github.com/repos/Pranav8722/${repoName}/readme`, {
      headers: token ? { Authorization: `token ${token}` } : {}
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.content) {
          setSelectedReadme(atob(data.content));
        } else {
          setSelectedReadme("No README available.");
        }
      })
      .catch(() => setSelectedReadme("Failed to load README."));
  };

  return (
    <section id="projects">
      {/* Featured Manual Projects */}
      <h2>Featured Projects</h2>
      <div className="project-grid">
        {manualProjects.map((project, index) => (
          <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={400}>
            <div className="project-card">
              <img src={project.img} alt={project.name} />
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
              <a href={project.link} target="_blank" rel="noreferrer">
                View on GitHub
              </a>
            </div>
          </Tilt>
        ))}
      </div>

      {/* Dynamic GitHub Repositories */}
      <h2 style={{ marginTop: "50px" }}>GitHub Repositories</h2>
      {loading && <p style={{ textAlign: "center" }}>Loading repositories...</p>}
      {errorMsg && <p style={{ textAlign: "center", color: "red" }}>{errorMsg}</p>}

      {!loading && !errorMsg && (
        <div className="project-grid">
          {repos.slice(0, 6).map((repo) => (
            <div key={repo.id} className="project-card">
              <h3>{repo.name}</h3>
              <p>
                <strong>⭐ {repo.stargazers_count}</strong> | <strong>🍴 {repo.forks_count}</strong>
              </p>
              <p>Last updated: {new Date(repo.updated_at).toLocaleDateString()}</p>
              <button onClick={() => fetchReadme(repo.name)}>View README</button>
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                View Repository
              </a>
            </div>
          ))}
        </div>
      )}

      {/* Modal to Display README */}
      {selectedReadme && (
        <div className="modal" onClick={() => setSelectedReadme(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>README</h3>
            <pre>{selectedReadme}</pre>
            <button onClick={() => setSelectedReadme(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
