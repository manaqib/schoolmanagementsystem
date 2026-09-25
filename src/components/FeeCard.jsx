import StatusBadge from './StatusBadge'

const FeeCard = ({ studentName, className, totalFee, amountPaid, lastPaymentDate, paymentStatus }) => {
  const remaining = totalFee - amountPaid

  return (
    <div className="fee-card">
      <div className="fee-header">
        <div>
          <h4>{studentName}</h4>
          <small>{className}</small>
        </div>
        <StatusBadge status={paymentStatus} />
      </div>
      <div className="fee-grid">
        <div><strong>Total Fee:</strong> PKR {totalFee.toLocaleString()}</div>
        <div><strong>Paid:</strong> PKR {amountPaid.toLocaleString()}</div>
        <div><strong>Remaining:</strong> PKR {remaining.toLocaleString()}</div>
        <div><strong>Last Payment:</strong> {lastPaymentDate}</div>
      </div>
    </div>
  )
}

export default FeeCard
