import { useMemo, useState } from 'react'
import StudentTable from '../components/StudentTable'
import SearchBar from '../components/SearchBar'
import StudentDetails from '../components/StudentDetails'
import { students } from '../data/students'
import { attendanceRecords } from '../data/attendance'
import { testsData } from '../data/tests'
import { feesData } from '../data/fees'
import { leavesData } from '../data/leaves'

const Students = ({ selectedStudent, onViewStudent }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [classFilter, setClassFilter] = useState('All')
  const [sectionFilter, setSectionFilter] = useState('All')
  const [statusFilter, setStatusFilter] = useState('All')

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesText =
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.fatherName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.className.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.section.toLowerCase().includes(searchTerm.toLowerCase()) ||
        String(student.rollNumber).includes(searchTerm)

      const matchesClass = classFilter === 'All' || student.className === classFilter
      const matchesSection = sectionFilter === 'All' || student.section === sectionFilter
      const matchesStatus = statusFilter === 'All' || student.status === statusFilter

      return matchesText && matchesClass && matchesSection && matchesStatus
    })
  }, [searchTerm, classFilter, sectionFilter, statusFilter])

  const studentAttendance = attendanceRecords.find((record) => record.studentId === selectedStudent?.id)
  const studentTests = testsData.filter((test) => test.studentId === selectedStudent?.id)
  const studentFees = feesData.find((fee) => fee.studentId === selectedStudent?.id)
  const studentLeaves = leavesData.find((leave) => leave.studentId === selectedStudent?.id)

  return (
    <div className="page-content">
      <div className="page-header">
        <h2>Students</h2>
        <button className="primary-btn">Add New Student</button>
      </div>

      <div className="toolbar">
        <SearchBar value={searchTerm} onChange={setSearchTerm} placeholder="Search by name, ID, class, section, roll number..." />
        <div className="filter-row">
          <select value={classFilter} onChange={(event) => setClassFilter(event.target.value)}>
            <option value="All">All Classes</option>
            {[...new Set(students.map((student) => student.className))].map((className) => (
              <option key={className} value={className}>{className}</option>
            ))}
          </select>

          <select value={sectionFilter} onChange={(event) => setSectionFilter(event.target.value)}>
            <option value="All">All Sections</option>
            {[...new Set(students.map((student) => student.section))].map((section) => (
              <option key={section} value={section}>{section}</option>
            ))}
          </select>

          <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
            <option value="All">All Status</option>
            {[...new Set(students.map((student) => student.status))].map((status) => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>
      </div>

      <StudentTable
        students={filteredStudents}
        onViewStudent={onViewStudent}
        onEditStudent={() => {}}
        onDeleteStudent={() => {}}
      />

      {selectedStudent && (
        <div className="panel">
          <StudentDetails
            student={selectedStudent}
            attendanceRecord={studentAttendance}
            studentTests={studentTests}
            studentFees={studentFees}
            studentResults={null}
            studentLeaves={studentLeaves}
          />
        </div>
      )}
    </div>
  )
}

export default Students
