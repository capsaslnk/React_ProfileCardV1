import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <body>
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList />
        </div>
      </body>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src="avatar2.jpg" alt="Jonas" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Jonas Schmedtmann</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML + CSS" emoji="🤛" color="yellow" />
      <Skill skill="React" emoji="🤛" color="red" />
      <Skill skill="Web Design" emoji="🤛" color="lightblue" />
      <Skill skill="Javascript" emoji="🤛" color="aqua" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      {props.skill}
      {props.emoji}
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
