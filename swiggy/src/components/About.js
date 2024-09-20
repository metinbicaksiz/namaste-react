import React from 'react';
import UserClass from "./UserClass";
// import User from "./User";
import {Component} from "react";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: ""
            }
        }
    }

    render() {
        return (
            <div className="about">
                <h1>About</h1>
                <UserClass />
            </div>
        )
    }
}

export default About;