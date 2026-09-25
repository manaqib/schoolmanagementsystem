const StatusBadge = ({ status }) => {
  const safeStatus = status || 'Unknown'
  const tone =
    safeStatus.toLowerCase().includes('active') || safeStatus.toLowerCase().includes('paid') || safeStatus.toLowerCase().includes('eligible') || safeStatus.toLowerCase().includes('approved')
      ? 'success'
      : safeStatus.toLowerCase().includes('pending') || safeStatus.toLowerCase().includes('upcoming') || safeStatus.toLowerCase().includes('partially') || safeStatus.toLowerCase().includes('shortage')
        ? 'warning'
        : safeStatus.toLowerCase().includes('failed') || safeStatus.toLowerCase().includes('rejected') || safeStatus.toLowerCase().includes('skip') || safeStatus.toLowerCase().includes('absent')
          ? 'danger'
          : 'default'

  return <span className={`status-badge ${tone}`}>{safeStatus}</span>
}

export default StatusBadge
