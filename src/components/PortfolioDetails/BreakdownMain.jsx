import React, { Component } from 'react'
import Breakdowncards from './Breakdowncards'

export default class BreakdownMain extends Component {
    render() {
        return (
            <div className="section-bg">
                <section id="breakdown" className="breakdown section-bg ">
                    <div className="container">
                        <div className="section-title">
                            <h2>Breakdowns</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
                            Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                             Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>
                    </div>

                    <div className="row" data-aos="fade-up">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="breakdown-flters">
                                <li data-filter="*" className="filter-active">All</li>
                                <li data-filter=".filter-app">2D</li>
                                <li data-filter=".filter-card">3D</li>
                                <li data-filter=".filter-web">VFX</li>
                            </ul>
                        </div>
                    </div>
                    <Breakdowncards></Breakdowncards>
                </section>
            </div>
        )
    }
}
