const ExamSchedule = ({ exams = [], selectedClass = 'All', selectedSubject = 'All', selectedDate = 'All' }) => {
  const filteredExams = exams.filter((exam) => {
    const classMatch = selectedClass === 'All' || exam.className === selectedClass
    const subjectMatch = selectedSubject === 'All' || exam.subject === selectedSubject
    const dateMatch = selectedDate === 'All' || exam.date === selectedDate
    return classMatch && subjectMatch && dateMatch
  })

  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Exam Name</th>
            <th>Subject</th>
            <th>Class</th>
            <th>Date</th>
            <th>Start</th>
            <th>End</th>
            <th>Room</th>
          </tr>
        </thead>
        <tbody>
          {filteredExams.map((exam) => {
            const dateValue = new Date(exam.date)
            const isUpcoming = dateValue >= new Date()
            return (
              <tr key={exam.id} className={isUpcoming ? 'upcoming-row' : ''}>
                <td>{exam.examName}{isUpcoming ? ' • Upcoming' : ''}</td>
                <td>{exam.subject}</td>
                <td>{exam.className}</td>
                <td>{exam.date}</td>
                <td>{exam.startTime}</td>
                <td>{exam.endTime}</td>
                <td>{exam.room}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ExamSchedule
