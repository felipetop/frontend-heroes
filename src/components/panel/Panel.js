import React, { useState } from 'react';
import CheckboxHeart from '../checkboxHeart/CheckboxHeart';

function Panel(props) {
  const [checked, setChecked] = useState(false);
  return (
    <div className={props.className}>
      <aside className="Panel">
        <div className="column grey">Encontrados 20 heróis</div>
        <div className="column">
          <div className="pointer" onClick={() => props.changeOrder()}>Ordernar por nome - A/Z</div>
          <div> <CheckboxHeart size={20} className="mr-10" id="favoritos" action={props.showFavOnly} /> Somente favoritos</div>
        </div>
      </aside>
    </div>
  );
}
  
export default Panel;
  