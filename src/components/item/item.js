import React from 'react';
import { NavLink } from 'react-router-dom';
import CheckboxHeart from '../checkboxHeart/CheckboxHeart';

function Item(props) {
    return (
      <div className="Item">
        <div>
          <NavLink to={{pathname: `/hero/${props.hero.id}`}}>
            <img src={props.hero.thumbnail.path+'.'+props.hero.thumbnail.extension} alt={ props.hero.name } description={props.hero.description} />
          </NavLink>
          <div className="itemText"> 
            <h3>{props.hero.name}</h3>
            <div>
              <CheckboxHeart action={props.favItem} size={20} id={props.hero.id} hero={props.hero} />
            </div>
          </div>
        </div>
      </div>
    );
}
  
export default Item;
  