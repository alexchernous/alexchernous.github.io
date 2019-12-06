import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

class Projects extends Component {

  render() {
    return (
      <div style={{
        padding: "20px"
        }}>

        <p>Most projects I play around with are on <a href="https://github.com/alexchernous" target="_blank">my GitHub</a>. However, currently with a full time commitment, it's more difficult to find the time for this hobby. Below are a few of my most enjoyed projects.</p><br></br>

        <h4><a href="https://github.com/alexchernous/NaturalLanguagePrediction" target="_blank">Natural Language Prediction<FontAwesomeIcon icon={faLink} color="#e0a800" style={{marginLeft : "5px"}} /></a></h4>
        <p>Single word and sentence prediction from a statistical language model using a 2nd order (and 1st order where applicable) <b>Markov Model</b> approach.</p>
        <p>Using <b>Python</b> and supporting libraries like regex, math, and numpy. Literature used to train models: A Tale of Two Cities from Project Gutenberg.</p><br></br>

        <h4><a href="https://github.com/alexchernous/alexchernous.github.io/tree/source" target="_blank">Website Portfolio<FontAwesomeIcon icon={faLink} color="#e0a800" style={{marginLeft : "5px"}} /></a></h4>
        <p>This webpage you're on was put together to demonstrate primarily some React/Bootstrap knowledge and act as my personal portfolio.</p>
        <p>Using <b>React, Bootstrap,</b> other libraries that can be found in package.json on GitHub.</p><br></br>

        <h4><a href="https://github.com/alexchernous/SentimentAnalysis" target="_blank">Sentiment Analysis<FontAwesomeIcon icon={faLink} color="#e0a800" style={{marginLeft : "5px"}} /></a></h4>
        <p>Rudimenatry sentiment analysis. <b>SVM Machine Learning</b> algorithm trained on synthetic sentences containing smile and frown emojis to gauge sentiment (positive, negative, neutral).</p>
        <p>Using <b>Python</b> and its <b>Machine Learning</b> libraries.</p>
      </div>
    );
  }
}

export default Projects;