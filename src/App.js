import React, { Component } from 'react';
import './App.css';
import Home from './container/HomeContainer';
import About from './container/AboutContainer';
import Contact from './container/ContactContainer';

class App extends Component {
  state = {
    page: 'home'
  };
  kehome = () => {
    this.setState({ page: 'home' });
  };
  kekontak = () => {
    this.setState({ page: 'contact' });
  };
  keabout = () => {
    this.setState({ page: 'about' });
  };

  render() {
    return (
      <div>
        {/* <Header /> */}
        {this.state.page == 'home' && <Home />}
        {this.state.page == 'about' && <About />}
        {this.state.page == 'contact' && <Contact />}

        <button onClick={this.kehome}>home</button>
        <button onClick={this.kekontak}>kontak</button>
        <button onClick={this.keabout}>about</button>
      </div>
    );
  }
}

export default App;

// class Header extends Component {
//   render() {
//     return (
//       <div>
//         <Counter nama="lele" />
//         <Counter nama="ikan" />
//       </div>
//     );
//   }
// }

// class Counter extends Component {
//   state = {
//     angka: 0
//   };

//   tambah = () => {
//     this.setState({
//       angka: this.state.angka + 1
//     });
//   };

//   kurang = () => {
//     // if(this.state.angka<0){
//     //   alert"angka tidak boleh lebih kecil dari 0";
//     // }else{
//     this.setState({
//       angka: this.state.angka - 1
//       // }
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h1>{this.props.nama}</h1>
//         <h1>{this.state.angka}</h1>

//         <button onClick={this.tambah}>tambah</button>
//         <button onClick={this.kurang}>kurang</button>
//       </div>
//     );
//   }
// }
