import Big from 'big.js';

const operate = (num1, num2, operation) => {
  let res;
  switch (operation) {
    case 'x':
      res = Big(num1).times(Big(num2));
      break;

    case '+':
      res = Big(num1).plus(Big(num2));
      break;

    case '-':
      res = Big(num1).minus(Big(num2));
      break;

    case '%':
      res = Big(num1).mod(Big(num2));
      break;

    case '÷':
      res = Big(num1).div(Big(num2));
      break;

    default:
      res = 0;
      break;
  }

  return res;
};

export default operate;
