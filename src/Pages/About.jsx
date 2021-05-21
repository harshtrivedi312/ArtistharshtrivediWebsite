import React, { Component } from 'react'
import AboutMain from '../components/About/AboutMain';
import AboutBio from '../components/About/AboutBio';
import AboutCounter from '../components/About/AboutCounter';

export default class About extends Component {
    render() {
        return (
            <div>
                <AboutMain></AboutMain>
                <AboutBio></AboutBio>
                <AboutCounter></AboutCounter>

            </div>
        )
    }
}
