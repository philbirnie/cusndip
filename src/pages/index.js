import * as React from "react"
import { Link, graphql } from "gatsby"
import ResearcherList from "../components/researcher/list";

import Layout from "../components/layout"

const SiteIndex = () => {
  return (
    <Layout>
      <ResearcherList />
    </Layout>
  )
}

export default SiteIndex

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title,
//         subtitle
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       nodes {
//         excerpt
//         fields {
//           slug
//         }
//         frontmatter {
//           date(formatString: "MMMM DD, YYYY")
//           title
//           description
//         }
//       }
//     }
//   }
// `
