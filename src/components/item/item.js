import React, { Component } from 'react';

class Panel extends Component {
  render() {
    return (
      <div className="Item">
        <div>
          <img src={this.props.image}/>
          <div className="itemText"> 
            <h3>{this.props.name}</h3>
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
  