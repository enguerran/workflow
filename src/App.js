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
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const time = this.state.time
    return time === 1 ? (
      <div>{this.state.time} second ellapsed</div>
    ) : (
      <div>{this.state.time} seconds ellapsed</div>
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
      </div>
    )
  }
}

export default App
