import React, { useState, useEffect } from 'react';

function StudentForm({ student, onSave, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    dob: '',
    address: ''
  });

  useEffect(() => {
    if (student) {
      setFormData(student);
    }
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal-backdrop-blur">
      <div className="modal-wrapper-glass card-slide-in">
        <div className="modal-top-bar">
          <h2>{student ? '🛠️ Modify Profile Stream' : '🚀 Register New Enrollee'}</h2>
          <button className="modal-close-cross" onClick={onClose}>&times;</button>
        </div>
        <form onSubmit={handleSubmit} className="form-payload">
          <div className="interactive-form-grid">
            <div className="input-field-block">
              <label>Full Identity Legal Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. Mahesh Kumar" required />
            </div>
            <div className="input-field-block">
              <label>Secure Communication Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="name@domain.com" required />
            </div>
            <div className="input-field-block">
              <label>Mobile Contact Line</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="10-digit primary string" />
            </div>
            <div className="input-field-block">
              <label>Assigned Program Specialization Track</label>
              <input type="text" name="course" value={formData.course} onChange={handleChange} placeholder="e.g. Java Full Stack" required />
            </div>
            <div className="input-field-block">
              <label>Date of Birth Calendar Instance</label>
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
            </div>
            <div className="input-field-block spans-all-columns">
              <label>Geographic Living Domicile Address</label>
              <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Complete physical address tracking..." rows="2"></textarea>
            </div>
          </div>
          <div className="form-action-row">
            <button type="button" className="action-btn edit-action" onClick={onClose}>Abort</button>
            <button type="submit" className="btn btn-gradient">{student ? 'Commit Updates' : 'Inject Registry'}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StudentForm;