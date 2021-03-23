import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";

const Purpose = () => {
  const data = useStaticQuery(graphql`query PurposeQuery {
    markdownRemark(fields: {slug: {eq: "/purpose/"}}) {
      id
      frontmatter {
        title
      }
      html
    }
  }`
  )

  return (
    <section>
      <h2>{data.markdownRemark.frontmatter.title}</h2>
      <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
    </section>
  )
};

export default Purpose;
