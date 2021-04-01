import * as React from "react"
import RecommendationWrapper from "../components/recommendation-wrapper"
import Layout from "../components/layout"
import StaticMarkdown from "../components/static-markdown"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const ConceptualFrameworkPage = () => {
  const data = useStaticQuery(graphql`
    query ConceptualQuery {
      allMarkdownRemark(
        filter: {
          fields: { collection: { eq: "static" } }
          fileAbsolutePath: { regex: "/conceptual-framework/" }
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
      <div className="c-container">
        <section className="c-section">
          <h1 className="c-heading c-heading--xxl">Conceptual Framework</h1>
          <RecommendationWrapper>
            <div className="columns columns--2-1">
              <div className="col">
                <StaticMarkdown
                  collection={allMarkdownRemark.edges}
                  markdownId="conceptual-framework.0-frameworks"
                />
              </div>
              <div className="col hidden-mobile">
                <StaticImage
                  src={"../images/lifting-yarn-feat.jpg"}
                  alt="Students Lifting Yarn"
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

export default ConceptualFrameworkPage
