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
          justifyItems: 'center',
          justifyContent: 'center',
        }}>
        {/* this is a hack - need to fix position */}
        <div style={{
          height: '65px',
        }} />
        <Button variant='success'
          style={{
            width: '250px',
            height: '50px',
            marginBottom: '10px',
            marginTop: '10px',
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

        <Document file={resumePDF} onLoadSuccess={this.onDocumentLoadSuccess}>
          <Page onLoadSuccess={this.onPageLoadSuccess} pageNumber={this.state.pageNumber}
            scale={this.state.scale} renderAnnotationLayer={false} />
        </Document>
      </div>
    );
  }
}

export default Resume;
