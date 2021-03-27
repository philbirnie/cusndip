import * as React from "react";
import { Link } from "gatsby"

const FooterNav = () => {
  return (
    <nav className="c-nav--footer">
      <Link to="/" className="c-nav__link">Home</Link>
      <Link to="/framework" className="c-nav__link">Framework</Link>
      <Link to="/background" className="c-nav__link">Background</Link>
      <Link to="/references" className="c-nav__link">References</Link>
    </nav>
  )
}

export default FooterNav;
