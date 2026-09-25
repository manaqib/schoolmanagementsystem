const StatCard = ({ title, value, description, icon, tone = 'primary' }) => {
  return (
    <div className={`stat-card ${tone}`}>
      <div className="stat-icon">{icon}</div>
      <div>
        <p className="stat-title">{title}</p>
        <h3>{value}</h3>
        <small>{description}</small>
      </div>
    </div>
  )
}

export default StatCard
