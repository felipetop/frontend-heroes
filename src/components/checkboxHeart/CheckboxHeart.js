import React, { useState } from 'react';

function CheckboxHeart(props) {
    const [checked, setChecked] = useState(false);
    return (
      <div className={props.className}>
          <input 
            type="checkbox"
            class='red-heart-checkbox' type='checkbox'
            id={props.id}
            checked={!checked}
            onChange={() => setChecked(!checked)}
          />
          <label htmlFor={props.id}>
          </label>
      </div>
    );
}
  
export default CheckboxHeart;
  