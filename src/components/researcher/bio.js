import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Bio = ({ title, position, html, image }) => {
  const className = `c-bio c-bio--position-${position}`

  const imageEl = image && getImage(image)

  return (
    <section className={className}>
      <h4 className="c-heading c-heading--md c-bio__name">{title}</h4>
      {imageEl && <GatsbyImage image={imageEl} alt={`${title} Bio Photo`} />}
      <div
        className="c-bio__content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </section>
  )
}

export default Bio
