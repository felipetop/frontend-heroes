import React, { useState } from 'react';
import GridContainer from '../gridContainer/GridContainer'
import CheckboxHeart from '../checkboxHeart/CheckboxHeart'
import Stories from '../stories/Stories'
import storieImage from '../../assets/images/stories/example.jpg'
import book from '../../assets/images/book/Group.png'
import video from '../../assets/images/video/Shape.png'

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
                <div className="item">
                  <div>
                    <h5>Quadrinhos</h5>
                  </div>
                  <div>
                    <span className="icon">
                      <img src={book} />
                    </span>
                    <span>
                      { props.storiesListLength }
                    </span>
                  </div>
                </div>
                <div className="item">
                  <div>
                    <h5>Filmes</h5>
                  </div>
                  <div>
                    <span className="icon">
                      <img src={video} />
                    </span>
                    <span>
                      { props.seriesListLength }
                    </span>
                  </div>
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
  