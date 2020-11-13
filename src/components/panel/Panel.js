import React from 'react';
import CheckboxHeart from '../checkboxHeart/CheckboxHeart';
import Toggle from '../toggle/Toggle'
import heroi from '../../assets/images/heroi/noun_Superhero_2227044.png'

function Panel(props) {
  return (
    <div className={props.className}>
      <aside className="Panel">
        <div className="column grey">Encontrados 20 heróis</div>
        <div className="column">
          <div className="pointer">
            <img className="hidden-mobile mr-15" src={heroi} alt="Icon Hero" />
            Ordernar <span className="hidden-mobile">por nome</span> - A/Z
            <Toggle className="ml-20 toggle" changeOrder={props.changeOrder} />
          </div>
          <div> <CheckboxHeart size={20} className="mr-15 heart" id="favoritos" action={props.showFavOnly} /> Somente favoritos</div>
        </div>
      </aside>
    </div>
  );
}
  
export default Panel;
  