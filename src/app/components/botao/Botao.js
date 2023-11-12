import React from 'react';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const Botao = styled(Button)`
  && {
    background-color: #61aebb;
    color: white;
    border-radius: 10px;
    padding: 1em;
    width: 90%;
    cursor: pointer;
  }
`;

export default function StyledButton({ label, onClick }) {
  return (
    <Botao variant="contained" onClick={onClick}>
      {label}
    </Botao>
  );
}
