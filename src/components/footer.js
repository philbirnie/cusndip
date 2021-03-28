import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import FooterNav from "./nav/nav-foot"

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
          <div className="c-container">
            <FooterNav />
            <p className="c-copyright">
              Copyright &copy;{new Date().getFullYear()}.{" "}
              {data.site.siteMetadata.title} - {data.site.siteMetadata.subtitle}
            </p>
          </div>
        </footer>
      )}
    />
  )
}

export default Footer
