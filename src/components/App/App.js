import React, { Component } from 'react';
import OptionsPanel from '../OptionsPanel'
import Board from '../Board'
import {createTiles} from '../../misc/utils';

import './App.css';

class App extends Component{
  constructor(){
    super(props)
    this.state = {
      numTiles: 36,
      playing: false,
      previousTileIndex: null,
      tiles: [],
      toBeCleared: null,
    }
  }
  
  startGame = () => {
    this.setState((prevState)=>({
      playing: true,
      previousTileIndex: null,
      toBeCleared: null,
      tiles: createTiles(numTiles),
    }))
  }  

  render() {
  return (
    <div className="App">
      <header className="App-header">
        Turbo-Matcher
      </header>
        <OptionsPanel playing={playing} numTiles={numTiles} starGame={startGame}  />
        <Board numTiles={numTiles} tiles={tiles} /> 
    </div>
  );

  }
}

export default App;
