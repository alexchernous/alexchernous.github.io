/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Document, Page, pdfjs } from 'react-pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import resumePDF from '../content/AlexChernousResume.pdf';
import constants from '../constants';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// Internet Explorer 6-11
const isIE = /* @cc_on!@ */ false || !!document.documentMode;
// Edge 20+
const isEdge = !isIE && !!window.StyleMedia;

const Resume = () => {
  // old code to handle multi page resume
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  const highlightColor = constants.colors.orange;

  const onPageLoadSuccess = (page) => {
    // https://github.com/wojtekmaj/react-pdf/issues/74
    const parentDiv = document.querySelector('#pdfDoc');

    if (parentDiv.clientWidth > 750) {
      setScale(1.2);
    } else {
      const pageScale = parentDiv.clientWidth / page.originalWidth;

      if (scale !== pageScale) {
        setScale(pageScale);
      }
    }
  };

  return (
    <div
      id='pdfDoc'
      style={{
        display: 'grid',
        justifyContent: 'center',
      }}
    >
      <Button
        variant='success'
        style={{
          width: '250px',
          height: '50px',
          marginBottom: '5px',
        }}
      >
        <a
          href={resumePDF}
          download='AlexChernousResume.pdf'
          style={{
            textDecoration: 'inherit',
            color: 'inherit',
          }}
        >
          <FontAwesomeIcon
            icon={faDownload}
            color={highlightColor}
            style={{
              marginRight: '5px',
              transition: '0.25s',
            }}
          />
            {constants.content.resume.download}
        </a>
      </Button>
      {(isIE || isEdge)
        && <h5 style={{ margin: '8px' }}>{constants.content.resume.ieUsers}</h5>
      }
      <Document file={resumePDF} onLoadSuccess={setNumPages}>
        <Page
          onLoadSuccess={onPageLoadSuccess}
          pageNumber={pageNumber}
          scale={scale}
          renderAnnotationLayer={false}
        />
      </Document>
    </div>
  );
};

export default Resume;
