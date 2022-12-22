import React from 'react'
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"
import GithubIcon from "@mui/icons-material/GitHub"
import "../styles/Home.css"

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, my name is John Paul </h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills"></div>
      <h1>Skills</h1>
      <ol className="list">
        <li className="item">
          <h2>Front-End</h2>
          <span>
            ReactJS, CSS, HTML
          </span>
        </li>
        <li className="item">
          <h2>Back-End</h2>
          <span>
            NodeJS, MySQL, SQL, PostGres, PHP
          </span>
        </li>
        <li className="item">
          <h2>Languages</h2>
          <span>
            Javascript, Java, C#, C, C++
          </span>
        </li>
      </ol>
    </div>
  );
}

export default Home