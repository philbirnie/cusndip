const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const remark = require('remark');
const remarkHTML = require('remark-html');


exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const pageTemplate = path.resolve(`./src/templates/internal.js`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          filter: {fileAbsolutePath: {regex: "/(pages)/"  }}
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your pages!`,
      result.errors
    )
    return
  }

  const pages = result.data.allMarkdownRemark.nodes

  // Create pages
  // But only if there's at least one markdown file found at "content/pages" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (pages.length > 0) {
    pages.forEach((page) => {

      createPage({
        path: page.fields.slug,
        component: pageTemplate,
        context: {
          id: page.id,
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    const parent = getNode(node.parent);
    let collection = parent.sourceInstanceName;

    createNodeField({
      node,
      name: 'collection',
      value: collection,
    });

    createNodeField({
      node,
      name: 'slug',
      value,
    })
  }

  if(node.internal.type === `MarkdownRemark` && node.frontmatter && node.frontmatter.excerpt) {
    const markdown = node.frontmatter.excerpt;

    createNodeField({
      node,
      name: 'excerptHTML',
      value: remark()
        .use(remarkHTML)
        .processSync(markdown)
        .toString()
    });
  }
}


//
// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//
//   // Explicitly define the siteMetadata {} object
//   // This way those will always be defined even if removed from gatsby-config.js
//
//   // Also explicitly define the Markdown frontmatter
//   // This way the "MarkdownRemark" queries will return `null` even when no
//   // blog posts are stored inside "content/blog" instead of returning an error
//   createTypes(`
//     type SiteSiteMetadata {
//       author: Author
//       siteUrl: String
//       social: Social
//     }
//
//     type Author {
//       name: String
//       summary: String
//     }
//
//     type Social {
//       twitter: String
//     }
//
//     type MarkdownRemark implements Node {
//       frontmatter: Frontmatter
//       fields: Fields
//     }
//
//     type Frontmatter {
//       title: String
//       description: String
//       date: Date @dateformat
//     }
//
//     type Fields {
//       slug: String
//     }
//   `)
// }
