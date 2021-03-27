import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import MainNav from "./nav/main-nav"
import { StaticImage } from "gatsby-plugin-image"

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
          <div className="c-page-header__content">
            <h1 className="c-heading c-heading--xl">
              {data.site.siteMetadata.title}
            </h1>
            <h2 className="c-heading c-heading--md">
              {data.site.siteMetadata.subtitle}
            </h2>
          </div>
          <StaticImage
            src="../images/main-home.jpg"
            alt="Main Home Banner"
            loading="eager"
            width={1600}
            role="banner"
            className="c-page-header__banner"
          />
          <MainNav />
        </header>
      )}
    />
  )
}

export default Header
