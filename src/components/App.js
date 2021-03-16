import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import Navbar from './Navbar';
import Home from './Home';
import Quote from './Quote';
import '../App.css';

const App = () => {
  const [state, setState] = useState({ total: '', next: '', operation: '' });

  const handleClick = btnName => {
    setState(calculate(state, btnName));
  };

  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/calculator"
            render={() => (
              <div className="calculator">
                <Display result={`${state.total} ${state.operation} ${state.next}`} />
                <ButtonPanel clickHandler={handleClick} />
              </div>
            )}
          />
          <Route exact path="/" component={Home} />
          <Route exact path="/quote" component={Quote} />
        </Switch>
      </>
    </Router>
  );
};

export default App;
