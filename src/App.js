import './App.css';
import React, { Component } from "react";
import SevenDayDisplay from './components/SevenDayDisplay';

const URL_METRIC = "https://www.7timer.info/bin/api.pl?lon=77.0369&lat=38.9072&product=civillight&output=json&unit=metric"
const URL_BRITISH = "https://www.7timer.info/bin/api.pl?lon=77.0369&lat=38.9072&product=civillight&output=json&unit=british"

class App extends Component {

  state = {
    british: [],
    metric: [],
    toggle: true
  }

  componentDidMount = () => {
    fetch(URL_BRITISH)
      .then(r => r.json())
      .then(britishData => this.setState({ british: britishData.dataseries }))

    fetch(URL_METRIC)
      .then(r => r.json())
      .then(metricData => this.setState({ metric: metricData.dataseries }))
  }

  render() {
    return (
      <div className="App">
        <SevenDayDisplay british={this.state.british} metric={this.state.metric}></SevenDayDisplay>
      </div>
    )
  }
}


export default App;
