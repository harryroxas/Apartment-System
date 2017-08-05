import React, { Component } from 'react';

import Overview from './components/Overview'

class App extends Component {
  constructor(){
    super();
    this.state = {
      residents: [
        {name: 'Renzo'},
        {name: 'Jeff'},
        {name: 'David'},
        {name: 'Harold'}
      ],
      bills: [
        {
          type: "Apartment",
          month: "August",
          amount: 1800
        },

        {
          type: "Electricity",
          month: "August",
          amount: 300
        }
      ]
    }
  }

  componentDidMount = () => {
    const state = JSON.parse(localStorage.getItem('aptsys'));

    if (state != null) {
      this.setState({
        residents: state.residents,
        bills: state.bills
      });
    }
  };

  saveData = () => localStorage.setItem('aptsys', JSON.stringify(this.state));

  addResident = (name) => {
    this.setState({
      residents: [...this.state.residents, {name}]
    },
      () => { this.saveData() }    
    );
  }

  addBill = (type, month, amount) => {
    this.setState({
      bills: [...this.state.bills, {type, month, amount}]
    },
      () => { this.saveData() }
    );
  }

   deleteResident = name => {
    this.setState({
      residents: this.state.residents.filter(resident => {
        return resident.name !== name;
      })
    },
      () => { this.saveData() }
    );
  };

  render() {
    return (
      <div>
        <Overview 
          residents={this.state.residents}
          bills={this.state.bills} 
          addResident={this.addResident}
          addBill={this.addBill}
          deleteResident={this.deleteResident}
        />
      </div>
    );
  }
}

export default App;
