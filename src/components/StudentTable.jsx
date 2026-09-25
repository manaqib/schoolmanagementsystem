import StatusBadge from './StatusBadge'

const StudentTable = ({ students = [], onViewStudent, onEditStudent, onDeleteStudent }) => {
  if (!students.length) {
    return <div className="empty-state">No students found</div>
  }

  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Class</th>
            <th>Section</th>
            <th>Roll No</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.className}</td>
              <td>{student.section}</td>
              <td>{student.rollNumber}</td>
              <td><StatusBadge status={student.status} /></td>
              <td className="action-col">
                <button className="small-btn primary" onClick={() => onViewStudent(student)}>View</button>
                <button className="small-btn secondary" onClick={() => onEditStudent(student)}>Edit</button>
                <button className="small-btn danger" onClick={() => onDeleteStudent(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StudentTable
