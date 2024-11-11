import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const skills = [
  {
    skill: 'HTML+CSS',
    level: 'advanced',
    color: '#2662EA',
  },
  {
    skill: 'JavaScript',
    level: 'advanced',
    color: '#EFD81D',
  },
  {
    skill: 'Web Design',
    level: 'advanced',
    color: '#C3DCAF',
  },
  {
    skill: 'Git and GitHub',
    level: 'intermediate',
    color: '#E84F33',
  },
  {
    skill: 'React',
    level: 'advanced',
    color: '#60DAFB',
  },
  {
    skill: 'Svelte',
    level: 'beginner',
    color: '#FF3B00',
  },
];

function App() {
  return (
    <div className="card">
      <Avatar src="avatar.jpeg" />
      <div className="data">
        <Intro
          name="Dean Fox"
          intro="Learning full-stack development in order to change careers. Have a massive headache right now and can't think of anything interesting to write"
        />
        <SkillList />
      </div>
    </div>
  );
}

const Avatar = (props) => {
  return <img src={props.src} alt="dean" className="avatar"></img>;
};

const Intro = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p className="data">{props.intro}</p>
    </div>
  );
};

// From Challenge #1
/*
const SkillList = (props) => {
  return (
    <div className="skill-list">
      <Skill skill="JavaScript" color="red" />
      <Skill skill="HTML" color="orange" />
      <Skill skill="Python" color="green" />
      <Skill skill="React" color="blue" />
    </div>
  );
};

const Skill = (props) => {
  return (
    <span className="skill" style={{ backgroundColor: props.color }}>
      {props.skill} 💪🏻
    </span>
  );
};
*/

const SkillList = (props) => {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skillObj={skill} />
      ))}
    </div>
  );
};

const Skill = ({ skillObj }) => {
  let emoji = '';
  if (skillObj.level === 'beginner') emoji = '👶🏼';
  if (skillObj.level === 'intermediate') emoji = '👍🏻';
  if (skillObj.level === 'advanced') emoji = '💪🏻';
  return (
    <span className="skill" style={{ backgroundColor: skillObj.color }}>
      {skillObj.skill} {emoji}
    </span>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
