import * as React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, useFullHeader }) => {
  return (
    <div className="global-wrapper">
      <Header isFull={useFullHeader} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
