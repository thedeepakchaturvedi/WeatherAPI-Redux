import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import WeatherCard from "./components/WeatherCard";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  // const [error, setError] = useState("Enter a Location");

  //
  return (
    <div className="App">
      <Provider store={store}>
        <Form />
        <WeatherCard />
      </Provider>
    </div>
  );
}

export default App;
