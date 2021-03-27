import * as React from "react";
import { Link } from "gatsby"

const MainNav = () => {
  return (
    <nav className="c-nav--main">
      <Link to="/" className="c-nav__link">Home</Link>
      <Link to="/researchers" className="c-nav__link">Researchers</Link>
      <Link to="/findings" className="c-nav__link">Findings</Link>
      <Link to="/recommendations" className="c-nav__link">Recommendations</Link>
    </nav>
  )
}

export default MainNav;
