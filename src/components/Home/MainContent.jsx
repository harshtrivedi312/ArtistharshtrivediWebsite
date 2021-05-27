import React, { Component } from 'react';
import Typical from 'react-typical'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



export default class MainContent extends Component {
    render() {
        return (
            <div>
                <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                    <div className="hero-container">
                        <h1>Harsh Trivedi</h1>
                        <p><span>I'm a</span>
                            <Typical
                                loop={Infinity}
                                Wrapper="b"
                                steps={[
                                    '3D Artist', 1500,
                                    'Motion Graphic Designer', 1500,
                                    'Full Stack Developer', 1500,
                                    'Creative Coder', 3000,


                                ]}
                            >
                            </Typical>

                        </p>
                    </div>

                </section>
            </div>
        )
    }
}
