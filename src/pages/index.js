import React from "react"
import PageTransition from "gatsby-v2-plugin-page-transitions"

import { HomeGrid, StyledLink, ApplicatorTitle } from "../components/homeStyles/Styles"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ThcFire from "../components/ThcFireImg"
import ThcWind from "./../components/ThcWindImg"
import ThcCyclone from "../components/ThcCycloneImg"

const IndexPage = () => (
  <Layout>
    <PageTransition>
    <SEO title="Home" />
    <HomeGrid>
      <div style={{ width: `250px`, marginBottom: `1rem`, gridArea: `roll` }}>
        <StyledLink to="/thc-roll-on-pro" >
          <Image />
          <ApplicatorTitle>
            THC Roll-On Pro
          </ApplicatorTitle>
        </StyledLink>
      </div>
      <div style={{ width: `370px`, gridArea: `fire` }}>
        <StyledLink to="/thc-fire">
          <ThcFire />
          <ApplicatorTitle>
            THC FIRE
          </ApplicatorTitle>
        </StyledLink>
      </div>
      <div style={{ width: `285px`, marginBottom: `1rem`, gridArea: `wind` }}>
        <StyledLink to="/thc-wind">
          <ThcWind />
          <ApplicatorTitle>
            THC Wind
          </ApplicatorTitle>
        </StyledLink>
      </div>
      <div style={{ width: `285px`, gridArea: `hero` }}>
        <StyledLink to="/thc-cyclone">
          <ThcCyclone />
          <ApplicatorTitle>
            THC Cyclone
          </ApplicatorTitle>
        </StyledLink>
      </div>
    </HomeGrid>
    </PageTransition>
  </Layout>
)

export default IndexPage
