const Header = ({
  schoolName,
  user,
  isLoggedIn,
  onLogout,
  onToggleSidebar,
  sidebarOpen,
  notifications,
  notificationsOpen,
  onToggleNotifications,
  profileMenuOpen,
  onToggleProfile,
}) => {
  return (
    <header className="top-header">
      <div className="header-left">
        <button className="sidebar-toggle" onClick={onToggleSidebar} aria-label="Toggle sidebar">
          ☰
        </button>
        <div className="logo-box">S</div>
        <div>
          <div className="brand-name">{schoolName}</div>
        </div>
      </div>

      <div className="header-right">
        <div className="header-actions">
          <button
            className="icon-btn"
            aria-label="Notifications"
            onClick={onToggleNotifications}
          >
            🔔
          </button>

          {notificationsOpen && (
            <div className="header-dropdown notification-menu">
              <div className="dropdown-header">Notifications</div>
              {notifications.length ? (
                notifications.map((item) => (
                  <div key={item.id} className="notification-item">
                    <div className="notification-dot" />
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.message}</p>
                    </div>
                    <span>{item.time}</span>
                  </div>
                ))
              ) : (
                <div className="dropdown-empty">No new notifications</div>
              )}
            </div>
          )}
        </div>

        <div className="header-actions">
          <button className="icon-btn" aria-label="Profile" onClick={onToggleProfile}>
            👤
          </button>

          {profileMenuOpen && (
            <div className="header-dropdown profile-menu">
              <div className="profile-menu-header">
                <span className="user-avatar">{user?.name?.charAt(0) || 'A'}</span>
                <div>
                  <strong>{user?.name || 'Admin User'}</strong>
                  <small>School Admin</small>
                </div>
              </div>
              <button className="profile-item">Profile</button>
              <button className="profile-item">Settings</button>
              <button className="profile-item danger" onClick={onLogout}>Logout</button>
            </div>
          )}
        </div>

        {isLoggedIn ? (
          <>
            <div className="user-pill">
              <span className="user-avatar">{user?.name?.charAt(0) || 'A'}</span>
              <span>{user?.name || 'Admin'}</span>
            </div>
            <button className="logout-btn" onClick={onLogout}>Logout</button>
          </>
        ) : (
          <button className="login-btn">Login</button>
        )}
      </div>
    </header>
  )
}

export default Header
