const Login = ({ onLogin, loginForm, setLoginForm }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    onLogin(loginForm)
  }

  return (
    <div className="login-screen">
      <div className="login-card">
        <div className="login-brand">
          <div className="logo-box large">S</div>
          <h2>School Management</h2>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <label>
            Username
            <input
              type="text"
              value={loginForm.username}
              onChange={(event) => setLoginForm({ ...loginForm, username: event.target.value })}
              placeholder="admin"
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={loginForm.password}
              onChange={(event) => setLoginForm({ ...loginForm, password: event.target.value })}
              placeholder="admin123"
            />
          </label>

          <button type="submit" className="primary-btn wide">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
