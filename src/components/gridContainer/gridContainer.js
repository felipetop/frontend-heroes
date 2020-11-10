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

function GridContainer(props) {
  return (
    <Container 
      grids={props.grids}
      horizontalMargin={props.horizontalMargin}
      verticalMargin={props.verticalMargin}
      bottomMargin={props.bottomMargin}
      mobileGrids={props.mobileGrids}
    >
      {props.children}
    </Container>
  );
}
  
export default GridContainer;
  