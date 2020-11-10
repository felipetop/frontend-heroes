import React, { useState } from 'react';

function Panel(props) {
    const [checked, setChecked] = useState(false);
    return (
      <div className="Item">
        <div>
          <img src={props.image}/>
          <div className="itemText"> 
            <h3>{props.name}</h3>
            <div>
              <input type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
            </div>
          </div>
        </div>
      </div>
    );
}
  
export default Panel;
  