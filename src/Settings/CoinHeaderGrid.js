import styled from "styled-components";
import { DeletableTile } from "../Shared/Tile";

export const CoinHeaderGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const CoinSymbol = styled.div`
  justify-self: right;
`;

const DeleteIcon = styled.div`
  justify-self: right;
  display: none;

  ${DeletableTile}:hover & {
    display: block;
    color: red;
  }
`;

function CoinHeaderGrid({ name, symbol, topsection }) {
  return (
    <CoinHeaderGridStyled>
      <div>{name}</div>
      {topsection ? (
        <DeleteIcon> X </DeleteIcon>
      ) : (
        <CoinSymbol>{symbol}</CoinSymbol>
      )}
    </CoinHeaderGridStyled>
  );
}

export default CoinHeaderGrid;
