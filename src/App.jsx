import React from 'react';
import { useReducer } from 'react';
import TotalDisplay from './components/TotalDisplay.jsx';
import CalcButton from './components/CalcButton.jsx';
import { reducer, initialState } from './store/reducers.jsx';
import {
  applyNumber,
  changeOperation,
  clearDisplay,
  addMemory,
  memoryClear,
  memoryRecall,
  equation,
} from './store/actions.jsx';

function App() {
  const [state, dispatchState] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation: </b>
                {state.operation}
              </span>
              <span id="memory">
                <b>Memory: </b>
                {state.memory}
              </span>
            </div>
            <div className="row">
              <CalcButton
                value={'M+'}
                onClick={() => dispatchState(addMemory(state.total))}
              />
              <CalcButton
                value={'MR'}
                onClick={() => dispatchState(memoryRecall())}
              />
              <CalcButton
                value={'MC'}
                onClick={() => dispatchState(memoryClear())}
              />
            </div>
            <div className="row">
              <CalcButton
                value={1}
                onClick={() => dispatchState(applyNumber(1))}
              />
              <CalcButton
                value={2}
                onClick={() => dispatchState(applyNumber(2))}
              />
              <CalcButton
                value={3}
                onClick={() => dispatchState(applyNumber(3))}
              />
            </div>

            <div className="row">
              <CalcButton
                value={4}
                onClick={() => dispatchState(applyNumber(4))}
              />
              <CalcButton
                value={5}
                onClick={() => dispatchState(applyNumber(5))}
              />
              <CalcButton
                value={6}
                onClick={() => dispatchState(applyNumber(6))}
              />
            </div>

            <div className="row">
              <CalcButton
                value={7}
                onClick={() => dispatchState(applyNumber(7))}
              />
              <CalcButton
                value={8}
                onClick={() => dispatchState(applyNumber(8))}
              />
              <CalcButton
                value={9}
                onClick={() => dispatchState(applyNumber(9))}
              />
            </div>
            <div className="row">
              <CalcButton
                value={'+'}
                onClick={() => dispatchState(changeOperation('+'))}
              />
              <CalcButton
                value={0}
                onClick={() => dispatchState(applyNumber(0))}
              />
              <CalcButton
                value={'-'}
                onClick={() => dispatchState(changeOperation('-'))}
              />
            </div>
            <div className="row">
              <CalcButton
                value={'*'}
                onClick={() => dispatchState(changeOperation('*'))}
              />
              <CalcButton
                value={'/'}
                onClick={() => dispatchState(changeOperation('/'))}
              />
              <CalcButton
                value={'CE'}
                onClick={() => dispatchState(clearDisplay())}
              />
            </div>

            <div className="row eq_button">
              <CalcButton
                value={'='}
                onClick={() => dispatchState(equation())}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
