import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";
import Bio from "./bio";

const ResearcherList = () => {
  const data = useStaticQuery(graphql`
          query ResaercherQuery {
          allMarkdownRemark (
          filter: {fileAbsolutePath: {regex: "/bios/"}}
          sort: {fields: frontmatter___position, order: ASC}) {
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
            filter: {absolutePath: {regex: "/bio-images/"}, sourceInstanceName: {eq: "images"}}
          ) {
            edges {
              node {
                base
                childImageSharp {
                  gatsbyImageData(
                    width: 400
                    height: 500 
                    quality: 95
                    transformOptions: {cropFocus: NORTH}
                    )
                }
              }
            }
          }
        }`);

  return (
    <section className="c-researchers__list">
      <ul>
        {
          data.allMarkdownRemark.edges.map((node) => {
            const frontmatter = node.node.frontmatter || {};
            const key = frontmatter.slug;

            /** Pluck image if available **/
            const image = data.allFile.edges.filter((n) => n.node.base.includes(frontmatter.image));

            return <li key={key}>
              <Bio
                title={frontmatter.title}
                html={node.node.html}
                position={frontmatter.position}
                image={image[0] ? image[0].node.childImageSharp : null}
              />
            </li>
          })}
      </ul>
    </section>
  );
}

export default ResearcherList;
