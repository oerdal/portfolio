import React, { Component } from 'react';

class Parallax extends Component {
    render() {
        const styles = {
            height: window.innerHeight,
            backgroundImage: `url(${this.props.background})`,
            backgroundSize: "contain",
            backgroundRepeat: "repeat-x",
            margin: 0,
            backgroundAttachment: "fixed",
            backgroundPosition: "center"
        }

        return <div className="parallax-container" style={styles}></div>;
    }
}

export default Parallax;