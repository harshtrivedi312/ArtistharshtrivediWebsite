import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

export default class BlogMain extends Component {



    render() {
        return (



            <div>
                <section id="blog" className="blog section-bg">
                    <div className="container">
                        <div className="section-title">
                            <h2>Blog</h2>
                        </div>
                        <Jumbotron>
                            <h1>Hello, world!</h1>
                            <p>
                                This is a simple hero unit, a simple jumbotron-style component for calling
                                extra attention to featured content or information.
                            </p>
                            <p>
                                <Button variant="primary">Learn more</Button>
                            </p>
                        </Jumbotron>
                        <br></br>
                        <Jumbotron>
                            <h1>Hello, world!</h1>
                            <p>
                                This is a simple hero unit, a simple jumbotron-style component for calling
                                extra attention to featured content or information.
                            </p>
                            <p>
                                <Button variant="primary">Learn more</Button>
                            </p>
                        </Jumbotron>

                        <div class="row">
                            <div class="col-sm-6">
                                <div class="card">
                                    <div class="card-body">
                                        <form>
                                            <h3>Login to write your blog or comment on blogs</h3>
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Email address</label>
                                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputPassword1">Password</label>
                                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                            </div>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                <label class="form-check-label" for="exampleCheck1">Check me out from NewsLetter</label>
                                            </div>
                                            <br></br>
                                            <button type="submit" class="btn btn-primary" >Log In</button>{' '}

                                            <button type="submit" class="btn btn-primary" >Sign Up</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Read My Blogs </h5>
                                        <p class="card-text">
                                            here are some of my on going projects in detils as well as industry latest tech and news

                                        </p>
                                        <Link to={'/Blog/Blogpage'}>
                                            <a href="#blogPage" class="btn btn-primary">Go to MyBlogs</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div >
        )
    }
}
