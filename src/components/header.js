import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext, useEffect } from "react"
import { StoreContext } from "../context/StoreContext"

import Logo from "../assets/thc-svg.svg"

const Header = () => {
  const { pageTitle, setPageTitle } = useContext(StoreContext)

  useEffect(() => {
    setPageTitle(`Choose the Applicator
    you'd like to learn more about...`)
  })
  return (
    <header
      style={{
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
      }}
    >
      <div
        style={{
          display: `flex`,
          background: `rgba(74, 119, 41, 0.7)`,
          width: `70%`,
          minHeight: `130px`,
        }}
      >
        <h1
          style={{
            alignSelf: `center`,
            margin: 0,
            padding: 0,
            color: `white`,
            fontSize: `2rem`,
            padding: `1.45rem 1.45rem`,
          }}
        >
          {pageTitle}
        </h1>
      </div>
      <div
        style={{
          margin: `0 auto`,
          paddingTop: `1.3rem`,
        }}
      >
        <h2 style={{ width: `250px` }}>
          <Logo />
        </h2>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
