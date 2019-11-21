import React, { Component } from "react";
import { Stage, Layer, Line, Rect, Text } from "react-konva";

import Sun from "../Sun/Sun";

export const max_height = 200;
export const min_height = window.innerHeight / 1.3;
export const middle = window.innerWidth / 2;

//const bgDark = "#110033";
//const bgLight = "#66b3ff";

const bgColor = [0, "#110033", "#222377", "#335399", "#5593bb", "#66b3ff"];

class Question extends Component {
  state = {
    value: 1
  };

  SetValue = value => {
    this.setState({ value: value });
  };

  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight - 80}>
        <Layer>
          <Rect
            x={0}
            y={0}
            fill={bgColor[this.state.value]}
            width={window.innerWidth}
            height={window.innerHeight}
          />
          <Sun
            SetValue={this.SetValue}
            min_val={max_height}
            max_val={min_height}
            value={this.state.value}
          />
          <Rect
            x={0}
            y={min_height}
            fill={bgColor[this.state.value]}
            width={window.innerWidth}
            height={window.innerHeight}
          />

          <Line
            points={[50, min_height, window.innerWidth - 50, min_height]}
            stroke="black"
          />
          <Text
            x={middle - 150}
            y={min_height - 50}
            text={this.state.value.toString()}
            fontSize={50}
            fill="white"
          />
          <Text
            x={middle - 160}
            y={25}
            text={this.props.question}
            fontSize={35}
            width={340}
            align="center"
            fill="white"
          />
        </Layer>
      </Stage>
    );
  }
}

export default Question;
