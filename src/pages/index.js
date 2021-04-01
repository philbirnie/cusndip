import * as React from "react"
import ResearcherList from "../components/researcher/list"

import Layout from "../components/layout"
import Purpose from "../components/content/purpose"
import MediaElement from "../components/media-element"
import SEO from "../components/seo"

import { useStaticQuery, graphql } from "gatsby"

const SiteIndex = ({ data }) => {
  return (
    <Layout useFullHeader={true}>
      <SEO title="Home" />
      <Purpose />
      <ResearcherList />
      {data.allMarkdownRemark.edges.map(node => {
        const frontmatter = node.node.frontmatter || {}
        const key = node.node.fields.slug || ""

        return (
          <MediaElement
            heading={frontmatter.title}
            content={node.node.fields.excerptHTML}
            additionalClasses={`c-content c-section--${key.replace(/\//, "")}`}
            url={key}
            key={key}
          />
        )
      })}
    </Layout>
  )
}

export default SiteIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { slug: { in: ["/findings/", "/recommendations/"] } } }
      sort: { fields: fields___slug, order: ASC }
    ) {
      edges {
        node {
          id
          fields {
            excerptHTML
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
