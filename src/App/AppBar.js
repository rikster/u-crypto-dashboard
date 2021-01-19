import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "./AppProvider";

// rem: back ticks are template literals,
// allowing embedded expressions ${expression}
// Diff ways of styling in React https://www.youtube.com/watch?v=NMiEREulVLc
const Logo = styled.div`
  font-size: 1.5em;
`;

const Bar = styled.div`
  display: grid; // css grid
  margin-bottom 40px;
  grid-template-columns: 180px auto 100px 100px;
`;

const ControlButtonElem = styled.div`
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      text-shadow: 0px 0px 60px #03ff03;
    `}
`;

function ControlButton({ name }) {
  return (
    <AppContext.Consumer>
      {({ page, setPage }) => (
        <ControlButtonElem active={page === name} onClick={() => setPage(name)}>
          {toProperCase(name)}
        </ControlButtonElem>
      )}
    </AppContext.Consumer>
  );
}

function toProperCase(lower) {
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}

export default function () {
  return (
    <Bar>
      <Logo>CryptoDash</Logo>
      <div></div>
      <ControlButton active name="dashboard"></ControlButton>
      <ControlButton name="settings"></ControlButton>
    </Bar>
  );
}
