import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class Timer extends Component {
  state = {
    time: 0
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(state => ({ ...state, time: state.time + 1 }))
    }, 1)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const time = this.state.time
    return time === 1 ? (
      <div>{this.state.time} millisecond ellapsed</div>
    ) : (
      <div>{this.state.time} milliseconds ellapsed</div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome</h1>
        </header>
        <p className="App-intro">Do something cool!</p>
        <Timer />
      </div>
    )
  }
}

export default App
