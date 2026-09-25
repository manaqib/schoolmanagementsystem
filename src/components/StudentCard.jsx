import StatusBadge from './StatusBadge'

const StudentCard = ({ student }) => {
  if (!student) return <div className="empty-state">Select a student to view details.</div>

  return (
    <div className="student-card-large">
      <div className="student-card-header">
        <div className="user-avatar large">{student.name.charAt(0)}</div>
        <div>
          <h3>{student.name}</h3>
          <p>{student.id}</p>
        </div>
        <StatusBadge status={student.status} />
      </div>

      <div className="profile-grid">
        <div><strong>Father:</strong> {student.fatherName}</div>
        <div><strong>Class:</strong> {student.className}</div>
        <div><strong>Section:</strong> {student.section}</div>
        <div><strong>Roll No:</strong> {student.rollNumber}</div>
        <div><strong>Email:</strong> {student.email}</div>
        <div><strong>Phone:</strong> {student.phone}</div>
      </div>
    </div>
  )
}

export default StudentCard
