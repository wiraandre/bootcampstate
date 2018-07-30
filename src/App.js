import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;

class Header extends Component {
  render() {
    return (
      <div>
        <Counter nama="lele" />
        <Counter nama="ikan" />
      </div>
    );
  }
}

class Counter extends Component {
  state = {
    angka: 0
  };

  tambah = () => {
    this.setState({
      angka: this.state.angka + 1
    });
  };

  kurang = () => {
    // if(this.state.angka<0){
    //   alert"angka tidak boleh lebih kecil dari 0";
    // }else{
    this.setState({
      angka: this.state.angka - 1
      // }
    });
  };

  render() {
    return (
      <div>
        <h1>{this.props.nama}</h1>
        <h1>{this.state.angka}</h1>

        <button onClick={this.tambah}>tambah</button>
        <button onClick={this.kurang}>kurang</button>
      </div>
    );
  }
}
