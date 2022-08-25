import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project is coded by{" "}
          <a
            href="https://olga-plotnikova.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Olga Plotnikova
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/olgamati/weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
