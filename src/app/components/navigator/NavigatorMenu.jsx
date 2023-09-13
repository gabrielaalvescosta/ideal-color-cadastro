import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Person, Search, AddBox } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function MenuInferior() {

  const [value, setValue] = useState('');

  const handleChange = () => {
    setValue(value);
  }
 
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
        component={Link}
        to="/cadastro"
        label="Cadastro"
        value="cadastro"
        icon={<AddBox />}
      />


      <BottomNavigationAction
        component={Link}
        to="/login"
        label="Login"
        value="login"
        icon={<Person />}
      />

      <BottomNavigationAction
        component={Link}
        to="/produtos"
        label="Pesquisar"
        value="pesquisar"
        icon={<Search />}
      />
    </BottomNavigation>
  );
}
