import React, { Component } from 'react';
import './item.scss';
import image from './example.png';

class Panel extends Component {
  render() {
    return (
      <div className="Item">
        <div>
          <img src={image}/>
          <div className="itemText"> 
            <h3>Star - Lord</h3>
            <div>
              <input type="checkbox"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
  
export default Panel;
  