import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Purpose = () => {
  const data = useStaticQuery(graphql`
    query PurposeQuery {
      markdownRemark(fields: { slug: { eq: "/purpose/" } }) {
        id
        frontmatter {
          title
        }
        html
      }
    }
  `)

  return (
    <section className="c-section bg-gray-light">
      <div className="c-container">
        <h2 className="c-heading--lg">
          {data.markdownRemark.frontmatter.title}
        </h2>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </div>
    </section>
  )
}

export default Purpose
