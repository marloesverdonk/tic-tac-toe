import React from 'react';
import './App.css';
import Game from './components/Game'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1> Tic Tac Toe </h1>
        </header>
        <main>
        <Game />
        </main>
      </div>
    );
  }
}

export default App;
