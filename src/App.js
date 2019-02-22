import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import AddressModal from './modals/address';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Find Water Quality Near Me" />
        <AddressModal handleClose={() => {}} show={true}/>
      </div>
    );
  }
}

export default App;
