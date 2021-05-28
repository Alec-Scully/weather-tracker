import React, { Component } from 'react'
import DayCard from './DayCard'

class SevenDayDisplay extends Component {

    render() {
        return (
            <div className="display">
                <p>Washington D.C. Seven Day Weather Forecast</p>
                {this.props.degreeType ?
                    this.props.british.map(day => <DayCard key={day.date} day={day} degreeType={this.props.degreeType} time={this.props.time}></DayCard>)
                    :
                    this.props.metric.map(day => <DayCard key={day.date} day={day} degreeType={this.props.degreeType} time={this.props.time}></DayCard>)
                }
            </div>
        )
    }
}

export default SevenDayDisplay;