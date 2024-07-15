import React from 'react';
import { useParams } from 'react-router-dom';

const CandidateProfile = () => {
  const { id } = useParams();
  
  const candidates = [
    { id: 1, name: 'Ahsan', age: 22, department: 'Computer Science', semester: '6th', year: 2024 },
    { id: 2, name: 'Rana', age: 23, department: 'Business', semester: '5th', year: 2023 },
    { id: 3, name: 'Jutt', age: 21, department: 'Electrical Engineering', semester: '4th', year: 2022 },
    { id: 4, name: 'Khan', age: 24, department: 'Computer Science', semester: '8th', year: 2025 },
    { id: 5, name: 'John', age: 22, department: 'Business', semester: '6th', year: 2024 },
    { id: 6, name: 'Jane', age: 23, department: 'Business', semester: '5th', year: 2023 },
    { id: 7, name: 'John', age: 21, department: 'Computer Science', semester: '4th', year: 2022 },
    { id: 8, name: 'Jony', age: 24, department: 'Electrical Engineering', semester: '8th', year: 2025 },
    { id: 9, name: 'Kiran', age: 22, department: 'Computer Science', semester: '6th', year: 2024 },
    { id: 10, name: 'Aizal', age: 23, department: 'Business', semester: '5th', year: 2023 },
    { id: 11, name: 'Mahnoor', age: 21, department: 'Electrical Engineering', semester: '4th', year: 2022 },
    { id: 12, name: 'Ali', age: 24, department: 'Computer Science', semester: '8th', year: 2025 },
  ];

  const candidate = candidates.find(c => c.id === parseInt(id));

  const handleVote = () => {
    alert(`You have voted for ${candidate.name}`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'grey' }}>
      {candidate ? (
        <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '20px', borderRadius: '10px', backgroundColor: '#f9f9f9', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
          <h1 style={{ fontSize: '2em', marginBottom: '10px' }}>{candidate.name}</h1>
          <p style={{ fontSize: '1.2em', margin: '5px 0' }}><strong>ID:</strong> {candidate.id}</p>
          <p style={{ fontSize: '1.2em', margin: '5px 0' }}><strong>Age:</strong> {candidate.age}</p>
          <p style={{ fontSize: '1.2em', margin: '5px 0' }}><strong>Department:</strong> {candidate.department}</p>
          <p style={{ fontSize: '1.2em', margin: '5px 0' }}><strong>Semester:</strong> {candidate.semester}</p>
          <p style={{ fontSize: '1.2em', margin: '5px 0' }}><strong>Year:</strong> {candidate.year}</p>
          <button onClick={handleVote} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '1em', color: '#fff', backgroundColor: '#007bff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Vote
          </button>
        </div>
      ) : (
        <p style={{ fontSize: '1.5em', textAlign: 'center' }}>Candidate not found.</p>
      )}
    </div>
  );
};

export default CandidateProfile;
