import React, { Component } from 'react';

class Projects extends Component {
    render() {
        const styles = {
            fontSize: '16px',
            color: 'black',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', minHeight: window.innerHeight,
            backgroundImage: `url(${this.props.background})`,
            backgroundSize: "contain",
            backgroundRepeat: "repeat-x",
            margin: 0,
            backgroundAttachment: "fixed",
            backgroundPosition: "center"
        }
        
        return (
            <div className="container" id="projects" style={styles}>
                <h1 className="text-center">Projects</h1>
                <div className="card-deck justify-content-center flex-wrap w-75 mx-auto">
                    <div className="card my-2 bg-light">
                        <div className="card-body">
                            <h2 className="card-title">Pi Alpha Phi - Fraternity Website</h2>
                            <p className="card-text">I designed and implemented the website for my chapter of the fraternity that I am a part of.</p>
                            <a className="card-link btn btn-outline-primary" href="http://uwpaphi.com" target="_blank">Check it Out!</a>
                            <a className="card-link btn btn-outline-success" href="https://github.com/oerdal/paphi" target="_blank">Github</a>
                        </div>
                        {/* <div className="card-footer">
                            <p className="text-muted">#Javascript, #React, #Bootstrap, #CSS, #WebDesign</p>
                        </div> */}
                    </div>
                    <div className="card my-2 bg-light">
                        <div className="card-body">
                            <h2 className="card-title">HelpSocial&reg;</h2>
                            <p className="card-text">Some very basic freelance work building an email signature based off client's design specifications. Built in HTML and CSS.</p>
                            <a className="card-link btn btn-outline-primary disabled text-muted" href="/help_social" target="_blank">Check it Out!</a>
                            <a className="card-link btn btn-outline-success disabled text-muted" href="" target="_blank">Github</a>
                        </div>
                        {/* <div className="card-footer">
                            <p className="text-muted">#HTML, #CSS, #Design, #Email, #Freelance</p>
                        </div> */}
                    </div>
                    <div className="card my-2 bg-light">
                        <div className="card-body">
                            <h2 className="card-title">LibCal Table List</h2>
                            <p className="card-text">Created the front end for a schedule generator for all room bookings made by my Fraternity in my UW's library system.</p>
                            <a className="card-link btn btn-outline-primary" href="http://live.uwpaphi.site" target="_blank">Check it Out!</a>
                            <a className="card-link btn btn-outline-success" href="https://github.com/aashrayanand/table_list" target="_blank">Github</a>
                        </div>
                        {/* <div className="card-footer">
                            <p className="text-muted">#Javascript, #React, #Django, #CSS, #AJAX, #Bootstrap, #FrontEnd, #WebDesign</p>
                        </div> */}
                    </div>
                    <div className="card my-2 bg-light">
                        <div className="card-body">
                            <h2 className="card-title">SeattleScouting.org <em>(In Progress)</em></h2>
                            <p className="card-text">Building an easily maintanable site for a catalog/reference guide for local Scouting.</p>
                            <a className="card-link btn btn-outline-primary" href="http://www.seattlescouting.org" target="_blank">Check it Out!</a>
                            <a className="card-link btn btn-outline-success disabled text-muted" href="" target="_blank">Github</a>
                        </div>
                        {/* <div className="card-footer">
                            <p className="text-muted">#Wix, #Freelance, #WebDesign</p>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;