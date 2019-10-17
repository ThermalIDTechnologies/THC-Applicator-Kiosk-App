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
  MainImgCntr,
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

const ThcWindPage = () => {
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
    setPageTitle("THC WIND")
    vidRef.current.muted = true
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
                src="https://res.cloudinary.com/crjars/video/upload/c_scale,f_auto,q_85,vc_auto,w_685/v1571265671/THC-Wind-YouTube.mp4"
                type="video/mp4"
              />
            </video>
          </VidCntr>
          <MainImgCntr>
            <ThcWind />
          </MainImgCntr>
          <StyledLink style={{ gridArea: `pdf` }} to="/thc-wind-pdf">
            <PDFIcon style={{ width: `75px` }} />
            <p>View Spec Sheet</p>
          </StyledLink>
          <Form style={{ textAlign: `center` }} onSubmit={handleSubmit}>
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
          <AppLink to="/thc-roll-on-pro">
            <Image />
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

export default ThcWindPage
