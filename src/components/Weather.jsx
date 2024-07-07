import React, { Component } from "react";

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      cityName: "",
      list: null,
    };
  }

  fetchData = async () => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=4897121fc85546349c7191537240607&q=${this.state.cityName}&aqi=no`
      );
      if (!response.ok) {
        throw new Error("Sth wrong happened while fetching data");
      }

      const data = await response.json();
      this.setState({ ...this.state, list: data });
      //   console.log(data);
      console.log(this.state.list);
    } catch (err) {
      console.error("err:", err.status);
    }
  };

  submitForm = (event) => {
    event.preventDefault();
    this.fetchData();
  };

  handleOnChange = (event) => {
    const newQuery = event.target.value;
    this.setState({ ...this.state, cityName: newQuery });
  };

  render() {
    return (
      <div className="weather-container">
        <form action="">
          <div>
            <label htmlFor="location_input">LOCATION</label>
            <input
              type="text"
              value={this.state.cityName}
              required
              onChange={this.handleOnChange}
              id="location_input"
            />
          </div>
          <button onClick={this.submitForm} className="btn">
            SET
          </button>
        </form>
        <div className="weather-div">
          <img
            src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
            alt=""
          />

          {this.state.list && (
            <div>
              <h1>
                {this.state.list.location.name},{" "}
                {this.state.list.location.country}
              </h1>
              <p>
                Temp: {this.state.list.current.temp_c}C {" / "}
                {this.state.list.current.temp_f}F
              </p>
              <p>Condition: {this.state.list.current.condition.text}</p>
              <p>Local Time: {this.state.list.location.localtime}</p>
              <p>Humidity: {this.state.list.current.humidity}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Weather;
