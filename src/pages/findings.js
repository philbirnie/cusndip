import * as React from "react"
import RecommendationWrapper from "../components/recommendation-wrapper"
import Layout from "../components/layout"
import StaticMarkdown from "../components/static-markdown"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/seo"

const FindingsPage = () => {
  const data = useStaticQuery(graphql`
    query FindingsQuery {
      allMarkdownRemark(
        filter: {
          fields: { collection: { eq: "static" } }
          fileAbsolutePath: { regex: "/findings/" }
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
      <SEO title="Findings" />
      <div className="c-container">
        <section className="c-section">
          <h1 className="c-heading c-heading--xxl">Findings</h1>
          <RecommendationWrapper>
            <div className="columns columns--2-1">
              <div className="col">
                <StaticMarkdown
                  collection={allMarkdownRemark.edges}
                  markdownId="findings.0-unified-intro"
                />
              </div>
              <div className="col hidden-mobile">
                <StaticImage
                  src={"../images/findings-main.jpg"}
                  alt="Woman Holding Glasses"
                  width={500}
                  className="margin-top"
                />
              </div>
            </div>
          </RecommendationWrapper>
        </section>
      </div>
      <div className="bg-gray-light">
        <div className="c-container">
          <section className="c-section">
            <RecommendationWrapper>
              <StaticMarkdown
                collection={allMarkdownRemark.edges}
                markdownId="findings.1-individual-findings"
              />
            </RecommendationWrapper>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default FindingsPage
