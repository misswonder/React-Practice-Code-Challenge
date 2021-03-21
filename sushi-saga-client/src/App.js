import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    balance: 100,
    eatenSushis: []
  }

  eatSushis = (sushi) => {
    if (this.state.balance < sushi.price || sushi.eaten) {
      return;
    }

    sushi.eaten = true 

    this.setState({
      eatenSushis: [...this.state.eatenSushis, sushi],
      balance: this.state.balance - sushi.price 
    })
  }

  addBalance = (e) => {
    e.preventDefault();

    const balance = parseInt(e.target.balance.value);
    this.setState({ balance: this.state.balance + balance });

    e.target.reset();
  }


  render() {
    return (
      <div className="app">
        <SushiContainer balance={this.state.balance} eatSushis={this.eatSushis}/>
        <Table balance={this.state.balance} eatenSushis={this.state.eatenSushis}/>
        <form onSubmit={this.addBalance}>
          <input type="number" name="balance" />
          <button type="submit">Add Balance</button>
        </form>
      </div>
    );
  }
}

export default App;