import React, { Component } from 'react';
import headshot from '../resources/ozan.jpeg';


class About extends Component {
    render() {
        const styles = {
            fontSize: '18px',
            lineHeight: '10px',
            color: 'black', minHeight: window.innerHeight,
            display: 'flex', justifyContent: 'center', flexDirection: 'column',
            backgroundImage: `url(${this.props.background})`,
            backgroundSize: "contain",
            backgroundRepeat: "repeat-x",
            margin: "0",
            backgroundAttachment: "fixed",
            backgroundPosition: "center"
        }

        return (
            <div className="container" id="about" style={styles}>
                <h1 className="text-center pb-2">About Me</h1>
                <div className="row align-items-center w-75 mx-auto">
                    <div className="col col-6" id="headshot-div">
                        <img className="mx-auto d-block rounded-circle" src={headshot} alt="headshot" />
                    </div>
                    <div className="col col-6 pt-2 bg-light rounded" id="about-me">
                        <p className="mx-auto text-center w-75">My name is Ozan Erdal, and I'm a fourth year Applied + Computational Mathematical Sciences (ACMS)
                            student at the University of Washington in Seattle. I'm a part of the Scientific Computing and Numerical Algorithms program within ACMS,
                            and I intend to graduate in 2020.</p>
                        <p className="mx-auto text-center w-75">Hobbies of mine include: gaming, coding, mixing music, and photography.
                            If I'm not in Seattle, then I'm probably driving down the sunny soCal coastline or trying out a new food spot.</p>
                    </div>
                </div>
                <h2 className="text-center pt-2"><a href="/resume.pdf" className="btn btn-light">My Resume</a></h2>
            </div>
        );
    }
}

/*
<img className="" src={headshot} alt="ozan erdal" />
*/

export default About;