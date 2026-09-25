import { useState } from 'react'
import TestTable from '../components/TestTable'
import { testsData } from '../data/tests'

const Tests = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const totals = {
    total: testsData.length,
    attempted: testsData.filter((test) => test.status === 'Attempted').length,
    skipped: testsData.filter((test) => test.status === 'Skipped').length,
    upcoming: testsData.filter((test) => test.status === 'Upcoming').length,
  }

  return (
    <div className="page-content">
      <div className="page-header">
        <h2>Tests & Exams</h2>
      </div>

      <div className="stats-grid compact-grid">
        <div className="stat-card"><p className="stat-title">Total Tests</p><h3>{totals.total}</h3></div>
        <div className="stat-card"><p className="stat-title">Attempted</p><h3>{totals.attempted}</h3></div>
        <div className="stat-card"><p className="stat-title">Skipped</p><h3>{totals.skipped}</h3></div>
        <div className="stat-card"><p className="stat-title">Upcoming</p><h3>{totals.upcoming}</h3></div>
      </div>

      <div className="panel">
        <TestTable tests={testsData} filter={activeFilter} onFilterChange={setActiveFilter} />
      </div>
    </div>
  )
}

export default Tests
