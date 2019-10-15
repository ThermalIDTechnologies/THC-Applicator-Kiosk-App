import React, { Component } from "react"
import { Document, Page } from "react-pdf"
import RollOnPDF from "../assets/SpecSheet_THCRollOnPro.pdf"

class RollOnProPDF extends Component {
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
      <div >
        <Document
          file={RollOnPDF}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} style={{ margin: `0 auto`}} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    )
  }
}

export default RollOnProPDF
