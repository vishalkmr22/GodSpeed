import React from 'react';

const team = [
  {
    name: 'Bob Smith',
    role: 'CEO & Founder',
    image: require('../assets/team1.jpg'),
    bio: 'Visionary leader with a passion for innovation.'
  },
  {
    name: 'Alice Johnson',
    role: 'Lead Developer',
    image: require('../assets/team2.jpg'),
    bio: 'Expert in scalable web architectures and cloud.'
  },
  {
    name: 'Carol Lee',
    role: 'Product Designer',
    image: require('../assets/team3.jpg'),
    bio: 'Designs beautiful, user-friendly interfaces.'
  }
];

export default function Team() {
  return (
    <section id="team" className="section section-team">
      <h2>Meet the Team</h2>
      <div className="team-flex">
        {team.map((m, idx) => (
          <div key={idx} className="member-card">
            <img src={m.image} alt={m.name} />
            <h3>{m.name}</h3>
            <p><em>{m.role}</em></p>
            <p>{m.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}