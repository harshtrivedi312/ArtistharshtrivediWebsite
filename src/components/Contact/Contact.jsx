import React from 'react';
import '/artistharshtrivediwebsite/artistharshtrivedi/artistharshtrivedi/src/Assets/vendor/boxicons/css/boxicons.css';
import logo from '/artistharshtrivediwebsite/artistharshtrivedi/artistharshtrivedi/src/Assets/img/harsh_BW.png';
import '/artistharshtrivediwebsite/artistharshtrivedi/artistharshtrivedi/src/Assets/vendor/owl.carousel/assets/owl.carousel.min.css';



export default class Contactus extends React.Component {
  render() {
    return (
      <div>
        <section id="contact" className="contact section-bg">
          <div className="container">

            <div className="section-title">
              <h2>Contact Me:</h2>
              <p>Write a message if you liked my work or have any comments or just saying Hello.</p>
            </div>

            <div className="row" data-aos="fade-in">

              <div className="col-lg-5 d-flex align-items-stretch">

                <div className="info">
                  <div className="address">
                    <div>
                      <img id="contactImage" src={logo} alt="#"></img>
                    </div>
                    <br></br>
                    <i class='bx bxs-map'></i>
                    <h4>Location:</h4>
                    <p>Boston,USA</p>
                  </div>
                  <div className="social-links mt-3 text-center">
                    <h3><b>Social Connect:</b></h3>

                    <a href="https://twitter.com/harshtrivedi312"><i className="bx bxl-twitter"></i></a>
                    <a href="https://www.facebook.com/harshtrivedi312" ><i className="bx bxl-facebook"></i></a>
                    <a href="https://www.instagram.com/artistharshtrivedi/"><i className="bx bxl-instagram"></i></a>
                    <a href="https://www.behance.net/harshtrivedi2"><i className="bx bxl-behance"></i></a>
                    <a href="https://github.com/harshtrivedi312"><i className="bx bxl-github"></i></a>
                    <a href="https://www.linkedin.com/in/harsh-radheshaym-t-713330b6/"><i className="bx bxl-linkedin"></i></a>

                  </div>
                </div>

              </div>

              <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Name</label>
                      <input type="text" name="name" className="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                      <div className="validate"></div>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Email</label>
                      <input type="email" className="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                      <div className="validate"></div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Subject</label>
                    <input type="text" className="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                    <div className="validate"></div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Message</label>
                    <textarea className="form-control" name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
                    <div className="validate"></div>
                  </div>
                  <div className="mb-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>

            </div>

          </div>
          <br></br><br></br>
          <hr></hr>
          <br></br>
        </section>




      </div>
    )
  }
}
