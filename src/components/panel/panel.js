import React, { Component } from 'react';
import './panel.scss';

class Panel extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <aside className="Panel">
          <div className="column grey">Encontrados 20 heróis</div>
          <div className="column">
            <div>Ordernar por nome - A/Z</div>
            <div>
              <input type="checkbox"/>
            </div>
            <div>Somente favoritos</div>
          </div>
        </aside>
      </div>
    );
  }
}
  
export default Panel;
  