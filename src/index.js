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
                <Parallax background={clouds} />
                <About background={darkclouds} />
                <Parallax background={clouds} />
                <Projects background={darkclouds} />
                <Parallax background={clouds} />
                <Contact background={darkclouds} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

// style={{ backgroundImage: `url(${tree})`, backgroundSize: 'cover' }}