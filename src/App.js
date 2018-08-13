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
      <div
        style={{
          backgroundImage: `url(${'https://images.pexels.com/photos/683402/pexels-photo-683402.jpeg?auto=compress&cs=tinysrgb&h=350'})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}>
        <Counter nama="Counter Atas" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Counter nama="Counter Bawah" />
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
      <center>
        <div
          style={{
            backgroundImage: `url(${'https://images.pexels.com/photos/531636/pexels-photo-531636.jpeg?auto=compress&cs=tinysrgb&h=350'})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}>
          <h1>{this.props.nama}</h1>
          <h1>{this.state.angka}</h1>

          <button onClick={this.tambah}>Tambah</button>
          <button onClick={this.kurang}>Kurang</button>
        </div>
      </center>
    );
  }
}
