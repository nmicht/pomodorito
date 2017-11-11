import React, { Component } from 'react';
import Push from 'push.js';
import Pomodoro from './components/Pomodoro';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  handleTimerFinish(finishedTime) {
    Push.create(`Terminó tu ${finishedTime}`, {
      body: 'Da click aquí para ir al Pomodorito',
      icon: 'icon.png',
      timeout: 4000,
      onClick: function() {
        window.focus();
        this.close();
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pomodorito</h1>
        </header>
        <Pomodoro
             pomodoro={2}
             shortBreak={1}
             longBreak={3}
             onTimerFinish={this.handleTimerFinish}
        />
      </div>
    );
  }
}

export default App;
