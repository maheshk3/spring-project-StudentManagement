import React from 'react';

function StudentTable({ students, onEdit, onDelete }) {
  if (students.length === 0) {
    return (
      <div className="empty-state-view animate-fade-in">
        <div className="empty-graphic">📁</div>
        <h3>No System Records Present</h3>
        <p>No matches hit your search parameter or the core database is clear.</p>
      </div>
    );
  }

  return (
    <div className="table-scroll-wrapper">
      <table className="modern-table">
        <thead>
          <tr>
            <th>System Key</th>
            <th>Profile Identity</th>
            <th>Contact Vector</th>
            <th>Program Track</th>
            <th>Birth Date</th>
            <th>Location Base</th>
            <th className="text-center">Operations Matrix</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="table-row-hover">
              <td><span className="id-badge">#{student.id}</span></td>
              <td>
                <div className="user-profile-cell">
                  <div className="avatar-placeholder">{student.name?.charAt(0).toUpperCase()}</div>
                  <span className="user-fullname">{student.name}</span>
                </div>
              </td>
              <td>
                <div className="contact-cell">
                  <span className="email-link">{student.email}</span>
                  <span className="phone-sub">{student.phone || 'No Phone Connection'}</span>
                </div>
              </td>
              <td><span className="track-pill">{student.course}</span></td>
              <td><span className="date-txt">{student.dob || '—'}</span></td>
              <td><span className="address-txt">{student.address || '—'}</span></td>
              <td>
                <div className="action-flex-container">
                  <button className="action-btn edit-action" onClick={() => onEdit(student)} title="Modify Profile">
                    ✏️ Edit
                  </button>
                  <button className="action-btn delete-action" onClick={() => onDelete(student.id)} title="Purge Record">
                    🗑️ Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;