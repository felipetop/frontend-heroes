import React from 'react';

function Stories(props) {
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
  