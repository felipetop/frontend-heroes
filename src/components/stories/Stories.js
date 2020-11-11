import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CheckboxHeart from '../checkboxHeart/CheckboxHeart';

function Stories(props) {
    const [checked, setChecked] = useState(false);
    return (
      <div className="Stories">
        <div>
          <div>
            <img src={props.image} alt={ props.name } description={props.description} />
          </div>
          <div className="itemText"> 
            <h3>{props.name}</h3>
          </div>
        </div>
      </div>
    );
}
  
export default Stories;
  