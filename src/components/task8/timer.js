import React, { Component } from 'react';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      seconds: 0,
      isActive: false
    };
  }

  handleClick1 = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };

  handleClick2 = () => {
    this.setState({
      seconds: 0,
      isActive: false
    });
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.isActive) {
        this.setState({ seconds: this.state.seconds + 1 });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="app" style={{width:"10%",height:"20%"}}>
        <div className="time">{this.state.seconds}s</div>
        <div className="row">
          <button
            className={`button button-primary button-primary-${
              this.state.isActive ? 'active' : 'inactive'
            }`}
            onClick={this.handleClick1}
          >
            {this.state.isActive ? 'Pause' : 'Start'}
          </button>
          <button className="button" onClick={this.handleClick2}>
            Restart
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;
