import React, { useState, useContext, useEffect, useRef } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import PageTransition from "gatsby-v2-plugin-page-transitions"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { StoreContext } from "../context/StoreContext"
import {
  Grid,
  VidCntr,
  CycImgCntr,
  StyledLink,
  Img1Cntr,
  Img2Cntr,
  Img3Cntr,
  FooterTitle,
  Form,
  Button,
  Input,
  AppLink,
} from "../components/applicatorStyles/Styles"
import Image from "../components/image"
import ThcFire from "../components/ThcFireImg"
import ThcWind from "../components/ThcWindImg"
import ThcHero from "../components/ThcCycloneImg"
import PDFIcon from "../assets/pdf.svg"
import Home from "../assets/home-icon.svg"

const SecondPage = () => {
  const { setPageTitle } = useContext(StoreContext)

  const [email, setEmail] = useState("")
  const handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(email)
      .then(data => {
        data.result === "success"
          ? toast.success(data.msg)
          : toast.error(data.msg)
        setEmail("")
      })
      .catch(error => {
        console.log("TCL: SecondPage -> error", error)
        // Errors in here are client side
        // Mailchimp always returns a 200
      })
  }

  const vidRef = useRef(null)
  useEffect(() => {
    setPageTitle("THC ROLL-ON PRO")
    vidRef.current.muted = true
    vidRef.current.autoplay = true
  })

  return (
    <Layout>
      <PageTransition>
        <SEO title="Page two" />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        <Grid>
          <VidCntr>
            <video ref={vidRef} controls playsInline>
              <source
                src="https://res.cloudinary.com/crjars/video/upload/ac_none,c_scale,q_85,vc_auto,w_685/v1571162381/THC_RollOnPro_YouTube_1.mp4"
                type="video/mp4"
              />
            </video>
          </VidCntr>
          <CycImgCntr>
            <Image />
          </CycImgCntr>
          <StyledLink style={{ gridArea: `pdf` }} to="/thc-roll-on-pro-pdf">
            <PDFIcon style={{ width: `75px` }} />
            <p>View Spec Sheet</p>
          </StyledLink>
          <Form style={{ textAlign: `center`, margin: 0, }} onSubmit={handleSubmit}>
            <label htmlFor="email">Receive more Info</label>
            <br />
            <div style={{ display: `inline-flex` }}>
              <Input
                placeholder="Email address"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Button type="submit" value="Submit">
                Submit
              </Button>
            </div>
          </Form>
          <FooterTitle>
            <h3>Check out our other applicators:</h3>
          </FooterTitle>
          <Img1Cntr>
            <AppLink to="/thc-fire">
              <ThcFire />
            </AppLink>
          </Img1Cntr>
          <Img2Cntr>
            <AppLink to="/thc-cyclone">
              <ThcHero />
            </AppLink>
          </Img2Cntr>
          <Img3Cntr>
            <AppLink to="/thc-wind">
              <ThcWind />
            </AppLink>
          </Img3Cntr>
          <StyledLink style={{ gridArea: `home` }} to="/">
            <Home />
            HOME
          </StyledLink>
        </Grid>
      </PageTransition>
    </Layout>
  )
}

export default SecondPage
