import './App.css';
import React, { Component } from "react";
import SevenDayDisplay from './components/SevenDayDisplay';
import DayDetail from './components/DayDetail';
import { dcday, dcnight, loading} from './images'

const URL_METRIC = "https://www.7timer.info/bin/civillight.php?lon=77&lat=38.9&ac=0&unit=metric&output=json&tzshift=0"
const URL_BRITISH = "https://www.7timer.info/bin/civillight.php?lon=77&lat=38.9&ac=0&unit=british&output=json&tzshift=0"

class App extends Component {

  state = {
    isLoading: true,
    british: [],
    metric: [],
    degreeType: true,
    time: "",
    showModal: false,
    detailDay: {
      date: "",
      weather: "",
      temp2m: {
        max: "",
        min: ""
      },
      wind10m_max: ""
    }
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

    setTimeout(
      function () {
        this.setState({ isLoading: false });
      }.bind(this),
      9000
    );
  }

  setTime = () => {
    let time = new Date().getHours()
    if (time > 6 && time < 20) {
      this.setState({ time: "night" })
    } else {
      this.setState({ time: "night" })
    }
  }

  handleModal = (day) => {
    let showModal = !this.state.showModal
    this.setState({
      showModal: showModal,
      detailDay: day
    })
  }

  formatDate = (date) => {
    let newDate = date.toString().split("")
    newDate.splice(6, 0, '-')
    newDate.splice(4, 0, '-')
    let formatDate = new Date(newDate.join(""))
    let month = formatDate.toLocaleString('default', { month: 'long' });
    let day = formatDate.getUTCDate();
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return (`${days[formatDate.getDay()]}, ${month} ${day}`)
  }

  formatWeather = (type) => {
    switch (type) {
      case "clear":
        return "Clear Skies"
      case "pcloudy":
        return "Partly Cloudy"
      case "mcloudy":
        return "Mostly Cloudy"
      case "cloudy":
        return "Cloudy"
      case "humid":
        return "Humid/Foggy"
      case "lightrain":
        return "Light Rain"
      case "rain":
        return "Rain"
      case "oshower":
        return "Ocassional Showers"
      case "ishower":
        return "Isolated Showers"
      case "lightsnow":
        return "Light Snow"
      case "snow":
        return "Snow"
      case "rainsnow":
        return "Rain & Snow"
      case "ts":
        return "Thunder"
      case "tsrain":
        return "Thunderstorm"
      default:
        return "Unknown!"
    }
  }

  formatWind = (wind) => {
    switch (wind) {
      case 0:
        return "Calm"
      case 1:
        return "Light Air"
      case 2:
        return "Light Breeze"
      case 3:
        return "Gentle Breeze"
      case 4:
        return "Moderate Breeze"
      case 5:
        return "Fresh Breeze"
      case 6:
        return "Strong Breeze"
      case 7:
        return "High Wind"
      case 8:
        return "Gale"
      case 9:
        return "Strong Gale"
      case 10:
        return "Storm"
      case 11:
        return "Violent Storm"
      case 12:
        return "Hurricane Force"
      default: return "No Wind"
    }
  }

  formatTemp = (temp) => {
    if (this.state.degreeType === true) {
      return `${temp.min}℉ - ${temp.max}℉`
    } else {
      return `${temp.min}℃ - ${temp.max}℃`
    }
  }

  changeDegree = () => {
    let newDegree = !this.state.degreeType
    this.setState({ degreeType: newDegree })
  }

  render() {
    return (
      <div className="App"
        style={{
          backgroundImage: this.state.time === "day" ? `url(${dcday})` : `url(${dcnight})`
        }}>
          
        {this.state.isLoading ? (
          <div className="loading">
            <img src={loading} alt="loading gif"></img>
            <h2 className="title">Loading...</h2>
          </div>
        ) : (
          <div>
            <SevenDayDisplay formatDate={this.formatDate}
              formatWeather={this.formatWeather}
              formatTemp={this.formatTemp}
              british={this.state.british} metric={this.state.metric}
              degreeType={this.state.degreeType}
              time={this.state.time}
              handleModal={this.handleModal}
              changeDegree={this.changeDegree}>
            </SevenDayDisplay>

            <DayDetail formatDate={this.formatDate}
              formatWeather={this.formatWeather}
              formatTemp={this.formatTemp}
              formatWind={this.formatWind}
              day={this.state.detailDay}
              handleModal={this.handleModal}
              showModal={this.state.showModal}
              time={this.state.time}>
            </DayDetail>
          </div>
        )}
      </div>
    )
  }
}


export default App;
