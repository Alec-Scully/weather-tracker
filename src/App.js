import './App.css';
import React, { Component } from "react";
import SevenDayDisplay from './components/SevenDayDisplay';
import DayDetail from './components/DayDetail';
import { dcday, dcnight } from './images'

const URL_METRIC = "https://www.7timer.info/bin/civillight.php?lon=77&lat=38.9&ac=0&unit=metric&output=json&tzshift=0"
const URL_BRITISH = "https://www.7timer.info/bin/civillight.php?lon=77&lat=38.9&ac=0&unit=british&output=json&tzshift=0"

class App extends Component {

  state = {
    british: [],
    metric: [],
    degreeType: true,
    time: "",
    showModal: false,
    detailDay: {}
  }

  componentDidMount = () => {
    fetch(URL_BRITISH)
      .then(r => r.json())
      .then(britishData => 
        this.setState({ british: britishData.dataseries }))

    fetch(URL_METRIC)
      .then(r => r.json())
      .then(metricData => this.setState({ metric: metricData.dataseries }))

    this.setTime()
  }

  setTime = () => {
    let time = new Date().getHours()
    if (time > 6 && time < 20 ) {
      this.setState({time: "day"})
    } else {
      this.setState({time: "night"})
    }
  }

  handleModal = (day) => {
    let showModal = !this.state.showModal
    this.setState({
      showModal: showModal,
      detailDay: day
    })
  }

  render() {
    return (
      <div className="App"
      style={{
        backgroundImage: this.state.time === "day" ? `url(${dcday})` : `url(${dcnight})`
    }}>
        {this.state.showModal ? <div onClick={this.handleModal} className="background"></div> : null}
        <SevenDayDisplay british={this.state.british} metric={this.state.metric} degreeType={this.state.degreeType} time={this.state.time} handleModal={this.handleModal}></SevenDayDisplay>
        <DayDetail day={this.state.detailDay} handleModal={this.handleModal} showModal={this.state.showModal}></DayDetail>
      </div>
    )
  }
}


export default App;
