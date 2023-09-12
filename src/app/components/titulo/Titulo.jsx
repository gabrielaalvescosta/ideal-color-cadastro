import React from 'react';
import styled from 'styled-components';

const TituloH2 = styled.h2`
  background-color: #ddd;
  color: #999;
  width: 100%;
  padding: 5%;
`;

export default function Titulo({ h2 }) {
  return <TituloH2>{ h2 }</TituloH2>;
}