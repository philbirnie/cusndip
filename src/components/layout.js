import * as React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({children}) => {
  return (
    <div className="global-wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
