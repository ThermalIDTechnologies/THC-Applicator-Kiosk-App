import React, { Component } from "react"
import { Document, Page } from "react-pdf"
import PageTransition from "gatsby-v2-plugin-page-transitions"

import { ButtonLink } from "../components/applicatorStyles/Styles"
import FirePDF from "../assets/SpecSheet_THCFire.pdf"

class ThcFirePDF extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages })
  }

  render() {
    const { pageNumber, numPages } = this.state

    return (
      <div
        style={{
          backgroundColor: `rgba(252, 210, 153, 0.25)`,
          minHeight: `100vh`,
        }}
      >
        <PageTransition>
          <Document file={FirePDF} onLoadSuccess={this.onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} style={{ margin: `0 auto` }} />
            <p>
              Page {pageNumber} of {numPages}
            </p>
            <Page pageNumber={2} style={{ margin: `0 auto` }} />
            <p style={{ margin: `0` }}>Page 2 of {numPages}</p>
          </Document>
          <ButtonLink
            style={{
              position: `fixed`,
              bottom: `20px`,
              right: `30px`,
            }}
            to="/thc-fire"
          >
            Back
          </ButtonLink>
        </PageTransition>
      </div>
    )
  }
}

export default ThcFirePDF
