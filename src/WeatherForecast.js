import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
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
