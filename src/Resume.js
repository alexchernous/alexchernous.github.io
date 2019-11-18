import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import resumePDF from "./AlexChernousResume.pdf";
import { Button } from "react-bootstrap";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class Resume extends Component {

  constructor (props) {
    super(props);

    this.state = {
      numPages : null,
      pageNumber : 1,
      firstPage : true,
      finalPage : false,
    };

    this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
  }
  

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  // disabling button only works on extra click...
  handleNext() {
    if (this.state.pageNumber < 3) {
      this.setState((state) => ({pageNumber : state.pageNumber + 1, firstPage : false}));
    }
    else {
      this.setState({finalPage : true});
    }
      
  }

  handlePrevious() {
    if (this.state.pageNumber > 1) {
      this.setState((state) => ({pageNumber : state.pageNumber - 1, finalPage : false}));
    }
    else {
      this.setState({firstPage : true});
    }
  }

  render() {

    return (
      <div>
        <Button variant="info" onClick={this.handlePrevious}>Previous</Button>
        <Button variant="info" onClick={this.handleNext}>Next</Button>
        <p>Page {this.state.pageNumber} of {this.state.numPages}</p>

        <Document
          file={resumePDF}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={this.state.pageNumber} />
        </Document>
        
        

      </div>
    );
  }
}

export default Resume;