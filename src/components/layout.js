/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import BgImage from "./BgImage"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      backgroundImage: file(
        relativePath: { eq: "white-crumpled-kraft-paper-texture-PDH3TB4.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <BgImage
        title="kraft-paper-texture"
        fluid={data.backgroundImage.childImageSharp.fluid}
        overlayColor="rgba(252, 210, 153, 0.25)"
        height="100vh"
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1000,
            padding: `0px 1rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
      </BgImage>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
