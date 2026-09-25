import StatusBadge from './StatusBadge'

const ResultTable = ({ results = [] }) => {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Class</th>
            <th>Exam</th>
            <th>Total</th>
            <th>Obtained</th>
            <th>Percentage</th>
            <th>Grade</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => {
            const percentage = (result.obtainedMarks / result.totalMarks) * 100
            let grade = 'F'
            if (percentage >= 90) grade = 'A+'
            else if (percentage >= 80) grade = 'A'
            else if (percentage >= 70) grade = 'B'
            else if (percentage >= 60) grade = 'C'
            else if (percentage >= 50) grade = 'D'

            const resultStatus = percentage >= 40 ? 'Pass' : 'Fail'

            return (
              <tr key={`${result.studentId}-${result.exam}`}>
                <td>{result.studentName}</td>
                <td>{result.className}</td>
                <td>{result.exam}</td>
                <td>{result.totalMarks}</td>
                <td>{result.obtainedMarks}</td>
                <td>{percentage.toFixed(1)}%</td>
                <td>{grade}</td>
                <td><StatusBadge status={resultStatus} /></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ResultTable
