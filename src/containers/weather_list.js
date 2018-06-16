import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  constructor(props) {
    super(props);

    this.renderWeather = this.renderWeather.bind(this);
  }

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temperatures = cityData.list.map( weather => weather.main.temp);
    const pressures = cityData.list.map( weather => weather.main.pressure);
    const humidities = cityData.list.map( weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;
    
    return (
      <tr key={name}> 
        <td> <GoogleMap lon={lon} lat={lat} /> </td>
        <td><Chart data={temperatures} color="orange" units="K"/></td>
        <td><Chart data={pressures} color="green" units="hPa"/></td>
        <td><Chart data={humidities} color="black" units="%"/></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th> City </th>
            <th> Temperature (K) </th>
            <th> Pressure (hPa) </th>
            <th> Humidity (%) </th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// (state) is now ({weather}) --> state.weather, since we only need weather
function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);