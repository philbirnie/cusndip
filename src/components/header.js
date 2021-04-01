import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import MainNav from "./nav/main-nav"
import { StaticImage } from "gatsby-plugin-image"
import { useEffect, useRef, useState } from "react"

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeadingQuery {
      site {
        siteMetadata {
          title
          subtitle
        }
      }
    }
  `)

  const [overMain, setOverMain] = useState(false)

  const observer = useRef()

  useEffect(() => {
    function startObserve() {
      const callback = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.intersectionRatio === 1) {
            setOverMain(false)
          } else if (!entry.isIntersecting) {
            setOverMain(true)
          }
        })
      }

      const option = {
        threshold: [0.2, 1.0],
      }

      observer.current = new IntersectionObserver(callback, option)

      const target = document.querySelector(".c-page-header")
      if (target) {
        observer.current.observe(target)
      }

      return function cleanup() {
        observer.current.unobserve(target)
      }
    }

    startObserve()
  }, [])

  return (
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
      <MainNav backgroundLight={overMain} />
    </header>
  )
}

export default Header
