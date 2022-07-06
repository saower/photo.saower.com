import * as React from "react"
import { ReactElement } from "react"

const Header = (): ReactElement => {
  return (
    <header className="site-header">
      <h1 className="site-title">
        <a href="https://www.saower.com">Saower Chan</a> &mdash;&mdash; Photos
      </h1>
    </header>
  )
}

export default Header
