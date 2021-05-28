import React, { Component } from 'react'
import DayCard from './DayCard'

class SevenDayDisplay extends Component {

    render() {
        return (
            <div className="display">
                <p>Washington D.C. Seven Day Weather Forecast</p>
                <button onClick={() => {this.props.changeDegree()}} disabled={this.props.degreeType}>Fahrenheit</button> <button onClick={() => {this.props.changeDegree()}} disabled={!this.props.degreeType}>Celsius</button>
                <br></br>
                {this.props.degreeType ?
                    this.props.british.map(day => <DayCard key={day.date} day={day} degreeType={this.props.degreeType} time={this.props.time} handleModal={this.props.handleModal} formatDate={this.props.formatDate} formatWeather={this.props.formatWeather} formatTemp={this.props.formatTemp}></DayCard>)
                    :
                    this.props.metric.map(day => <DayCard key={day.date} day={day} degreeType={this.props.degreeType} time={this.props.time} handleModal={this.props.handleModal} formatDate={this.props.formatDate} formatWeather={this.props.formatWeather} formatTemp={this.props.formatTemp}></DayCard>)
                }
            </div>
        )
    }
}

export default SevenDayDisplay;