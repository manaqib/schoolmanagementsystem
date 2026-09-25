import StatusBadge from './StatusBadge'

const TestTable = ({ tests = [], filter = 'All', onFilterChange }) => {
  const filteredTests = filter === 'All' ? tests : tests.filter((test) => test.status === filter)

  return (
    <div>
      <div className="filter-bar">
        {['All', 'Attempted', 'Skipped', 'Upcoming'].map((option) => (
          <button
            key={option}
            className={`filter-btn ${filter === option ? 'active' : ''}`}
            onClick={() => onFilterChange(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Test</th>
              <th>Subject</th>
              <th>Date</th>
              <th>Total Marks</th>
              <th>Obtained</th>
              <th>Percentage</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredTests.map((test) => {
              const percentage = (test.obtainedMarks / test.totalMarks) * 100
              return (
                <tr key={test.id}>
                  <td>{test.testName}</td>
                  <td>{test.subject}</td>
                  <td>{test.date}</td>
                  <td>{test.totalMarks}</td>
                  <td>{test.status === 'Skipped' ? '0' : test.obtainedMarks}</td>
                  <td>{test.status === 'Skipped' ? '0%' : `${percentage.toFixed(0)}%`}</td>
                  <td><StatusBadge status={test.status} /></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TestTable
