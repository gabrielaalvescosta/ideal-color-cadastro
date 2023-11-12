"use client"
import React, { useState } from 'react';
import DeviceWrapper from './components/mobile/SimulacaoDevice'
import Cadastro from '../../pages/cadastro'
import Wrapper from './components/wrapper/Wrapper';
import NavigatorMenu from './components/navigator/NavigatorMenu'
import Login from '../../pages/login';



export default function HomePage() {

  const [paginaAtual, setPaginaAtual] = useState('inicio');

  const handleMudarPagina = (novaPagina) => {
    setPaginaAtual(novaPagina);
  };

  return (
    <Wrapper>
    <DeviceWrapper>
        {paginaAtual === 'cadastro' && <Cadastro onMudarPagina={handleMudarPagina} />}
        {paginaAtual === 'login' && <Login onMudarPagina={handleMudarPagina} />}
        <NavigatorMenu onMudarPagina={handleMudarPagina} />
    </DeviceWrapper>
    </Wrapper>
  );
}