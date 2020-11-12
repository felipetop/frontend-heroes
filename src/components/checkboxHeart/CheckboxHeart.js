import React from 'react';
import styled from "styled-components";
import disabledHeart from './Path@2x.png';
import activeHeart from './PathDisabled2@2x.png';

const HeartCheckbox = styled.div`
.heart-checkbox {
  .red-heart-checkbox {
      display: none !important;
      + {
          label {
              -webkit-touch-callout: none;
              -webkit-user-select: none;
              -khtml-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
              padding-left: ${props => props.size}px;
              transition: all 0.2s;
              &:before {
                  width: ${props => props.size}px;
                  height: ${props => props.size}px;
                  content: "";
                  position: absolute;
                  background-image: url(${activeHeart});
                  background-size: ${props => props.size}px ${props => props.size}px;
                  margin-left: -${props => props.size}px;
                  margin-top: -2px;
              }
              &:hover {
                  &:before {
                      transform: scale(1.05);
                  }
              }
          }
      }
      &:checked {
          + {
              label {
                  &:before {
                      height: ${props => props.size}px;
                      width: ${props => props.size}px;
                      background-image: url(${disabledHeart});
                      background-size: ${props => props.size}px ${props => props.size}px;
                  }
              }
          }
      }
  }    
}
`;

function CheckboxHeart(props) {
    return (
      <div className={props.className}>
          <HeartCheckbox size={props.size}>
            <div className="heart-checkbox">
              <input 
                type="checkbox"
                className='red-heart-checkbox'
                id={props.id}
                onChange={() => props.action(props.hero)}
              />
              <label htmlFor={props.id}>
              </label>
            </div>
          </HeartCheckbox>
      </div>
    );
}
  
export default CheckboxHeart;
  