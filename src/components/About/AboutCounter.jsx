import React, { Component } from 'react';


export default class Aboutcounter extends Component {
  render() {
    return (

      <div>
        <section id="about" className="about">
          <hr></hr>

          <div className="counter-area pb-70">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <div className="single-counter">
                    <h3>15</h3>
                    <p>Brand Videos</p>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6">
                  <div className="single-counter">
                    <h3>3</h3>
                    <p>Creative Filmmakers</p>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6">
                  <div className="single-counter">
                    <h3>
                      35
								<span className="traget">+</span>
                    </h3>
                    <p>Happy Clients</p>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6">
                  <div className="single-counter">
                    <h3>
                      10
								<span className="traget">+</span>
                    </h3>
                    <p>Awards Win</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>


    )
  }
}
