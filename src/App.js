import logo from './logo.svg';
import './App.css';
import A from './A';
import B from './B';
import C from './C';
import { useReducer } from 'react';
import {init} from './init'
import appReducer from './appReducer';
import Provider from './appContext';
function App() {
  const [state,dispatch]=useReducer(appReducer,init)
  // const data={
  //   state,
  //   dispatch
  // }
  return (
    <div className="App">

      <Provider  value={{state,dispatch}}>
        <A />
        <B />
        <C />
      </Provider>
   
    </div>
  );
}

export default App;
