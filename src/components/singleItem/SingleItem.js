import React, { useState } from 'react';
import GridContainer from '../../components/gridContainer/GridContainer'

function SingleItem(props) {
    const [checked, setChecked] = useState(false);
    return (
      <div className="SingleItem">
        <div className="details">
          <div className="left-item">
            <h1>{ props.name }</h1>
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
      </div>
    );
}
  
export default SingleItem;
  