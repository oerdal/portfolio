import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Parallax from './components/parallax';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import clouds from './resources/clouds.png';
import darkclouds from './resources/darkclouds.png';

class App extends React.Component {
    render() {
        return (
            <div>
                <Parallax background={clouds} text={"Ozan Erdal"} />
                <About background={darkclouds} />
                <Parallax background={clouds} text={"Keep Scrolling!"} />
                <Projects background={darkclouds} />
                <Parallax background={clouds} text={"I made these clouds too!"} />
                <Contact background={darkclouds} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

// style={{ backgroundImage: `url(${tree})`, backgroundSize: 'cover' }}