import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const InternalPageTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <div className="c-container">
        <section className="c-section">
          <header>
            <h1
              className="c-heading c-heading--xxl margin-bottom"
              itemProp="headline"
            >
              {post.frontmatter.title}
            </h1>
          </header>
          <div className="c-content">
            <section
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
            />
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default InternalPageTemplate

export const pageQuery = graphql`
  query PageBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`
