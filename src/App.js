import React, { Component } from 'react';
import './App.css';

function getTaxRate(meso) {
  if(meso >= 100000000)
    return 6;
  else if(meso >= 25000000)
    return 5;
  else if(meso >= 10000000)
    return 4;
  else if(meso >= 5000000)
    return 3;
  else if(meso >= 1000000)
    return 2;
  else
    return 1;
}

function deduceTax(meso,tax) {
  return Math.round(meso * (100 - tax) / 100);
}

function coverTax(meso, tax) {
  return Math.round(meso * 100 / (100 - tax));
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {give: 0, take: 0, covered: 0};
    this.handleGiveChange = this.handleGiveChange.bind(this);
  }

  handleGiveChange(event) {
    var given = event.target.value;
    var tax = getTaxRate(given);
    this.setState({give: given, take: deduceTax(given, tax), covered: coverTax(given, tax)});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Meso Tax Calculator</h1>
        </header>
        <div className="Content">
          <label>จำนวนที่ซื้อขาย: &nbsp;</label><input id="give" value={this.state.give} type="number" onChange={this.handleGiveChange}></input>
          <label>ไม่ออกภาษีแล้วคนรับได้: &nbsp;</label><input id="get" value={this.state.take} type="number" disabled readonly="readonly"></input>
          <label>ถ้าออกภาษีคนขายต้องให้: &nbsp;</label><input id="get" value={this.state.covered} type="number" disabled readonly="readonly"></input>
        </div>
      </div>
    );
  }
}

export default App;
