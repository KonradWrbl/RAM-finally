import React, { Component } from 'react';
//import './App.css';
import Header from './Components/Header'
import Commands from './Components/Commands'
import Solution from './Components/Solution'
import InputTape from './Components/InputTape'
import Content from './Components/Content'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline';

const initialState = {
  data: [{
    adress: "43",
    command: "2",
    label: "reerewr",
    operandType: "2"
  }],
  input: 0
}

const reducer = (state = initialState, action) =>{
  switch(action.type) {
    case 'AKCJA':
      return {data: action.payload};
    case 'INPUT':
      return {input: action.payload}
    default:
      return state;
  }
}

const store = createStore(reducer)


class App extends Component {
  render() {
    console.log(store);
    return (
      <Provider store={store}>
        <Content />
        <Commands />
        <InputTape />
        <Solution />
      </Provider>
    );
  }
}

export default App;
