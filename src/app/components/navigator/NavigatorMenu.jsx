import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Person, Search, AddBox } from '@mui/icons-material';
import Link from 'next/link';

export default function NavigatorMenu() {

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
        width: '100%',
        backgroundColor: '#61AEBB',
      }}
    >

      <BottomNavigationAction
        component={Link}
        href="/cadastro"
        label="Cadastro"
        value="cadastro"
        icon={<AddBox />}
      />


      <BottomNavigationAction
        component={Link}
        href="/login"
        label="Login"
        value="login"
        icon={<Person />}
      />

      <BottomNavigationAction
        component={Link}
        href="/produtos"
        label="Pesquisar"
        value="pesquisar"
        icon={<Search />}
      />
    </BottomNavigation>
  );
}
