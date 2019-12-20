import React, { Component } from 'react';

const status = {
  RUNNING: 1,
  TIMEOUT: 2,
  DONE: 3
};

class Timer extends Component {
  intervalRef = React.createRef();

  handleSnooze = () => {
    this.setState({ value: 5, status: status.RUNNING }, () => {
      this.start();
    });
  };

  handleDismiss = () => {
    this.setState({ status: status.DONE });
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.seconds,
      status: status.RUNNING
    };
  }

  clearIntervalRef() {
    if (this.intervalRef.current) {
      clearInterval(this.intervalRef.current);
      this.intervalRef.current = null;
    }
  }

  componentDidMount() {
    this.start();
  }

  componentWillUnmount() {
    this.clearIntervalRef();
  }

  start() {
    this.intervalRef.current = setInterval(() => {
      const nextValue = this.state.value - 1;
      let nextStatus = status.RUNNING;
      if (nextValue <= 0) {
        this.clearIntervalRef();
        nextStatus = status.TIMEOUT;
      }
      this.setState({ value: nextValue, status: nextStatus });
    }, 1000);
  }

  renderSnapshot() {
    switch (this.state.status) {
      case status.RUNNING:
        return <div>{this.state.value}</div>;
      case status.TIMEOUT:
        return (
          <div>
            <span>{this.props.name} ⏰</span>
            <hr />
            <button onClick={this.handleSnooze}>Snooze</button>
            <button onClick={this.handleDismiss}>Dismiss</button>
          </div>
        );
      case status.DONE:
        return '--';
    }
  }

  render() {
    return (
      <div
        style={{
          fontSize: 24,
          margin: '20px 0',
          padding: 20,
          border: '1px solid black'
        }}
      >
        {this.renderSnapshot()}
      </div>
    );
  }
}

export default Timer;
