import { useMemo, useState } from 'react'
import ExamSchedule from '../components/ExamSchedule'
import { examSchedule } from '../data/exams'

const ExamSchedulePage = () => {
  const [classFilter, setClassFilter] = useState('All')
  const [subjectFilter, setSubjectFilter] = useState('All')
  const [dateFilter, setDateFilter] = useState('All')

  const classes = useMemo(() => ['All', ...new Set(examSchedule.map((item) => item.className))], [])
  const subjects = useMemo(() => ['All', ...new Set(examSchedule.map((item) => item.subject))], [])
  const dates = useMemo(() => ['All', ...new Set(examSchedule.map((item) => item.date))], [])

  return (
    <div className="page-content">
      <div className="page-header">
        <h2>Exam Schedule</h2>
      </div>

      <div className="toolbar filter-row">
        <select value={classFilter} onChange={(event) => setClassFilter(event.target.value)}>
          {classes.map((item) => (
            <option key={item} value={item}>{item === 'All' ? 'All Classes' : item}</option>
          ))}
        </select>

        <select value={subjectFilter} onChange={(event) => setSubjectFilter(event.target.value)}>
          {subjects.map((item) => (
            <option key={item} value={item}>{item === 'All' ? 'All Subjects' : item}</option>
          ))}
        </select>

        <select value={dateFilter} onChange={(event) => setDateFilter(event.target.value)}>
          {dates.map((item) => (
            <option key={item} value={item}>{item === 'All' ? 'All Dates' : item}</option>
          ))}
        </select>
      </div>

      <div className="panel">
        <ExamSchedule
          exams={examSchedule}
          selectedClass={classFilter}
          selectedSubject={subjectFilter}
          selectedDate={dateFilter}
        />
      </div>
    </div>
  )
}

export default ExamSchedulePage
