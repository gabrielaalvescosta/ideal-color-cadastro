import React from 'react';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';

const InputCadastro = styled(TextField)`
  && {
    background-color: #ddd;
    border-radius: 10px;
    padding: 0.25em;
    margin: 1em 10px;
    border: none;
    width: 90%
  }
`;

export default function StyledInput({ label, variant, name, value, handleChange }) {
  return (
    <InputCadastro
      label={label}
      variant={variant}
      name={name}
      value={value}
      onChange={handleChange}
    />
  );
}