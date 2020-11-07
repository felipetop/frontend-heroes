import React, { Component } from 'react';
import styled from "styled-components";

const PanelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.grids}, 1fr);
  >* {
    margin: ${props => props.verticalMargin}px ${props => props.horizontalMargin}px;
  }
  >:nth-child(${props => props.grids}n+1) { margin-left: 0px;}
  >:nth-child(${props => props.grids}n+${props => props.grids}) { margin-right: 0px;}
`;

class Panel extends Component {
  render() {
    return (
      <PanelGrid 
        grids={this.props.grids}
        horizontalMargin={this.props.horizontalMargin}
        verticalMargin={this.props.verticalMargin}
      >
        {this.props.children}
      </PanelGrid>
    );
  }
}
  
export default Panel;
  