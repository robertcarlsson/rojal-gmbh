import React from "react"
import ProgressBar from "./progressBar/progressBar";

class Survey extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pageNumber: 0,
            status1: "",
            status2: "",
            status3: "",
            status4: ""
        }
        this.showNextPage = this.showNextPage.bind(this)
        this.showPrevPage = this.showPrevPage.bind(this)
      }
    
    showNextPage() {
        console.log("FILLING THE PROGRESS BAR");
        this.setState({pageNumber: this.state.pageNumber + 1})
        console.log(this.state.pageNumber);
        if (this.state.pageNumber > 0) {
            this.setState({status1: "completed"})
        }
        if (this.state.pageNumber > 1) {
            this.setState({status2: "completed"})
        }
        if (this.state.pageNumber > 2) {
            this.setState({status3: "completed"})
        }
        if (this.state.pageNumber > 3) {
            this.setState({status4: "completed"})
        }
        
        
    }

    showPrevPage() {
        console.log("FILLING THE PROGRESS BAR");
        this.setState({pageNumber: this.state.pageNumber - 1})
        console.log(this.state.pageNumber);
        if (this.state.pageNumber < 1) {
            this.setState({status1: ""})
        }
        if (this.state.pageNumber < 2) {
            this.setState({status2: ""})
        }
        if (this.state.pageNumber < 3) {
            this.setState({status3: ""})
        }
        if (this.state.pageNumber < 4) {
            this.setState({status4: ""})
        }
    }

    render() {
        
        return (
            <div >
                <ul className="progress-indicator">
                <li className={this.state.status1}> <span className="bubble"></span></li>
                <li className={this.state.status2}> <span className="bubble"></span></li>
                <li className={this.state.status3}> <span className="bubble"></span> </li>
                <li className={this.state.status4}> <span className="bubble"></span> </li>
            </ul>
                {/* <ProgressBar pageNumber={this.state.pageNumber}/> */}
                <button onClick={this.showPrevPage} type="button">Bakåt</button>
                <button onClick={this.showNextPage} type="button"> Framåt </button>
                
            </div>
            
            
        )
        
    }
}

export default Survey