import React, { Component } from 'react';
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  margin-top: ${props => props.topMargin}px;
  margin-left: -${props => props.horizontalMarginItem}px;
  margin-right: -${props => props.horizontalMarginItem}px;
  grid-template-columns: repeat(${props => props.grids}, 1fr);
  >* {
    padding: 
    0px
    ${props => props.horizontalMarginItem}px 
    ${props => props.bottomMarginItem}px 
    ${props => props.horizontalMarginItem}px;
    max-width: ${props => props.maxWidth}px;
    width: 100%;
  }
  @media(max-width: 800px) {
    grid-template-columns: repeat(${props => props.mobileGrids}, 1fr);
    margin: 0px;
    margin-top: ${props => props.topMargin}px;
    >:nth-child(${props => props.mobileGrids}n+1){padding-left: 0px;}
    >:nth-child(${props => props.mobileGrids}n+${props => props.mobileGrids}){padding-right:0px;}
    >* {
      max-width: 100%;
      width: 100%;
      padding: 
      0px
      ${props => props.horizontalMarginItemMobile}px 
      ${props => props.bottomMarginItem}px 
      ${props => props.horizontalMarginItemMobile}px;
    }
    @media(max-width: 350px) {
      grid-template-columns: 1fr;
    }
  }
`;

function GridContainer(props) {
  return (
    <Container 
      grids={props.grids}
      horizontalMarginItem={props.horizontalMarginItem}
      bottomMarginItem={props.bottomMarginItem}gi
      mobileGrids={props.mobileGrids}
      topMargin={props.topMargin}
      maxWidth={props.maxWidth}
      horizontalMarginItemMobile={props.horizontalMarginItemMobile}
    >
      {props.children}
    </Container>
  );
}
  
export default GridContainer;
  