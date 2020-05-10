/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Document, Page, pdfjs } from 'react-pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import resumePDF from '../content/AlexChernousResume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numPages: null,
      pageNumber: 1,
      scale: 1.0,
    };

    this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
    this.onPageLoadSuccess = this.onPageLoadSuccess.bind(this);
    // this.handleNext = this.handleNext.bind(this);
    // this.handlePrevious = this.handlePrevious.bind(this);
  }

  onDocumentLoadSuccess({ numPages }) {
    this.setState({ numPages });
  }

  onPageLoadSuccess(page) {
    // https://github.com/wojtekmaj/react-pdf/issues/332#issuecomment-458121654
    const textLayers = document.querySelectorAll('.react-pdf__Page__textContent');
    textLayers.forEach((layer) => {
      const { style } = layer;
      style.top = '0';
      style.left = '0';
      style.transform = '';
    });

    // https://github.com/wojtekmaj/react-pdf/issues/74
    const parentDiv = document.querySelector('#pdfDoc');

    if (parentDiv.clientWidth > 750) {
      this.setState({ scale: 1.2 });
    } else {
      const pageScale = parentDiv.clientWidth / page.originalWidth;

      if (this.state.scale !== pageScale) {
        this.setState({ scale: pageScale });
      }
    }
  }

  // disabling button only works on extra click...
  // handleNext() {
  //   if (this.state.pageNumber < this.state.numPages) {
  //     this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));
  //   }
  // }

  // handlePrevious() {
  //   if (this.state.pageNumber > 1) {
  //     this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
  //   }
  // }

  render() {
    return (
      <div id='pdfDoc'
        style={{
          display: 'grid',
          justifyContent: 'center',
          textAlign: 'center',
        }}>

        <a href={resumePDF} download='AlexChernousResume.pdf'>
          <Button variant='success'
            style={{
              width: '50%',
              height: '50px',
              marginBottom: '10px',
              marginTop: '10px',
            }}>
            <FontAwesomeIcon icon={faDownload} color='#e0a800'
              style={{
                marginRight: '5px',
                transition: '0.15s',
              }} />
                Download Resume PDF
          </Button>
        </a>

        <Document file={resumePDF} onLoadSuccess={this.onDocumentLoadSuccess}>
          <Page onLoadSuccess={this.onPageLoadSuccess}
            pageNumber={this.state.pageNumber} scale={this.state.scale} />
        </Document>

        {/* <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridGap: '5px',
          marginBottom: '10px',
        }}>

          <Button variant='secondary' onClick={this.handlePrevious}
            style={{
              width: '100%',
              transition: '0.15s',
            }}>
            Previous Page
          </Button>
          <Button variant='secondary' onClick={this.handleNext}
            style={{
              width: '100%',
              transition: '0.15s',
            }}>
            Next Page
          </Button>
        </div> */}
      </div>
    );
  }
}

export default Resume;
