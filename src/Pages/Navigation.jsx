import React, { Component } from 'react';

import NaviBar from '../components/Navbar/NaviBar';
import Footer from '../components/Navbar/Footer';

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <NaviBar></NaviBar>
                <Footer></Footer>
            </div>
        )
    }
}
