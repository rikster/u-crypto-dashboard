import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../App/AppProvider";

export const ConGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr) ;
`;

export default function () {
    return <AppContext.Consumer>
        {
            ({coinList}) => <ConGridStyled>
                {Object.keys(coinList).map(coinKey =>
                    <div> {coinKey} </div>
                )}
            </ConGridStyled>
        }
    </AppContext.Consumer>
}

