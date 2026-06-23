import React, { useState, useEffect } from 'react';
import { studentService } from '../services/studentService';
import { toast } from 'react-toastify';
import StudentTable from '../components/StudentTable';
import StudentForm from '../components/StudentForm';
import SearchBar from '../components/SearchBar';
import StudentStats from '../components/StudentStats';
import Pagination from '../components/Pagination';
import ThemeToggle from '../components/ThemeToggle';

function Dashboard({ theme, toggleTheme }) {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingStudent, setEditingStudent] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const loadStudents = async () => {
    setIsLoading(true);
    try {
      const data = await studentService.getAllStudents();
      setStudents(Array.isArray(data) ? data : []);
    } catch (err) {
      toast.error('❌ Failed to fetch student data');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  useEffect(() => {
    const filtered = students.filter((student) => {
      const term = searchTerm.toLowerCase();
      return (
        student.name?.toLowerCase().includes(term) ||
        student.email?.toLowerCase().includes(term) ||
        student.course?.toLowerCase().includes(term)
      );
    });
    setFilteredStudents(filtered);
    setCurrentPage(1); // Reset to first page on search
  }, [searchTerm, students]);

  const handleSaveStudent = async (studentData) => {
    try {
      if (editingStudent) {
        await studentService.updateStudent(editingStudent.id, studentData);
        toast.success('🚀 Student Updated Successfully');
      } else {
        await studentService.createStudent(studentData);
        toast.success('✨ Student Added Successfully');
      }
      loadStudents();
      closeForm();
    } catch (err) {
      toast.error(editingStudent ? '⚠️ Failed to Update Student' : '⚠️ Failed to Add Student');
    }
  };

  const handleDeleteStudent = async (id) => {
    try {
      await studentService.deleteStudent(id);
      toast.success('🗑️ Student Deleted Successfully');
      loadStudents();
    } catch (err) {
      toast.error('💥 Failed to Delete Student');
    }
  };

  const openForm = (student = null) => {
    setEditingStudent(student);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setEditingStudent(null);
    setIsFormOpen(false);
  };

  // Compute Pagination Boundaries
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItemsSlice = filteredStudents.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.max(1, Math.ceil(filteredStudents.length / itemsPerPage));

  return (
    <div className="dashboard-layout">
      <header className="glass-header">
        <div className="brand-group">
          <div className="brand-logo">🎓</div>
          <div>
            <h1>EduPulse <span className="neon-text">Hub</span></h1>
            <p className="subtitle">Next-Gen Academic Directory</p>
          </div>
        </div>
        <div className="action-group">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button className="btn btn-gradient btn-pulse" onClick={() => openForm()}>
            <span className="btn-icon">＋</span> Add Student
          </button>
        </div>
      </header>

      <StudentStats students={students} />

      <div className="toolbar-area">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <main className="glass-panel main-content-card">
        {isLoading ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Syncing secure ledger data...</p>
          </div>
        ) : (
          <>
            <StudentTable 
              students={currentItemsSlice} 
              onEdit={openForm} 
              onDelete={handleDeleteStudent} 
            />
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              onPageChange={setCurrentPage} 
            />
          </>
        )}
      </main>

      {isFormOpen && (
        <StudentForm 
          student={editingStudent} 
          onSave={handleSaveStudent} 
          onClose={closeForm} 
        />
      )}
    </div>
  );
}

export default Dashboard;