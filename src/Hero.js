/**
 * Created by Lera on 10.12.2017.
 */
import React, { Component } from 'react';


class Hero extends Component{
    render() {
        return (
            <div className="container">
                <h3>{this.props.title}</h3>
                <img alt="" src={this.props.src} />
            </div>
        );
    }
}

export default Hero;


