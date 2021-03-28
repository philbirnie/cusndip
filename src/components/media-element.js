import * as React from "react"
import Link from "gatsby-link"

const MediaElement = ({ heading, content, url, additionalClasses }) => {
  const classNames = `c-section ${additionalClasses ?? ""}`

  return (
    <>
      <section className={classNames}>
        <div className="c-container">
          <header>
            <h2 className="c-section__heading c- c-heading--lg">{heading}</h2>
          </header>
          <div
            className="c-section__content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          {url && (
            <Link to={url} className="c-btn">
              More
            </Link>
          )}
        </div>
      </section>
    </>
  )
}

export default MediaElement
