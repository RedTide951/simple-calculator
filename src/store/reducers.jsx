import {
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  ADD_MEMORY,
  MEMORY_CLEAR,
  MEMORY_RECALL,
  EQUATION,
} from './actions.jsx';

export const initialState = {
  total: 0,
  operation: '+',
  memory: 0,
  operativeMemory: 0,
};

const calculateResult = (num1, num2, operation) => {
  console.log(num1);
  console.log(num2);

  switch (operation) {
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    case '/': {
      if (num2 === 0) {
        return 'nokitty :)';
      }
      return num1 / num2;
    }
    default:
      return;
  }
};

export const reducer = (state, action) => {
  switch (action.type) {
    case APPLY_NUMBER:
      return {
        ...state,
        total: Number(String(state.total) + String(action.payload)),
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
        operativeMemory: state.total,
        total: 0,
      };

    case CLEAR_DISPLAY:
      return {
        ...state,
        total: 0,
      };

    case ADD_MEMORY:
      return {
        ...state,
        memory: action.payload,
      };

    case MEMORY_CLEAR:
      return {
        ...state,
        memory: 0,
      };

    case MEMORY_RECALL:
      return {
        ...state,
        total: state.memory,
      };

    case EQUATION:
      return {
        ...state,
        total: calculateResult(
          Number(state.operativeMemory),
          Number(state.total),
          state.operation
        ),
      };

    default:
      return state;
  }
};
