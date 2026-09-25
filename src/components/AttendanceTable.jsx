import StatusBadge from './StatusBadge'

const AttendanceTable = ({ attendanceRows, onMarkAttendance }) => {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Class</th>
            <th>Section</th>
            <th>Present</th>
            <th>Absent</th>
            <th>Attendance</th>
            <th>Required</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {attendanceRows.map((row) => {
            const percentage = (row.present / row.totalWorkingDays) * 100
            const eligible = percentage >= row.requiredAttendance

            return (
              <tr key={row.studentId}>
                <td>{row.studentName}</td>
                <td>{row.className}</td>
                <td>{row.section}</td>
                <td>{row.present}</td>
                <td>{row.absent}</td>
                <td>{percentage.toFixed(2)}%</td>
                <td>{row.requiredAttendance}%</td>
                <td>{eligible ? <StatusBadge status="Eligible" /> : <StatusBadge status="Attendance Shortage" />}</td>
                <td>
                  <div className="inline-actions">
                    <button className="small-btn primary" onClick={() => onMarkAttendance(row.studentId, true)}>Present</button>
                    <button className="small-btn danger" onClick={() => onMarkAttendance(row.studentId, false)}>Absent</button>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default AttendanceTable
