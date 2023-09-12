import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Person, Search, AddBox } from '@mui/icons-material';

export default function MenuInferior() {
  const [value, setValue] = React.useState('cadastro');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      style={{
        position: 'absolute',
        bottom: 0,
        height: '10vh',
        width: 'inhherit',
        backgroundColor: '#5aa4ad',
      }}
    >
      <BottomNavigationAction
        label="Cadastro"
        value="cadastro"
        icon={<AddBox />}
      />
      <BottomNavigationAction
        label="Login"
        value="login"
        icon={<Person />}
      />
      <BottomNavigationAction
        label="Pesquisar"
        value="pesquisar"
        icon={<Search />}
      />
    </BottomNavigation>
  );
}
