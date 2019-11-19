import React from "react";
//import ProgressBar from "./progressBar/progressBar";

import Question from "./Question/Question";

const questions = [
  "Hur väl uppfyller Valtech dina förväntingar?",
  "Hur väl trivs du på din arbetsplats?",
  "Hur mår du egentligen?",
  "Var du ärlig?"
];

class Survey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 1,
      status1: "completed",
      status2: "",
      status3: "",
      status4: ""
    };
    this.showNextPage = this.showNextPage.bind(this);
    this.showPrevPage = this.showPrevPage.bind(this);
    this.renderQuestion = this.renderQuestion.bind(this);
  }

  showNextPage() {
    const pageNum = this.state.pageNumber + 1;
    this.setState({ pageNumber: pageNum });
    if (pageNum > 0) {
      this.setState({ status1: "completed" });
    }
    if (pageNum > 1) {
      this.setState({ status2: "completed" });
    }
    if (pageNum > 2) {
      this.setState({ status3: "completed" });
    }
    if (pageNum > 3) {
      this.setState({ status4: "completed" });
    }
  }

  showPrevPage() {
    const pageNum = this.state.pageNumber - 1;
    this.setState({ pageNumber: pageNum });
    this.setState({ pageNumber: pageNum });
    if (pageNum <= 0) {
      this.setState({ status1: "" });
    }
    if (pageNum <= 1) {
      this.setState({ status2: "" });
    }
    if (pageNum <= 2) {
      this.setState({ status3: "" });
    }
    if (pageNum <= 3) {
      this.setState({ status4: "" });
    }
  }

  renderQuestion() {
    let question = "";
    if (this.state.pageNumber === 1) {
      question = "Hur väl uppfyller Valtech dina förväntingar?";
    } else if (this.state.pageNumber === 2) {
      question = "Hur väl trivs du på din arbetsplats?";
    } else if (this.state.pageNumber === 3) {
      question = "Hur mår du egentligen?";
    } else if (this.state.pageNumber === 4) {
      question = "Var du ärlig?";
    }
    return <p> {question} </p>;
  }

  render() {
    return (
      <div>
        <ul className="progress-indicator">
          <li className={this.state.status1}>
            {" "}
            <span className="bubble"></span>
          </li>
          <li className={this.state.status2}>
            {" "}
            <span className="bubble"></span>
          </li>
          <li className={this.state.status3}>
            {" "}
            <span className="bubble"></span>{" "}
          </li>
          <li className={this.state.status4}>
            {" "}
            <span className="bubble"></span>{" "}
          </li>
        </ul>
        {/* <ProgressBar pageNumber={this.state.pageNumber}/> */}
        {/* <div className="lead">{this.renderQuestion()}</div> */}
        <Question question={questions[this.state.pageNumber - 1]} />
        <div>
          <button onClick={this.showPrevPage} type="button">
            Bakåt
          </button>
          <button onClick={this.showNextPage} type="button">
            {" "}
            Framåt{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default Survey;
