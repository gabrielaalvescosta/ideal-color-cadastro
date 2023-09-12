"use client"
import React from 'react';
import DeviceWrapper from '../../src/app/components/mobile/SimulacaoDevice'
import Cadastro from './pages/cadastro/Cadastro'
import Wrapper from './components/wrapper/Wrapper';
import NavigatorMenu from './components/navigator/NavigatorMenu'

export default function HomePage() {
  return (
    <Wrapper>
    <DeviceWrapper>
      <NavigatorMenu/>
      <Cadastro/>
    </DeviceWrapper>
    </Wrapper>
  );
}