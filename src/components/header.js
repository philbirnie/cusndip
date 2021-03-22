import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import MainNav from "./nav/main-nav";

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          site {
            siteMetadata {
              title
              subtitle
            }
          }
        }
      `}
      render={data => (
        <header className="c-page-header">
          <h1>{data.site.siteMetadata.title}</h1>
          <h2>{data.site.siteMetadata.subtitle}</h2>
          <MainNav />
        </header>
      )}
    />
  )
}

export default Header;
