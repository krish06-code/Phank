import React, { useState } from 'react';
import './App.css';  // Import your CSS file

export default function App() {
  const [query, setQuery] = useState('');
  const [skills] = useState([
    { name: 'Web Development', person: 'Aarav', description: 'Frontend + Backend developer with MERN stack experience.' },
    { name: 'Graphic Design', person: 'Simran', description: 'Creative designer skilled in Figma, Photoshop, and UI layouts.' },
    { name: 'Video Editing', person: 'Harpreet', description: 'Professional video editor, works with Premiere Pro and After Effects.' },
    { name: 'Content Writing', person: 'Riya', description: 'Writes engaging blogs, copy, and technical documentation.' },
    { name: 'Data Analysis', person: 'Kabir', description: 'Analyzes datasets using Python, Pandas, and Tableau.' },
  ]);

  const filtered = skills.filter(skill =>
    skill.name.toLowerCase().includes(query.toLowerCase()) ||
    skill.person.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="title">Phank — Find People with the Skills You Need</h1>

      <div className="search-box">
        <label className="search-label">Add the Work or Skill You Need Help With:</label>
        <input
          type="text"
          placeholder="e.g. Web Development, Video Editing, Content Writing..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="grid">
        {filtered.length > 0 ? (
          filtered.map((skill, index) => (
            <div key={index} className="card">
              <h2 className="card-title">{skill.name}</h2>
              <p className="card-person">👤 {skill.person}</p>
              <p className="card-desc">{skill.description}</p>
              <button className="connect-btn">Connect</button>
            </div>
          ))
        ) : (
          <p className="no-results">No results found. Try another skill!</p>
        )}
      </div>
    </div>
  );
}
