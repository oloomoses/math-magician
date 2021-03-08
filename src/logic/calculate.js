import operate from './operate';

const calculate = (data, btnName) => {
  let { total = '', next = '', operation = '' } = data;
  switch (btnName) {
    case '+/-':
      total *= -1;
      next *= -1;
      break;

    case 'AC':
      total = '';
      next = '';
      operation = '';
      break;

    case '9':
    case '8':
    case '7':
    case '6':
    case '5':
    case '4':
    case '3':
    case '2':
    case '1':
    case '0':
    case '.':
      if (operation === '' || !operation) {
        total = `${total} ${btnName}`;
      } else {
        next = `${next} ${btnName}`;
      }
      break;

    case '=':
      return operate(total, next, operation);

    default:
      operation = btnName;
      break;
  }

  return { total, next, operation };
};

export default calculate;
