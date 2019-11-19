import React from "react"

class ProgressBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
      }
    render() {
        const pageNumber = this.props.pageNumber
        console.log(pageNumber);
        
        return (
            <ul className="progress-indicator">
                <li className="completed"> <span className="bubble"></span></li>
                <li className="completed"> <span className="bubble"></span></li>
                <li> <span className="bubble"></span> </li>
                <li> <span className="bubble"></span> </li>
            </ul>
        )
        
    }
}

export default ProgressBar