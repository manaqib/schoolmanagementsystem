import StatusBadge from './StatusBadge'

const LeaveTable = ({ leaves = [], students = [], onSubmitLeave, form, onFormChange }) => {
  return (
    <div className="leave-layout">
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Student</th>
              <th>Class</th>
              <th>Total Allowed</th>
              <th>Leaves Taken</th>
              <th>Remaining</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {leaves.map((leave) => (
              <tr key={leave.id}>
                <td>{leave.studentName}</td>
                <td>{leave.className}</td>
                <td>{leave.totalAllowedLeaves}</td>
                <td>{leave.leavesTaken}</td>
                <td>{leave.remainingLeaves}</td>
                <td><StatusBadge status={leave.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <form className="leave-form" onSubmit={onSubmitLeave}>
        <h3>Request Leave</h3>

        <label>
          Student
          <select name="studentId" value={form.studentId} onChange={onFormChange}>
            <option value="">Select student</option>
            {students.map((student) => (
              <option key={student.id} value={student.id}>{student.name}</option>
            ))}
          </select>
        </label>

        <label>
          Start Date
          <input type="date" name="startDate" value={form.startDate} onChange={onFormChange} />
        </label>

        <label>
          End Date
          <input type="date" name="endDate" value={form.endDate} onChange={onFormChange} />
        </label>

        <label>
          Reason
          <textarea name="reason" value={form.reason} onChange={onFormChange} rows="3" />
        </label>

        <button type="submit" className="primary-btn">Submit Leave</button>
      </form>
    </div>
  )
}

export default LeaveTable
