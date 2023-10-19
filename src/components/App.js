import React from 'react';
import {connect} from 'react-redux';
import Favorites from './Favorites';
import Form from './Form';

import '../App.css';

function App(props) {
  console.log('appState', props.state)
  return (
    <div className="App" style={{
      backgroundColor: 'tan'
      }}>
      <h1>Activity Brainstorm</h1>
      <div style={{
        backgroundColor: 'ivory'
        }}>
        <Form/>

        <Favorites/>
      </div>
      
    </div>

    
  );
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps, {})(App);