import React, { Component } from 'react'
import DayCard from './DayCard'

class SevenDayDisplay extends Component {

    render() {
        return(
            <div className="display">
                <p>this is the forcast display component</p>
                {this.props.british.map(day => <DayCard key={day.date} day={day}></DayCard>)}
            </div>
        )
    }
}

export default SevenDayDisplay;