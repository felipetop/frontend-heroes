import React from 'react';

function Toggle(props) {
    return (
      <div className={`Toggle ${props.className}`}>
        <input type="checkbox" id="switch" />
        <label htmlFor="switch"  onClick={() => props.changeOrder()} />
      </div>
    );
}
  
export default Toggle;
  