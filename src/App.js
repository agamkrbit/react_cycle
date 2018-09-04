import React, { Component } from 'react'
import './App.css';
import TestComponent from './TestComponent';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      stage : null,
      update: null,
    };
    this._mount = this._mount.bind(this);
    this._update = this._update.bind(this);
    this._unmount = this._unmount.bind(this);
  }
  _mount(){
    this.setState({
      stage : 'Mounted'
    })
  }
  _update(){
    this.setState({
      update : true,
      stage : 'Update'
    });
  }
  _unmount(){
    this.setState({
      stage : null,
      update : false
    });
  }
  componentDidMount(){
    console.log("*".repeat(10));
  }
  componentDidUpdate(){
    console.log("*".repeat(10));
  }
  render() {
    console.log("*".repeat(10));
    console.log('master component state : ',this.state);
    return (
      <div className="App">
        {!this.state.stage && <button onClick={this._mount}>Mount</button>}
        {this.state.stage && <button onClick={this._update}>Update</button>}
        {this.state.stage && <button onClick={this._unmount}>Unmount</button>}
        {this.state.stage && <TestComponent stage={this.state.stage}/>}
      </div>
    );
  }
}

export default App;
