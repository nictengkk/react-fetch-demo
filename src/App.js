import React, { Component } from "react";
import "./App.css";
import availableCarparks from "./data/carparkAvailability";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carparks: []
    };
  }

  async componentDidMount() {
    try {
      const carparks = await availableCarparks();
      this.setState({
        carparks
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Available Car Parks</h1>
        <ul>
          {this.state.carparks.length > 10 &&
            this.state.carparks.slice(0, 10).map(carpark => {
              return (
                <li className="carpark" key={carpark.carpark_number}>
                  <span className="carpark-number">
                    Car Park Number: {carpark.carpark_number}
                  </span>
                  <span className="carpark-lots-available">
                    Available Lots: {carpark.carpark_info[0].lots_available}
                  </span>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default App;
