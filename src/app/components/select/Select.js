import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import styled from 'styled-components';

const StyledSelectWrapper = styled(FormControl)`
  && {
    width: 100%;
  }
`;

const StyledSelect = styled(Select)`
  && {
    background-color: #ffffff; 
    width: 100%;
    padding: 10px;
  }
`;

// Exporte o componente estilizado
export default function StyledSelectComponent({ label, options, value, onChange }) {
  return (
    <StyledSelectWrapper>
      <InputLabel>{label}</InputLabel>
      <StyledSelect value={value} onChange={onChange}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </StyledSelect>
    </StyledSelectWrapper>
  );
}
