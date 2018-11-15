import React, { Component } from 'react';

class Parallax extends Component {
    render() {
        const styles = {
            display: 'flex', justifyContent: 'center', flexDirection: 'column',
            height: window.innerHeight,
            backgroundImage: `url(${this.props.background})`,
            backgroundSize: "contain",
            backgroundRepeat: "repeat-x",
            margin: 0,
            backgroundAttachment: "fixed",
            backgroundPosition: "center"
        }

        return (
            <div className="parallax-container" style={styles}>
                <h1 className="text-center" id="parallax-text">{this.props.text}</h1>
            </div>
        );
    }
}

export default Parallax;