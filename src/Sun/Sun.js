import React from "react";

//import Konva from "konva";
import { Circle } from "react-konva";
import "./Sun.css";

//const min_val = 200;
//const max_val = window.innerHeight / 2;

// const sunDark = "#ff6600";
export const sunLight = [
  0,
  "#ff6600",
  "#ff9900",
  "#ffbb00",
  "#ffcc00",
  "#ffff00"
];

export default function Sun(props) {
  //const [color, setColor] = React.useState("#ffdd88");
  const { min_val, max_val, value } = props;
  const height = max_val - min_val;
  const SunLimitation = y => {
    if (y < min_val) return min_val;
    if (y > max_val) return max_val;
    return y;
  };

  const SunValue = y => {
    const val = y - min_val;
    const norm = (height - val) / height;
    const score = Math.floor(norm * 4) + 1;
    return score;
  };

  const X_VALUE = window.innerWidth / 2;

  return (
    <Circle
      x={X_VALUE}
      y={max_val}
      draggable
      radius={50}
      fill={sunLight[value]}
      onDragEnd={() => {
        //props.SetValue()
        //setColor(Konva.Util.getRandomColor());
      }}
      dragBoundFunc={pos => {
        props.SetValue(SunValue(SunLimitation(pos.y)));
        return { x: X_VALUE, y: SunLimitation(pos.y) };
      }}
    />
  );
}
