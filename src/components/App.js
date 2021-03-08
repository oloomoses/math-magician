import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(btnName) {
    calculate(this.state, btnName);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <>
        <Display result={`${total} ${operation} ${next}`} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
