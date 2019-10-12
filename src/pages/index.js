import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ThcFire from "../components/ThcFire"
import ThcWind from "./../components/ThcWind"
import ThcHero from "./../components/ThcHero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        display: `grid`,
        gridTemplateColumns: `1fr 1fr`,
        gridTemplateRows: `auto`,
        gridTemplateAreas: `
          "roll  wind"
          "fire  hero"
        `,
        justifyContent: `space-evenly`,
        justifyItems: `center`,
        alignItems: `end`,
      }}
    >
      <div style={{ width: `250px`, marginBottom: `1rem`, gridArea: `roll` }}>
        <Link to="/page-2/">
          <Image />
          <h3 style={{ textAlign: `center`, color: `#4A7729` }}>
            THC Roll-On Pro
          </h3>
        </Link>
      </div>
      <div style={{ width: `300px`, gridArea: `fire` }}>
        <ThcFire />
        <h3 style={{ textAlign: `center`, color: `#4A7729` }}>THC Fire</h3>
      </div>
      <div style={{ width: `250px`, marginBottom: `1rem`, gridArea: `wind` }}>
        <ThcWind />
        <h3 style={{ textAlign: `center`, color: `#4A7729` }}>THC Wind</h3>
      </div>
      <div style={{ width: `240px`, gridArea: `hero` }}>
        <ThcHero />
        <h3 style={{ textAlign: `center`, color: `#4A7729` }}>THC Hero</h3>
      </div>
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
