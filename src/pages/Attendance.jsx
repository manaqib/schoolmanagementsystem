import { useState } from 'react'
import AttendanceTable from '../components/AttendanceTable'
import { students } from '../data/students'
import { attendanceRecords } from '../data/attendance'

const Attendance = () => {
  const [attendanceMap, setAttendanceMap] = useState(() => {
    const map = {}
    attendanceRecords.forEach((record) => {
      const student = students.find((item) => item.id === record.studentId)
      map[record.studentId] = {
        ...record,
        studentName: student?.name || 'Student',
        className: student?.className || 'N/A',
        section: student?.section || 'N/A',
      }
    })
    return map
  })

  const handleMarkAttendance = (studentId, present) => {
    setAttendanceMap((current) => {
      const row = current[studentId]
      const updatedRow = {
        ...row,
        presentDays: present ? row.presentDays + 1 : row.presentDays,
        absentDays: !present ? row.absentDays + 1 : row.absentDays,
        totalWorkingDays: row.totalWorkingDays,
      }
      return { ...current, [studentId]: updatedRow }
    })
  }

  const rows = Object.values(attendanceMap)

  return (
    <div className="page-content">
      <div className="page-header">
        <h2>Attendance</h2>
      </div>

      <AttendanceTable attendanceRows={rows} onMarkAttendance={handleMarkAttendance} />
    </div>
  )
}

export default Attendance
