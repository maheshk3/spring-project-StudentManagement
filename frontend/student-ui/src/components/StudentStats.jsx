import React from 'react';

function StudentStats({ students }) {
  const totalStudents = students.length;
  const uniqueCourses = [...new Set(students.map(s => s.course).filter(Boolean))].length;
  const recentStudent = students.length > 0 ? students[students.length - 1].name : 'None';

  return (
    <div className="stats-grid">
      <div className="stat-card glass-card">
        <div className="stat-icon-wrapper purple">📊</div>
        <div className="stat-info">
          <h3>Total System Members</h3>
          <p className="stat-number">{totalStudents}</p>
        </div>
      </div>
      
      <div className="stat-card glass-card">
        <div className="stat-icon-wrapper blue">⚡</div>
        <div className="stat-info">
          <h3>Active Programs</h3>
          <p className="stat-number">{uniqueCourses}</p>
        </div>
      </div>

      <div className="stat-card glass-card">
        <div className="stat-icon-wrapper green">🔥</div>
        <div className="stat-info">
          <h3>Latest Enrollee</h3>
          <p className="stat-string">{recentStudent}</p>
        </div>
      </div>
    </div>
  );
}

export default StudentStats;