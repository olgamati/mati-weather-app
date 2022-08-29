import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "d4afb93d00c44ec28d48b4b8002244c8";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}$units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="Weather-day">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div>
            <span className="Weather-temp-max">19°</span>{" "}
            <span className="Weather-temp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
