// src/DateCard/Card.jsx

import React from 'react';
import './DateCard.css';

class DateCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image: {
                alt: props.image.alt || '',
            }
        }
    }

    render () {
        return (
            <div className="datecard">
                <div className="image">
                    <img src={this.props.image.src} alt={this.state.image.alt}/>
                </div>
                <div className="content">
                    <h2>{this.props.title}</h2>
                </div>
            </div>
        )
    }

}

export default DateCard;
