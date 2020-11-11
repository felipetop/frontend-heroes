import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CheckboxHeart from '../checkboxHeart/CheckboxHeart';

function Item(props) {
    const [checked, setChecked] = useState(false);
    return (
      <div className="item">
        <div>
          <NavLink to={{pathname: `/hero/${props.id}`}}>
            <img src={props.image}/>
          </NavLink>
          <div className="itemText"> 
            <h3>{props.name}</h3>
            <div>
              <CheckboxHeart id={props.id} />
            </div>
          </div>
        </div>
      </div>
    );
}
  
export default Item;
  