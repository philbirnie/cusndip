import * as React from "react"
import RecommendationWrapper from "../components/recommendation-wrapper"
import Layout from "../components/layout"
import StaticMarkdown from "../components/static-markdown"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/seo"

const BackgroundLiteraturePage = () => {
  const data = useStaticQuery(graphql`
    query BackgroundLitQuery {
      allMarkdownRemark(
        filter: {
          fields: { collection: { eq: "static" } }
          fileAbsolutePath: { regex: "/background-literature/" }
        }
      ) {
        edges {
          node {
            id
            html
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const { allMarkdownRemark } = data

  return (
    <Layout>
      <SEO title="Background & Literature Review" />
      <div className="c-container">
        <section className="c-section">
          <h1 className="c-heading c-heading--xxl">
            Background &amp; Literature
          </h1>
          <RecommendationWrapper>
            <div className="columns columns--2-1">
              <div className="col">
                <StaticMarkdown
                  collection={allMarkdownRemark.edges}
                  markdownId="background-literature.0-context"
                />
              </div>
              <div className="col hidden-mobile">
                <StaticImage
                  src={"../images/man-walking-campus.jpg"}
                  alt="Young Man Walking on Campus"
                  width={600}
                  className="margin-top"
                />
              </div>
            </div>
          </RecommendationWrapper>
        </section>
      </div>
    </Layout>
  )
}

export default BackgroundLiteraturePage
