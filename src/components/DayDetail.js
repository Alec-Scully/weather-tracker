import React, { Component } from 'react'
import * as WeatherIcons from '../images'

class DayDetail extends Component {

    render() {
        return (
            <div>
                {this.props.showModal ? <div onClick={() => this.props.handleModal(this.props.day)} className="background"></div> : null}
                <div className="modal"
                    style={{
                        transform: this.props.showModal ? 'translateY(0vh)' : 'translateY(-100vh)',
                        opacity: this.props.showModal ? '1' : '0'
                    }}>
                    <div className="modal-header">
                        <span onClick={() => this.props.handleModal(this.props.day)} className="close-modal-btn">x</span>
                    </div>
                    <div className="modal-content">
                        <p>{this.props.formatDate(this.props.day.date)}</p>
                        <img src={WeatherIcons[this.props.time + this.props.day.weather]} alt="Weather Icon" />
                        <p>{this.props.formatWeather(this.props.day.weather)}</p>
                        <p>{this.props.formatTemp(this.props.day.temp2m)} </p>
                        <p>Wind: {this.props.formatWind(this.props.day.wind10m_max)}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default DayDetail