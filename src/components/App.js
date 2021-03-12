import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [state, setState] = useState({ total: '', next: '', operation: '' });

  const handleClick = btnName => {
    setState(calculate(state, btnName));
  };

  return (
    <>
      <Display result={`${state.total} ${state.operation} ${state.next}`} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};

export default App;
