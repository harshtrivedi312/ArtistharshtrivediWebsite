import React, { Component } from 'react'

import { Player, ControlBar, ForwardControl, ReplayControl, BigPlayButton } from 'video-react';
import { Button } from 'reactstrap';
// import card from '../Assets/img/placeholder.png';
// import { altImg } from '../Assets/img/placeholder.png';




const sources = {
    sintelTrailer: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
    bunnyTrailer: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
    bunnyMovie: 'http://media.w3.org/2010/05/bunny/movie.mp4',
    test: 'http://media.w3.org/2010/05/video/movie_300.webm'
};




export default class Tutorials extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            source: sources.bunnyMovie
        };

        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.load = this.load.bind(this);
        this.changeCurrentTime = this.changeCurrentTime.bind(this);
        this.seek = this.seek.bind(this);
        this.changePlaybackRateRate = this.changePlaybackRateRate.bind(this);
        this.changeVolume = this.changeVolume.bind(this);
        this.setMuted = this.setMuted.bind(this);
    }

    componentDidMount() {
        // subscribe state change
        this.player.subscribeToStateChange(this.handleStateChange.bind(this));
    }

    setMuted(muted) {
        return () => {
            this.player.muted = muted;
        };
    }

    handleStateChange(state) {
        // copy player state to this component's state
        this.setState({
            player: state
        });
    }

    play() {
        this.player.play();
    }

    pause() {
        this.player.pause();
    }

    load() {
        this.player.load();
    }

    changeCurrentTime(seconds) {
        return () => {
            const { player } = this.player.getState();
            this.player.seek(player.currentTime + seconds);
        };
    }

    seek(seconds) {
        return () => {
            this.player.seek(seconds);
        };
    }

    changePlaybackRateRate(steps) {
        return () => {
            const { player } = this.player.getState();
            this.player.playbackRate = player.playbackRate + steps;
        };
    }

    changeVolume(steps) {
        return () => {
            const { player } = this.player.getState();
            this.player.volume = player.volume + steps;
        };
    }

    changeSource(name) {
        return () => {
            this.setState({
                source: sources[name]
            });
            this.player.load();
        };
    }

    render() {
        return (
            <div id='tutorials'>
                <section id="portfolio" className="portfolio section-bg">
                    <div className="container">
                        <div className="section-title">
                            <h2>Tutorials</h2>
                            <p>Here are some Tutorials of real world Projects. by following this tutorials you
                            will aquire a basic to intermediate understanding of Look development
                            using some 3D and 2D tools.  </p>
                            <br></br>
                            <div>
                                <Player
                                    ref={player => {
                                        this.player = player;
                                    }}
                                    autoPlay
                                    fluid="true"
                                    poster="##"

                                >

                                    <source src={this.state.source} />

                                    <BigPlayButton position="center" />


                                    <ControlBar autoHide={false}>
                                        <ForwardControl seconds={10} order={3.2} />
                                        <ReplayControl seconds={10} order={2.2} />
                                    </ControlBar>

                                </Player>
                            </div>
                            <br></br>
                            <hr></hr>



                        </div>

                        <div>

                            <Button className="btn btn-primary">Go To Tutorials</Button>


                        </div>

                    </div>

                </section>

            </div >
        );
    }

}


