import React from 'react';
// import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button'
import ModalVideo from 'react-modal-video';
import '../../Assets/vendor/boxicons/css/boxicons.css';
import { Link } from 'react-router-dom';




const Portfolio3D = () => {
    const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <section className="container portfolio-area ptb-100">
            {/* If you want to change the video need to update videoID */}

            <ModalVideo
                channel='youtube'
                isOpen={!isOpen}
                videoId='lNgMbJR2Nj8'
                onClose={() => setIsOpen(!isOpen)}
            />

            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="single-portfolio">
                            <div className="portfolio-image bg-1">
                                <div className="price-wrap">
                                    <Link href="#play-video">
                                        <a
                                            onClick={e => { e.preventDefault(); openModal() }}
                                            className="popup-youtube"
                                        >
                                            <i className='bx bx-play-circle'></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="portfolio-content">
                                <span>Action</span>
                                <h3>
                                    <Link to="/Breakdowncards">
                                        <h5>Fighting club</h5>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-portfolio">
                            <div className="portfolio-image bg-2">
                                <div className="price-wrap">
                                    <Link href="#play-video">
                                        <a
                                            onClick={e => { e.preventDefault(); openModal() }}
                                            className="popup-youtube"
                                        >
                                            <i class='bx bx-play-circle'></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="portfolio-content">
                                <span>Shooting</span>
                                <h3>
                                    <Link to="/portfolio-details">
                                        <h5>In the time of shooting</h5>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-portfolio">
                            <div className="portfolio-image bg-3">
                                <div className="price-wrap">
                                    <Link to="#play-video">
                                        <a
                                            onClick={e => { e.preventDefault(); openModal() }}
                                            className="popup-youtube"
                                        >
                                            <i class='bx bx-play-circle'></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="portfolio-content">
                                <span>Technology</span>
                                <h3>
                                    <Link to="/portfolio-details">
                                        <h5>Deep Sea</h5>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-portfolio">
                            <div className="portfolio-image bg-4">
                                <div className="price-wrap">
                                    <Link to="#play-video">
                                        <a
                                            onClick={e => { e.preventDefault(); openModal() }}
                                            className="popup-youtube"
                                        >
                                            <i class='bx bx-play-circle'></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="portfolio-content">
                                <span>Horror</span>
                                <h3>
                                    <Link to="/portfolio-details">
                                        <h5>Horror Night</h5>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="ShowMore" >
                        <Button variant="dark" >Show More Vfx Content</Button>{' '}
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Portfolio3D;