import React, { Component } from 'react'

class DayDetail extends Component {

    render() {
        return (
            <div className="card">
                <div className="modal-header">
                    <p>Welcome to our site</p>
                    <span className="close-modal-btn">x</span>
                </div>
                <div className="modal-content">
                    <div className="modal-body">
                        <h4>Modal</h4>
                        <p>lots of words lots of words lots of words lots of words lots of words lots of words</p>
                    </div>
                    <div className="modal-footer">
                        <button className="btn-cancel"></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default DayDetail

{/* <p>Date: {this.formatDate()}</p>
                <p>Weather: {this.props.day.weather}</p>
                <p>Weather: {this.formatWeather(this.props.day.weather)}</p>
                <p>Max Temp: {this.props.day.temp2m.max}℉</p>
                <p>Min Temp: {this.props.day.temp2m.min}℉</p>
                <p>Wind: {this.formatWind(this.props.day.wind10m_max)}</p>
                <img src={dayrain} alt="Weather Image" /> */}