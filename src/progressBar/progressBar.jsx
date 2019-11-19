import React from "react"

class ProgressBar extends React.Component {

    render() {
        return (
            <ul class="progress-indicator">
            <li class="completed"> <span class="bubble"></span> 1 </li>
            <li class="completed"> <span class="bubble"></span> 2 </li>
            <li> <span class="bubble"></span> 3</li>
          </ul>
        )
        
    }
}

export default ProgressBar