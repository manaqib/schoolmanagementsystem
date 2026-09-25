import StatCard from '../components/StatCard'
import StudentCard from '../components/StudentCard'
import ResultTable from '../components/ResultTable'
import TestTable from '../components/TestTable'
import { students } from '../data/students'
import { classData } from '../data/classes'
import { testsData } from '../data/tests'
import { feesData } from '../data/fees'
import { resultsData } from '../data/results'
import { attendanceRecords } from '../data/attendance'

const Dashboard = ({ selectedStudent, setSelectedSection }) => {
  const totalStudents = students.length
  const totalClasses = classData.length
  const totalTeachers = new Set(classData.map((item) => item.teacher)).size
  const totalSubjects = 8
  const todayAttendance = attendanceRecords.filter((item) => item.presentDays >= 150).length
  const lowAttendance = attendanceRecords.filter((item) => (item.presentDays / item.totalWorkingDays) * 100 < 75).length
  const pendingFees = feesData.filter((item) => item.amountPaid < item.totalFee).length
  const upcomingExams = testsData.filter((test) => test.status === 'Upcoming').length

  

  const stats = [
    { title: 'Total Students', value: totalStudents, description: 'Currently enrolled', icon: '🎓', tone: 'primary' },
    { title: 'Total Classes', value: totalClasses, description: 'Active sections', icon: '🏫', tone: 'secondary' },
    { title: 'Total Teachers', value: totalTeachers, description: 'Teaching staff', icon: '👩‍🏫', tone: 'success' },
    { title: 'Total Subjects', value: totalSubjects, description: 'Core subjects', icon: '📘', tone: 'warning' },
    { title: "Today's Attendance", value: `${todayAttendance}/${totalStudents}`, description: 'Present today', icon: '✅', tone: 'success' },
    { title: 'Students with Low Attendance', value: lowAttendance, description: 'Need attention', icon: '⚠️', tone: 'warning' },
    { title: 'Pending Fees', value: pendingFees, description: 'Awaiting payment', icon: '💰', tone: 'danger' },
    { title: 'Upcoming Exams', value: upcomingExams, description: 'Scheduled tests', icon: '📝', tone: 'primary' },
  ]

  return (
    <div className="page-content">
      <div className="page-header">
        <h2>Dashboard Overview</h2>
        <button className="primary-btn" onClick={() => setSelectedSection('Students')}>Manage Students</button>
      </div>

      <div className="stats-grid">
        {stats.map((card) => (
          <StatCard
            key={card.title}
            title={card.title}
            value={card.value}
            description={card.description}
            icon={card.icon}
            tone={card.tone}
          />
        ))}
      </div>

      <div className="two-col-layout">
        <div className="panel">
          <h3>Student Spotlight</h3>
          <StudentCard student={selectedStudent} />
        </div>
        <div className="panel">
          <h3>Recent Results</h3>
          <ResultTable results={resultsData.slice(0, 4)} />
        </div>
      </div>

      <div className="panel">
        <h3>Upcoming Tests</h3>
        <TestTable tests={testsData.filter((test) => test.status !== 'Skipped')} filter="All" onFilterChange={() => {}} />
      </div>
    </div>
  )
}

export default Dashboard
