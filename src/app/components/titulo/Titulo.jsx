import React from 'react';
import styled from 'styled-components';

// Crie um componente estilizado para o título h2
const TituloH2 = styled.h2`
  background-color: #ddd;
  color: #999;
  width: 100%;
  padding: 5%;
`;

// Exporte o componente estilizado
export default function Titulo({ titulo }) {
  return <TituloH2>Seu Título</TituloH2>;
}