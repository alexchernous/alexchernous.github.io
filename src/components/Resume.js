import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
import resumePDF from "../content/AlexChernousResume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
  constructor (props) {
    super(props);

    this.state = {
      numPages: null,
      pageNumber: 1,
    };

    this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  // https://github.com/wojtekmaj/react-pdf/issues/332#issuecomment-458121654
  removeTextLayerOffset() {
    const textLayers = document.querySelectorAll(".react-pdf__Page__textContent");
    textLayers.forEach(layer => {
      const { style } = layer;
      style.top = "0";
      style.left = "0";
      style.transform = "";
    });
  }

  // disabling button only works on extra click...
  handleNext() {
    if (this.state.pageNumber < this.state.numPages) {
      this.setState((state) => ({pageNumber: state.pageNumber + 1}));
    }

  }

  handlePrevious() {
    if (this.state.pageNumber > 1) {
      this.setState((state) => ({pageNumber: state.pageNumber - 1}));
    }
  }

  render() {
    return (
      <div style={{
        marginTop: "5px",
        display: "grid",
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
        }}>

        <a
          href={resumePDF}
          download="AlexChernousResume.pdf"
          style={{
            marginBottom: "5px",
            textAlign: "left"
            }}>
            Download Resume
        </a>

        <Document file={resumePDF} onLoadSuccess={this.onDocumentLoadSuccess}>
          <Page onLoadSuccess={() => this.removeTextLayerOffset()} pageNumber={this.state.pageNumber} />
        </Document>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridGap: "10px",
          marginTop: "10px",
          borderTop: "1px solid rgb(52, 58, 64, 0.1)"
          }}>

          <Button
            variant="secondary"
            onClick={this.handlePrevious}
            style={{width: "100%"}}>
              Previous Page
          </Button>
          <Button
            variant="secondary"
            onClick={this.handleNext}
            style={{
              width: "100%"
              }}>
                Next Page
          </Button>
        </div>
      </div>
    );
  }
}

export default Resume;