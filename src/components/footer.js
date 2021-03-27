import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import FooterNav from "./nav/nav-foot";

const Footer = () => {
  return (
    <StaticQuery
      query={graphql`
        query FooterQuery {
          site {
            siteMetadata {
              title
              subtitle
            }
          }
        }
      `}
      render={data => (
        <footer className="c-page-footer">
          <FooterNav />
          <p>Copyright &copy;{new Date().getFullYear()}. {data.site.siteMetadata.title} - {data.site.siteMetadata.subtitle}</p>
        </footer>
      )}
    />
  )
}

export default Footer;
