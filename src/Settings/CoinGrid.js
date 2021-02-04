import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../App/AppProvider";
import {Tile} from '../Shared/Tile'
import {SelectableTile} from "../Shared/Tile";

export const ConGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px; 
`;

export default function () {
  return (
    <AppContext.Consumer>
      {({ coinList }) => (
        <ConGridStyled>
          {Object.keys(coinList).map((coinKey) => (
            <SelectableTile> {coinKey} </SelectableTile>
          ))}
        </ConGridStyled>
      )}
    </AppContext.Consumer>
  );
}
