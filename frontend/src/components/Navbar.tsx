
function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <a className="logo" href="/" aria-label="TipJar home">
        <div className="logo-icon" aria-hidden="true">⚡</div>

        <div className="logo-text">
          SANGIRA<span>.rw</span>
        </div>
      </a>

      <div className="nav-links">
        <a href="#creators">Creators</a>
        <a href="#dashboard">Dashboard</a>
      </div>

      <button className="login-btn" type="button">
        Creator Login
      </button>
    </nav>
  )
}

export default Navbar