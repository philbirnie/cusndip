import * as React from "react"
import ResearcherList from "../components/researcher/list";

import Layout from "../components/layout"
import Purpose from "../components/content/purpose";

const SiteIndex = () => {
  return (
    <Layout>
      <Purpose />
      <ResearcherList />
    </Layout>
  )
}

export default SiteIndex;
