import React, { useContext, useEffect, useRef } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RollOnProVid from "../assets/THC_RollOnPro_YouTube (1).webm"
import { StoreContext } from "../context/StoreContext"
import {
  Grid,
  VidCntr,
  MainImgCntr,
  StyledLink,
  Img1Cntr,
  Img2Cntr,
  Img3Cntr,
  FooterTitle,
  Form,
  Button,
  Input,
} from "../components/applicatorStyles/Styles"
import Image from "../components/image"
import ThcFire from "../components/ThcFire"
import ThcWind from "../components/ThcWind"
import ThcHero from "../components/ThcHero"
import PDFIcon from "../assets/pdf.svg"
import Home from "../assets/home-icon.svg"

const SecondPage = () => {
  const { setPageTitle } = useContext(StoreContext)

  const vidRef = useRef(null)

  useEffect(() => {
    setPageTitle("THC Roll-On Pro")
    vidRef.current.muted = true
  })

  return (
    <Layout>
      <SEO title="Page two" />
      <Grid>
        <VidCntr>
          <video ref={vidRef} width="685" controls autoPlay>
            <source src={RollOnProVid} type="video/webm" />
          </video>
        </VidCntr>
        <MainImgCntr>
          <Image />
        </MainImgCntr>
        <StyledLink style={{ gridArea: `pdf` }}>
          <PDFIcon style={{ width: `75px` }} />
          <p>View Spec Sheet</p>
        </StyledLink>
        <Form>
          <Input placeholder="Email address" type="text" />
          <Button onClick={e => e.preventDefault()}>Submit</Button>
        </Form>
        <FooterTitle>
          <h3>Check out our other applicators:</h3>
        </FooterTitle>
        <Img1Cntr>
          <ThcFire />
        </Img1Cntr>
        <Img2Cntr>
          <ThcHero />
        </Img2Cntr>
        <Img3Cntr>
          <ThcWind />
        </Img3Cntr>
        <StyledLink style={{ gridArea: `home` }} to="/">
          <Home />
          HOME
        </StyledLink>
      </Grid>
    </Layout>
  )
}

export default SecondPage
