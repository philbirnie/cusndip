import * as React from "react"

const StaticMarkdown = ({ collection, markdownId }) => {
  const markdownPath = `/${markdownId.replace(/\./g, "/")}/`

  const element = collection.filter(
    edge => edge.node.fields.slug === markdownPath
  )

  if (!element) {
    return null
  }

  const { node } = element[0]

  return (
    <div
      className="c-static-markdown c-content"
      dangerouslySetInnerHTML={{ __html: node.html }}
    />
  )
}

export default StaticMarkdown
