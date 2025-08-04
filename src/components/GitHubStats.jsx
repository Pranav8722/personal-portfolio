import React, { useEffect, useState } from "react";

const GitHubStats = () => {
  const [githubData, setGithubData] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const token = process.env.REACT_APP_GITHUB_TOKEN;

  useEffect(() => {
    fetch("https://api.github.com/users/Pranav8722", {
      headers: token ? { Authorization: `token ${token}` } : {}
    })
      .then((response) => {
        if (!response.ok) throw new Error("GitHub API Error");
        return response.json();
      })
      .then((data) => setGithubData(data))
      .catch(() => setErrorMsg("Could not load GitHub data (API limit reached)."));
  }, [token]);

  if (errorMsg) return <p style={{ textAlign: "center", color: "red" }}>{errorMsg}</p>;
  if (!githubData) return <p style={{ textAlign: "center" }}>Loading GitHub Stats...</p>;

  return (
    <section id="github">
      <h2>GitHub Stats</h2>
      <div className="github-card">
        <img src={githubData.avatar_url} alt="GitHub Avatar" />
        <h3>{githubData.name || githubData.login}</h3>
        <p>{githubData.bio || "Aspiring Developer"}</p>
        <p><strong>Public Repos:</strong> {githubData.public_repos}</p>
        <p><strong>Followers:</strong> {githubData.followers}</p>
        <a href={githubData.html_url} target="_blank" rel="noreferrer">View Profile</a>
      </div>

      {/* Dynamic Stats from GitHub Readme Stats API */}
      <div className="github-stats-img">
        <img
          src={`https://github-readme-stats.vercel.app/api?username=Pranav8722&show_icons=true&theme=tokyonight`}
          alt="GitHub Stats"
        />
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=Pranav8722&layout=compact&theme=tokyonight`}
          alt="Top Languages"
        />
      </div>
    </section>
  );
};

export default GitHubStats;
