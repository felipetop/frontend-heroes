import React, { useState } from 'react';
import GridContainer from '../../components/gridContainer/GridContainer'
import CheckboxHeart from '../../components/checkboxHeart/CheckboxHeart'

function SingleItem(props) {
    return (
      <section className="SingleItem">
        <div className="details">
          <div className="left-item">
            <header>
              <h1>{ props.name }</h1>
              <CheckboxHeart size={30} id={props.id} />
            </header>
            <p>{ props.description }</p>
            <div className="item-data">
              <div>
                Quadrinhos { props.storiesListLength }
              </div>
              <div>
                Filmes { props.seriesListLength }
              </div>
            </div>
          </div>
          <div className="right-item">
            <img src={ props.image }/>
          </div>
        </div>
        <div className="lancamentos">
          <h2>Últimos lançamentos</h2>
          <GridContainer grids={6} mobileGrids={3} topMargin={80} horizontalMarginItem={30} bottomMarginItem={50}>
            {props.storiesList.map(function (storie) {
              return (
                <div>{storie.name}</div>
              );
            })}
          </GridContainer>
        </div>
      </section>
    );
}
  
export default SingleItem;
  