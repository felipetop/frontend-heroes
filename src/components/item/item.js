import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Panel(props) {
    const [checked, setChecked] = useState(false);
    return (
      <div className="Item">
        <div>
          <NavLink to={{pathname: `/hero/${props.id}`}}>
            <img src={props.image}/>
          </NavLink>
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
  