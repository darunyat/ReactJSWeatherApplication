import React from "react";

export default function FormatedDate(props) {
  let days = [
    `Sunday`,
    `Monday`,
    `Tuesv`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();

  return (
    <p>
      <strong className="text-uppercase">{day}</strong> |{hours}:{minutes}
    </p>
  );
}
