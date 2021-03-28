import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Bio from "./bio"

const ResearcherList = () => {
  const data = useStaticQuery(graphql`
    query ResaercherQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/bios/" } }
        sort: { fields: frontmatter___position, order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              position
              slug
              image
            }
            html
          }
        }
      }
      allFile(
        filter: {
          absolutePath: { regex: "/bio-images/" }
          sourceInstanceName: { eq: "images" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              gatsbyImageData(
                width: 400
                height: 500
                quality: 95
                transformOptions: { cropFocus: NORTH }
              )
            }
          }
        }
      }
    }
  `)

  return (
    <section className="c-section c-researchers__list">
      <div className="c-container c-container--xl">
        <header>
          <h2 className="c-heading c-heading--xl">Researchers</h2>
        </header>
        <ul>
          {data.allMarkdownRemark.edges.map(node => {
            const frontmatter = node.node.frontmatter || {}
            const key = frontmatter.slug

            /** Pluck image if available **/
            const image = data.allFile.edges.filter(n =>
              n.node.base.includes(frontmatter.image)
            )

            return (
              <li
                key={key}
                className={`researcher-bg--position-${frontmatter.position}`}
              >
                <Bio
                  title={frontmatter.title}
                  html={node.node.html}
                  position={frontmatter.position}
                  image={image[0] ? image[0].node.childImageSharp : null}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default ResearcherList
