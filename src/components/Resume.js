/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Document, Page, pdfjs } from 'react-pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import resumePDF from '../content/AlexChernousResume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


// Internet Explorer 6-11
const isIE = /* @cc_on!@ */ false || !!document.documentMode;
// Edge 20+
const isEdge = !isIE && !!window.StyleMedia;

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
  }

  onDocumentLoadSuccess({ numPages }) {
    this.setState({ numPages });
  }

  onPageLoadSuccess(page) {
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

  render() {
    return (
      <div id='pdfDoc'
        style={{
          display: 'grid',
          justifyContent: 'center',
        }}>
        <Button variant='success'
          style={{
            width: '250px',
            height: '50px',
            margin: '8px',
          }}>
          <a href={resumePDF} download='AlexChernousResume.pdf'
            style={{
              textDecoration: 'inherit',
              color: 'inherit',
            }}>
            <FontAwesomeIcon icon={faDownload} color={this.props.highlightColor}
              style={{
                marginRight: '5px',
                transition: '0.25s',
              }} />
              Download Resume PDF
          </a>
        </Button>
        {(isIE || isEdge)
          && <h5 style={{ margin: '8px' }}>Apologies for Internet Explorer / Edge users for the PDF loading times.</h5>
        }
        <Document file={resumePDF} onLoadSuccess={this.onDocumentLoadSuccess}>
          <Page onLoadSuccess={this.onPageLoadSuccess} pageNumber={this.state.pageNumber}
            scale={this.state.scale} renderAnnotationLayer={false} />
        </Document>
      </div>
    );
  }
}

export default Resume;
