const Settings = () => {
  return (
    <div className="page-content">
      <div className="page-header">
        <h2>Settings</h2>
      </div>

      <div className="panel">
        <h3>School Configuration</h3>
        <div className="form-grid">
          <label>
            School Name
            <input type="text" defaultValue="Bright Future Academy" />
          </label>
          <label>
            Academic Year
            <input type="text" defaultValue="2026-2027" />
          </label>
          <label>
            Contact Email
            <input type="email" defaultValue="admin@brightfuture.edu" />
          </label>
          <label>
            Attendance Threshold
            <input type="number" defaultValue="75" />
          </label>
        </div>
      </div>
    </div>
  )
}

export default Settings
