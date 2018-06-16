import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temperatures = cityData.list.map( weather => weather.main.temp);
    // const pressures = cityData.list.map( weather => weather.main.pressure);
    // const humidities = cityData.list.map( weather => weather.main.humidity);
    return (
      <tr key={name}> 
        <td> {name} </td>
        <td> 
          <Sparklines height={120} width={180} data={temperatures}>
            <SparklinesLine color="red" />
          </Sparklines>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th> City </th>
            <th> Temperature </th>
            <th> Pressure </th>
            <th> Humidity </th>
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