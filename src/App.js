import React from 'react';
//import './App.css';
import Header from './Components/Header'
import Commands from './Components/Commands'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div className="App">
      <Header />
      <Commands />
    </div>
  );
}

export default App;
