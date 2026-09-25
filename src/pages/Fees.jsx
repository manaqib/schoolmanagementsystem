import FeeCard from '../components/FeeCard'
import { students } from '../data/students'
import { feesData } from '../data/fees'

const Fees = () => {
  return (
    <div className="page-content">
      <div className="page-header">
        <h2>Fees</h2>
      </div>

      <div className="fee-grid">
        {feesData.map((fee) => {
          const student = students.find((item) => item.id === fee.studentId)
          return (
            <FeeCard
              key={fee.studentId}
              studentName={student?.name || fee.studentId}
              className={student?.className || 'N/A'}
              totalFee={fee.totalFee}
              amountPaid={fee.amountPaid}
              lastPaymentDate={fee.lastPaymentDate}
              paymentStatus={fee.paymentStatus}
            />
          )
        })}
        
      </div>
    </div>
  )
}

export default Fees
