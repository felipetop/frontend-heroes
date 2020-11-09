import React, { Component } from 'react';
import styled from "styled-components";

const PanelGrid = styled.div`
  display: grid;
  margin-left: -${props => props.horizontalMargin}px;
  margin-right: -${props => props.horizontalMargin}px;
  grid-template-columns: repeat(${props => props.grids}, 1fr);
  @media(max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  >* {
    margin: 
    0px
    ${props => props.horizontalMargin}px 
    ${props => props.bottomMargin}px 
    ${props => props.horizontalMargin}px;
  }
`;

class Panel extends Component {
  render() {
    return (
      <PanelGrid 
        grids={this.props.grids}
        horizontalMargin={this.props.horizontalMargin}
        verticalMargin={this.props.verticalMargin}
        bottomMargin={this.props.bottomMargin}
      >
        {this.props.children}
      </PanelGrid>
    );
  }
}
  
export default Panel;
  