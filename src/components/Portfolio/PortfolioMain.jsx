import React, { Component } from 'react'
import Portfolio3D from './Portfolio3D';
import Portfolio2D from './Portfolio2D';
import PortfolioVfx from './PortfolioVfx';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';



export default class Portfolio extends Component {

    render() {
        return (
            <div>
                <div className="section-bg">
                    <section id="portfolio" className="portfolio section-bg ">
                        <div className="container">
                            <div className="section-title">
                                <h2>Portfolio</h2>
                                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
                                Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                             Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                            </div>
                        </div>

                        <div className="row" data-aos="fade-up">
                            <div className="col-lg-12 d-flex justify-content-center">
                                <nav>
                                    <Tabs className="nav nav-pills" defaultActiveKey="All" id="uncontrolled-tab-example">
                                        <Tab className="nav-item" eventKey="All" title="All">

                                            <Portfolio3D></Portfolio3D>
                                            <Portfolio2D></Portfolio2D>
                                            <PortfolioVfx></PortfolioVfx>
                                        </Tab>
                                        <Tab className="nav-item" eventKey="3D" title="3D">
                                            <Portfolio3D></Portfolio3D>
                                        </Tab>
                                        <Tab className="nav-item" eventKey="2D" title="2D" >
                                            <Portfolio2D></Portfolio2D>
                                        </Tab>
                                        <Tab className="nav-item" eventKey="Vfx" title="Vfx" >
                                            <PortfolioVfx></PortfolioVfx>
                                        </Tab>
                                    </Tabs>
                                </nav>
                            </div>
                        </div>

                    </section>
                </div>
            </div>
        )
    }
}


























