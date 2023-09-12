import React from 'react';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';

const InputCadastro = styled(TextField)`
  && {
    width: 100%;
    margin-bottom: 16px;
    border-radius: 10px;
    background: #eee;
    color: #666;
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