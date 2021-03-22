import * as React from "react";
import { Link } from "gatsby"

const MainNav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/">Researchers</Link>
      <Link to="/">Findings</Link>
      <Link to="/">Recommendations</Link>
    </nav>
  )
}

export default MainNav;
