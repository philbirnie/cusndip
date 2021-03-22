import * as React from "react"
import { StaticQuery, graphql } from "gatsby";
import Bio from "./bio";

const ResearcherList = () => {
  return (
    <StaticQuery
      query={graphql`
        query ResaercherQuery {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  title
                  position
                  slug
                }
                html
              }
            }
          }
        }
      `}
      render={data => (
        <section className="c-researchers__list">
          <ul>
            {
              data.allMarkdownRemark.edges.map((node) => {
                const frontmatter = node.node.frontmatter || {};
                const key = frontmatter.slug;
                return<li key={key}>
                  <Bio
                    title={frontmatter.title}
                    html={node.node.html}
                    position={frontmatter.position}
                  />
                </li>
              })}
          </ul>
        </section>
      )
      }
    />
  );
}

export default ResearcherList;
