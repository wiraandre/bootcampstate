import React, { Component } from 'react';

export default class Napigasi extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.napigate('home');
          }}>
          home
        </button>
        <button
          onClick={() => {
            this.props.napigate('about');
          }}>
          kontak
        </button>
        <button
          onClick={() => {
            this.props.napigate('contact');
          }}>
          about
        </button>
      </div>
    );
  }
}
