/* eslint-disable no-unused-vars */
import React from 'react';

const NLPContent = () => (
  <React.Fragment>
    <h4>Description</h4>
    <p>Single word and sentence prediction from a statistical language model (SLM) using
      a 2nd order (and 1st order where applicable) Markov Model approach.</p>
    <h4>Motivation</h4>
    <p>The interest came from smart phone keyboards and their word
      completion / prediction.
      I don't actually know the exact mechanism of how modern phones accomplish
      this task, but I decided to use my own approach of an SLM.
      I learned the concept of SLMs in university; however, implementing it
      on a real world problem only sparked my imagination a couple years later.
    </p>
    <h4>Tools</h4>
    <p>Python and supporting libraries like regex, math, and numpy.</p>
    <p>Literature used to train models: A Tale of Two Cities from <a href='https://www.gutenberg.org/' target='_blank' rel='noopener noreferrer'>Project Gutenberg.</a></p>
  </React.Fragment>
);

export default NLPContent;
