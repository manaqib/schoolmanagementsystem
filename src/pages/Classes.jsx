import { classData } from '../data/classes'
import { students } from '../data/students'

const Classes = () => {
  return (
    <div className="page-content">
      <div className="page-header">
        <h2>Classes</h2>
      </div>

      <div className="stats-grid compact-grid">
        {classData.map((classItem) => {
          const availableSeats = classItem.capacity - classItem.totalStudents
          return (
            <div key={`${classItem.name}-${classItem.section}`} className="stat-card class-card">
              <div>
                <p className="stat-title">{classItem.name} - Section {classItem.section}</p>
                <h3>{classItem.totalStudents} / {classItem.capacity}</h3>
                <small>Teacher: {classItem.teacher}</small>
                <div className="meta-row">
                  <span>Available Seats: {availableSeats}</span>
                  <span>Total Subjects: {classItem.subjects}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="panel">
        <h3>Class Students</h3>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Student</th>
                <th>Roll No</th>
                <th>Class</th>
                <th>Section</th>
              </tr>
            </thead>
            <tbody>
              {students.slice(0, 10).map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.rollNumber}</td>
                  <td>{student.className}</td>
                  <td>{student.section}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Classes
