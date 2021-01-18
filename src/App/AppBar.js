import React from "react";
import styled from "styled-components";

// rem: back ticks are template literals,
// allowing embedded expressions ${expression}
// Diff ways of styling in React https://www.youtube.com/watch?v=NMiEREulVLc
const Bar = styled.div`
  display: grid; // css grid
  grid-template-columns: 180px auto 100px 100px;
`;

export default function () {
  return (
    <Bar>
      <div>CryptoDash</div>
      <div></div>
      <div>Dashboard</div>
      <div>Settings</div>
    </Bar>
  );
}
