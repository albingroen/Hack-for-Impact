import React, { Component } from 'react';
import Logo from './logo.png';

class Start extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div style={{ padding: '50px' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <img src={Logo} style={{ width: '130px', height: '90px' }} alt="" />
          <h1 className="primary-font">React App</h1>
        </div>
        <div style={{ padding: '10px 0px 0px 30px' }}>
          <br />
          <p className="primary-font">
            Get started by editing{' '}
            <span
              style={{
                background: '#dddddd',
                borderRadius: '5px',
                padding: '8px',
                marginLeft: '8px',
              }}
            >
              pages/start/index.js
            </span>
          </p>
        </div>
        <Example />
      </div>
    );
  }
}

export default Start;

class Example extends Component {
  constructor() {
    super();
    this.state = {
      score: 1,
    };
  }

  increment() {
    this.setState({
      score: this.state.score + 1,
    });
  }

  decrement() {
    this.setState({
      score: this.state.score - 1,
    });
  }

  render() {
    return (
      <div style={{ padding: '30px' }}>
        <h2 className="primary-font">Example</h2>
        <br />
        <h3 className="primary-font">Score = {this.state.score}</h3>
        <br />
        <button
          onClick={() => this.increment()}
          style={{ marginRight: '15px' }}
          className="button-primary"
        >
          Add score
        </button>

        <button onClick={() => this.decrement()} className="button-default">
          Remove score
        </button>
      </div>
    );
  }
}
