import React, { Component } from 'react';
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  margin-left: -${props => props.horizontalMargin}px;
  margin-right: -${props => props.horizontalMargin}px;
  grid-template-columns: repeat(${props => props.grids}, 1fr);
  >* {
    margin: 
    0px
    ${props => props.horizontalMargin}px 
    ${props => props.bottomMargin}px 
    ${props => props.horizontalMargin}px;
  }
  @media(max-width: 800px) {
    grid-template-columns: repeat(${props => props.mobileGrids}, 1fr);
    margin: 0px;
  }
`;

class GridContainer extends Component {
  render() {
    return (
      <Container 
        grids={this.props.grids}
        horizontalMargin={this.props.horizontalMargin}
        verticalMargin={this.props.verticalMargin}
        bottomMargin={this.props.bottomMargin}
        mobileGrids={this.props.mobileGrids}
      >
        {this.props.children}
      </Container>
    );
  }
}
  
export default GridContainer;
  