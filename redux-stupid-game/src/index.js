import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Setup Redux Store 
const initialState = {
  score: 0,
  players: [
    {
    name:'John',
    playerID: 1 
    },
    {
    name: 'Tom',
    playerID: 2
    }
  ]
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'YOU_WIN':
      return {
        ...state,
        score: state.score + 1
      }  
    case 'YOU_LOSE':
      return {
        ...state, 
        score: state.score - 1
      }
    default: 
      return state;    
  }
} 
const store = createStore(reducer);

// Provide that store to the App

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


