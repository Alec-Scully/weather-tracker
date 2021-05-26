import React, { Component } from 'react';
import moment from 'moment';

class DayCard extends Component {

    setDate = () => {
        let newDate = moment(this.props.day.date.toString(), "YYYYMMDD")
        newDate.format("MMM Do YYYY")
        console.log(newDate)
        return newDate
    }
    

    render() {
        return(
            <div className="card">
                <p>Date: {() => this.setDate()}</p>
                <p>Weather: {this.props.day.weather}</p>
                <p>Max Temp: {this.props.day.temp2m.max}</p>
                <p>Min Temp: {this.props.day.temp2m.min}</p>
                <p>Wind Force: {this.props.day.wind10m_max}</p>
                {Date.parse(this.props.day.date)}
            </div>
        )
    }
}

export default DayCard;

// function to convert wind force into appropriate MPH or m/s
// switch statement

// 0 - Calm - <1 mph, <0.5m/s
// 1 - Light air - 1-3mph, 0.5-1.5m/s
// 2 - Light breeze - 4-7mph, 1.6-3.3m/s
// 3 - Gentle breeze - 8-12mph, 3.4-5.5m/s
// 4 - Moderate breeze - 13-18mph, 5.5-7.9m/s
// 5 - Fresh breeze - 19-24mph, 8-10.7m/s
// 6 - Strong breeze - 25-31mph, 10.8-13.8m/s
// 7 - High wind/moderate gale/near gale - 32-38mph, 13.9-17.1m/s
// 8 - gale, fresh gale - 39-46mph, 17.2-20.7m/s
// 9 - strong/severe gale - 47-54mph, 20.8-24.4m/s
// 10 - storm, whole gale - 55-63mph, 24.5-28.4m/s
// 11 - violent storm - 64-72mph, 28.532.6m/s
// 12 - hurricane force -  >=73mph, >=32.7m/s