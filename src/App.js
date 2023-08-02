import React, { Component } from 'react'
import Home from './Home'
export default class App extends Component {
  handler(){
    alert(this)
  }
   
  render() {
    return (
      <div>
        <input type="text" disabled="disabled" />
        <Home name="nik" id={79}/>
        <button onClick={this.handler}>click</button>
        
      </div>
    )
  }
}
