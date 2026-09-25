const StudentDetails = ({ student, attendanceRecord, studentTests, studentFees, studentResults, studentLeaves }) => {
  if (!student) return <div className="empty-state">No student selected.</div>

  const attendance = attendanceRecord
    ? (attendanceRecord.presentDays / attendanceRecord.totalWorkingDays) * 100
    : 0

  return (
    <div className="student-details">
      <h3>{student.name} - Profile</h3>

      <div className="detail-tabs">
        <div className="detail-section">
          <h4>Personal Information</h4>
          <div className="detail-grid">
            <div><strong>Name:</strong> {student.name}</div>
            <div><strong>Father&apos;s Name:</strong> {student.fatherName}</div>
            <div><strong>Date of Birth:</strong> {student.dob}</div>
            <div><strong>Gender:</strong> {student.gender}</div>
            <div><strong>Phone:</strong> {student.phone}</div>
            <div><strong>Email:</strong> {student.email}</div>
            <div className="full-span"><strong>Address:</strong> {student.address}</div>
          </div>
        </div>

        <div className="detail-section">
          <h4>Enrollment</h4>
          <div className="detail-grid">
            <div><strong>Orientation Date:</strong> {student.orientationDate}</div>
            <div><strong>Joining Date:</strong> {student.joiningDate}</div>
            <div><strong>Current Class:</strong> {student.className}</div>
            <div><strong>Section:</strong> {student.section}</div>
            <div><strong>Roll Number:</strong> {student.rollNumber}</div>
            <div><strong>Status:</strong> {student.status}</div>
            <div><strong>Total Class Strength:</strong> {student.totalStrength}</div>
            <div><strong>Class Teacher:</strong> {student.classTeacher}</div>
          </div>
        </div>

        <div className="detail-section">
          <h4>Attendance</h4>
          <div className="detail-grid">
            <div><strong>Present:</strong> {attendanceRecord?.presentDays || 0}</div>
            <div><strong>Absent:</strong> {attendanceRecord?.absentDays || 0}</div>
            <div><strong>Attendance:</strong> {attendance.toFixed(2)}%</div>
            <div><strong>Required:</strong> {attendanceRecord?.requiredAttendance || 75}%</div>
          </div>
        </div>

        <div className="detail-section">
          <h4>Subjects</h4>
          <ul className="pill-list">
            {student.subjects?.map((subject) => (
              <li key={subject}>{subject}</li>
            ))}
          </ul>
        </div>

        <div className="detail-section">
          <h4>Tests</h4>
          <div className="detail-grid compact">
            {studentTests?.slice(0, 3).map((test) => (
              <div key={test.id}>
                <strong>{test.testName}</strong>: {test.obtainedMarks}/{test.totalMarks}
              </div>
            ))}
          </div>
        </div>

        <div className="detail-section">
          <h4>Fees</h4>
          <div className="detail-grid compact">
            <div><strong>Total Fee:</strong> PKR {studentFees?.totalFee?.toLocaleString() || 0}</div>
            <div><strong>Paid:</strong> PKR {studentFees?.amountPaid?.toLocaleString() || 0}</div>
            <div><strong>Remaining:</strong> PKR {(studentFees?.totalFee || 0) - (studentFees?.amountPaid || 0)}</div>
          </div>
        </div>

        <div className="detail-section">
          <h4>Leaves</h4>
          <div className="detail-grid compact">
            <div><strong>Leaves Taken:</strong> {studentLeaves?.leavesTaken || 0}</div>
            <div><strong>Remaining:</strong> {studentLeaves?.remainingLeaves || 0}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentDetails
