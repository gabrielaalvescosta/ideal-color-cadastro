import React from 'react';
import styled from 'styled-components';

const TituloH2 = styled.h2`
  color: white;
  width: 100%;
  background-color: #61aebb;
  font-family: Inter;
  font-size: 2em;
  text-align: center;
  padding: 3em 10px;
  margin: 0px
`;

export default function Titulo({ h2 }) {
  return <TituloH2>{ h2 }</TituloH2>;
}