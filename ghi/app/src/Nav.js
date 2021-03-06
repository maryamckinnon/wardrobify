import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Wardrobify</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">Shoes</a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <NavLink className="dropdown-item" aria-current="page" to="/shoes/">Shoes</NavLink>
              <NavLink className="nav-link" aria-current="page" to="/shoes/new/">Add a shoe</NavLink>
            </ul>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">Hats</a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <NavLink className="dropdown-item" aria-current="page" to="/hats/">Hats</NavLink>
              <NavLink className="nav-link" aria-current="page" to="/hats/new/">Add a hat</NavLink>
            </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
