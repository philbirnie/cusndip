import * as React from "react"
import RecommendationWrapper from "../components/recommendation-wrapper"
import Layout from "../components/layout"
import StaticMarkdown from "../components/static-markdown"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const RecommendationsPage = () => {
  const data = useStaticQuery(graphql`
    query RecommendationsQuery {
      allMarkdownRemark(
        filter: {
          fields: { collection: { eq: "static" } }
          fileAbsolutePath: { regex: "/recommendations/" }
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
          <h1 className="c-heading c-heading--xxl">Recommendations</h1>
          <RecommendationWrapper className="c-section">
            <StaticMarkdown
              collection={allMarkdownRemark.edges}
              markdownId="recommendations.0-unified-intro"
            />
          </RecommendationWrapper>
          <RecommendationWrapper className="">
            <div className="columns columns--2-1">
              <div className="col">
                <StaticMarkdown
                  collection={allMarkdownRemark.edges}
                  markdownId="recommendations.1-mental-health"
                />
              </div>
              <div className="col hidden-mobile">
                <StaticImage
                  src={"../images/students-yoga-oval.jpg"}
                  alt="Students Doing Yoga on Oval"
                  width={500}
                  className="margin-top"
                />
              </div>
            </div>
          </RecommendationWrapper>
          <RecommendationWrapper className="">
            <div className="columns columns--2-1">
              <div className="col">
                <StaticMarkdown
                  collection={allMarkdownRemark.edges}
                  markdownId="recommendations.2-communication-transparency"
                />
              </div>
              <div className="col hidden-mobile">
                <StaticImage
                  src={"../images/communication-transparency.jpg"}
                  alt="Student and Professor talking"
                  width={500}
                  className="margin-top"
                />
              </div>
            </div>
          </RecommendationWrapper>
          <RecommendationWrapper className="">
            <div className="columns columns--2-1">
              <div className="col">
                <StaticMarkdown
                  collection={allMarkdownRemark.edges}
                  markdownId="recommendations.3-major-career-path-support"
                />
              </div>
              <div className="col hidden-mobile">
                <StaticImage
                  src={"../images/major-career-support.jpg"}
                  alt="Eddie George speaking to class"
                  width={500}
                  className="margin-top"
                />
              </div>
            </div>
          </RecommendationWrapper>
          <RecommendationWrapper className="">
            <StaticMarkdown
              collection={allMarkdownRemark.edges}
              markdownId="recommendations.4-mentorship"
            />
          </RecommendationWrapper>
        </section>
      </div>

      <div className="researcher-bg--position-1">
        <div className="c-container">
          <RecommendationWrapper className="c-section">
            <StaticImage
              src={"../images/graduation.jpg"}
              alt="Family at Graduation"
              width={500}
              className="float-right hidden-mobile"
            />
            <StaticMarkdown
              collection={allMarkdownRemark.edges}
              markdownId="recommendations.10-black-campus-change"
            />
          </RecommendationWrapper>
        </div>
      </div>

      <div className="c-container">
        <RecommendationWrapper className="c-section">
          <StaticMarkdown
            collection={allMarkdownRemark.edges}
            markdownId="recommendations.20-black-men-3rd-4th"
          />
        </RecommendationWrapper>
      </div>

      <div className="researcher-bg--position-3">
        <div className="c-container">
          <RecommendationWrapper className="c-section text-color-white">
            <StaticMarkdown
              collection={allMarkdownRemark.edges}
              markdownId="recommendations.30-conclusion"
            />
          </RecommendationWrapper>
        </div>
      </div>
    </Layout>
  )
}

export default RecommendationsPage
