import { useState } from 'react'
import LeaveTable from '../components/LeaveTable'
import { students } from '../data/students'
import { leavesData } from '../data/leaves'

const LeaveManagement = () => {
  const [leaveRequests, setLeaveRequests] = useState(leavesData)
  const [form, setForm] = useState({
    studentId: '',
    startDate: '',
    endDate: '',
    reason: '',
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const student = students.find((item) => item.id === form.studentId)
    if (!student) return

    const request = {
      id: Date.now(),
      studentId: student.id,
      studentName: student.name,
      className: student.className,
      totalAllowedLeaves: 30,
      leavesTaken: 10,
      remainingLeaves: 20,
      status: 'Pending',
    }

    setLeaveRequests((current) => [request, ...current])
    setForm({ studentId: '', startDate: '', endDate: '', reason: '' })
  }

  return (
    <div className="page-content">
      <div className="page-header">
        <h2>Leave Management</h2>
      </div>

      <LeaveTable
        leaves={leaveRequests}
        students={students}
        onSubmitLeave={handleSubmit}
        form={form}
        onFormChange={handleInputChange}
      />
    </div>
  )
}

export default LeaveManagement
