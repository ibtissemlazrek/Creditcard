import React, { Component } from 'react';
import './App.css';
import capture from './images/Capture.PNG'
import image from './images/Capture1.PNG'
class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-intro">
          <h1 className="app-title"> CREDIT CARD</h1>
        </div>

        <div className="app-logo">
          <img className="logo" src={capture} />
        </div>
        <div className="app-container">
          <div className="app-number">
            <p className="app-serie"> 7253 3256 7895 1245</p>

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
                      <p className="num"> 11/50</p> </div>
                  </div>
                </div>
              </div>
              <div className="logo"> <img width='100px' height='100px' className="log" src={image} /></div>

            </div>
            <p className="txt"> CARDHOLDER</p>

          </div>
        </div>
      </div>



    );
  }
}

export default App;
