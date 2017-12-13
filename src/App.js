import React, { Component } from 'react';
import './App.css';
import Hero from './Hero';
// import Icons from './icon';

class App extends Component {
  render() {
    return (
      <div className="App">
          {
            this.props.heroes.map(function (hero) {
                return <Hero  key={hero.id}
                              title={hero.title}
                              src={hero.src}/>
            })
          }
      </div>
    );
  }
}

export default App;
