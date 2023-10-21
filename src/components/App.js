import React from 'react';
import {connect} from 'react-redux';
import Favorites from './Favorites';
import Form from './Form';

function App(props) {
  return (
    <div className="App">
      <h1>Activity Brainstorm</h1>
      <div className='container'>
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