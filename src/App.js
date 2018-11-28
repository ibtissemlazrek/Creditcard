import React, { Component } from 'react';
import './App.css';
import capture from './images/Capture.PNG'
import image from './images/Capture1.PNG'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number:"",
      name:"",
      date:""

    }
  }
  changeNumber=(event)=>{
    if((event.target.value.length<17) && (!isNaN(event.target.value)) ){
    this.setState({   
    number:event.target.value
 })
  } 
  }
  changeName=(event)=>{
    if(event.target.value.length<21 && ! /[0-9]/g.test(event.target.value)){
    this.setState({
      name:event.target.value
    }) 
  }
  }
    changeDate=(event)=>{
      if((event.target.value.length<5)&&(!isNaN(event.target.value))){
      this.setState({
        date:event.target.value
      })
    }
    }
  render() {
    return (<div className="main">
      <div className="app">
        <div className="app-intro">
          <h1 className="app-title"> CREDIT CARD</h1>
        </div>

        <div className="app-logo">
          <img className="logo" src={capture} />
        </div>
        <div className="app-container">
          <div className="app-number">
            <p className="app-serie">{this.state.number.padEnd(16,'*').split('').map((x,i)=>{return i%4==0?' '+x:x})  }</p>

            <div className="rese">
              <div className="app-num">
                <p className="num"> 5422</p>

                <div className="app-date">
                  <div className="valid">
                  </div>
                  <div className="month">
                    <div className="validation">
                      <p className="para">VALID</p>
                      <p className="para">THRU</p>
                    </div>
                    <div className="years"><p className="para">
                      <span className="months">MONTH/YEAR</span></p>
                      <p className="num"> {this.state.date.substring(0,2).padEnd(2,'*')+"/"+this.state.date.slice(2,4).padEnd(2,'*')}</p> </div>
                  </div>
                </div>
              </div>
              <div className="logo"> <img width='100px' height='100px' className="log" src={image} /></div>

            </div>
            <p className="txt"> {this.state.name.padEnd(20,'*').toUpperCase()}</p>

          </div>
        </div>

      </div>
      <div className="users">
        <input type="text" className="input" placeholder=" CARD NUMBER" value={this.state.number} onChange={this.changeNumber}/>
        <input type="text" className="input" placeholder=" YOUR NAME"  value={this.state.name}  onChange={this.changeName}/>
        <input type="text" className="input" placeholder=" XX/YY"  value={this.state.date} onChange={this.changeDate}/>

      </div>
    </div>


    );
  }
}

export default App;
