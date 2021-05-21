import React, { Component } from 'react'
import img from '../../Assets/img/portfolio1.jpg';


export default class AboutBio extends Component {
    render() {

        return (
            <div>
                <div className="container section-title">
                    <h2>Journey</h2>
                    <section id="about" className="about">
                        <div className="about-content">
                            <p>
                                <img src={img} alt="imnotfound" style={{ width: "400px", float: "left", padding: "15px" }} />
                                <b>H</b>arsh is a frelance 3D artist as well as a self taught full-stack web developer. Harsh has BFA in animation
                                        and visual effects and minor in technical direction from Savannah college of Art and Design, Georgia, USA. During
                                        his time at the university Harsh developed curiosity of web development and started digging deep into. After his
                                        graduation Harsh, in his free time studied human computer interface and the psychology of human computer interaction.
                                        He is both driven and self-motivated, and is constantly experimenting with new technologies and techniques.
                                         Harsh is very passionate about Web Development and intigration of 3D in to web for unreal user expreiance.
                                        He always strive to better as a developer, a 3D artist and the creative development community as a whole.
                            </p>
                        </div>
                        <p>
                            <b>Languages List</b><br></br>

 Harsh have been studying web development since 2014 and does develop in both JavaScript and Java, though he primarily use JavaScript.
Harsh is experienced in both front and back-end development, and is proficient in HTML5, CSS/CSS3, Bootstrap, SASS, XML, Materialize,
jQuery, Nodejs, AJAX, and SQL/noSQL, to name a few. Harsh is also proficient in many non-web-based languages, including but not limited
to Java, spring-Boot and C. Harsh is Profecient in Liberaries and Frameworks such as Angular and React. Harsh also worked on a few
Python projects, and have used the language to create one-time use tools for data processing and tool creation as well similar purposes.</p>

                    </section >
                </div>
            </div >
        )
    }
}
