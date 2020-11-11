import React, { Component } from 'react';
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  margin-top: ${props => props.topMargin}px;
  margin-left: -${props => props.horizontalMarginItem}px;
  margin-right: -${props => props.horizontalMarginItem}px;
  grid-template-columns: repeat(${props => props.grids}, 1fr);
  >* {
    margin: 
    0px
    ${props => props.horizontalMarginItem}px 
    ${props => props.bottomMarginItem}px 
    ${props => props.horizontalMarginItem}px;
  }
  @media(max-width: 800px) {
    grid-template-columns: repeat(${props => props.mobileGrids}, 1fr);
    margin: 0px;
  }
`;

function GridContainer(props) {
  return (
    <Container 
      grids={props.grids}
      horizontalMarginItem={props.horizontalMarginItem}
      bottomMarginItem={props.bottomMarginItem}
      mobileGrids={props.mobileGrids}
      topMargin={props.topMargin}
    >
      {props.children}
    </Container>
  );
}
  
export default GridContainer;
  