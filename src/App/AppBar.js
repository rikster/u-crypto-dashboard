import React from "react";
import styled, {css} from "styled-components";

// rem: back ticks are template literals,
// allowing embedded expressions ${expression}
// Diff ways of styling in React https://www.youtube.com/watch?v=NMiEREulVLc

const Logo = styled.div`
  font-size: 1.5em;
`

const Bar = styled.div`
  display: grid; // css grid
  grid-template-columns: 180px auto 100px 100px;
`;

const ControlButtonElem = styled.div`
  cursor: pointer;
  ${props => props.active && css`
    color: blue;  
  `
  }
`

function ControlButton({name, active}) {
    return(
        <ControlButtonElem active={active}>
            {name}
        </ControlButtonElem>
    )
}

export default function () {
  return (
    <Bar>
      <Logo>CryptoDash</Logo>
      <div></div>
      <ControlButton active name="Dashboard"></ControlButton>
      <ControlButton name="settings">Settings</ControlButton>
    </Bar>
  );
}
