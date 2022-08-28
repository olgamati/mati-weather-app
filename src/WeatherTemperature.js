import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFarenheith(event) {
    event.preventDefault();
    setUnit("farenheith");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span>
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C|
          <a
            href="\"
            onClick={convertToFarenheith}
            class="text-decoration-none"
          >
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let farenheith = (props.celsius * 9) / 5 + 32;
    return (
      <span>
        <span className="temperature">{Math.round(farenheith)}</span>
        <span className="unit">
          <a href="\" onClick={convertToCelsius} class="text-decoration-none">
            °C
          </a>
          | °F
        </span>
      </span>
    );
  }
}
