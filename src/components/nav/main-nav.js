import * as React from "react"
import { Link } from "gatsby"

const MainNav = ({ backgroundLight }) => {
  const toggleMenu = () => {
    document.body.classList.toggle("nav-active")
  }

  const closeMenu = () => {
    document.body.classList.remove("nav-active")
  }

  const toggleClass = backgroundLight ? "dark" : "light"

  return (
    <>
      <button
        className={`c-nav--main__toggle ${toggleClass}`}
        onClick={toggleMenu}
      >
        <span className="c-nav--main__toggle-bar"></span>
      </button>
      <nav className="c-nav--main">
        <Link to="/" className="c-nav__link" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/#researchers" className="c-nav__link" onClick={closeMenu}>
          Researchers
        </Link>
        <Link to="/findings" className="c-nav__link" onClick={closeMenu}>
          Findings
        </Link>
        <Link to="/recommendations" className="c-nav__link" onClick={closeMenu}>
          Recommendations
        </Link>
      </nav>
    </>
  )
}

export default MainNav
