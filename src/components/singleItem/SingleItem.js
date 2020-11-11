import React, { useState } from 'react';
import GridContainer from '../gridContainer/GridContainer'
import CheckboxHeart from '../../components/checkboxHeart/CheckboxHeart'
import Stories from '../../components/stories/Stories'
import storieImage from '../../assets/images/stories/example.jpg'

function SingleItem(props) {
    return (
      <div className={props.className}>
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
              <img src={ props.image } alt={ props.name } description={props.description} />
            </div>
          </div>
          <div className="lancamentos">
            <h2>Últimos lançamentos</h2>
            <GridContainer maxWidth={150} grids={6} mobileGrids={2} topMargin={80} horizontalMarginItemMobile={5} bottomMarginItem={50}>
              {props.storiesList.map(function (storie) {
                return (
                  <Stories image={storieImage} name={storie.name} />
                );
              })}
            </GridContainer>
          </div>
        </section>
      </div>
    );
}
  
export default SingleItem;
  