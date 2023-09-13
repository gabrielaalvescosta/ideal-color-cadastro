"use client"
import React from 'react';
import DeviceWrapper from './components/mobile/SimulacaoDevice'
import Cadastro from '../../pages/cadastro'
import Wrapper from './components/wrapper/Wrapper';
import NavigatorMenu from './components/navigator/NavigatorMenu'

export default function HomePage() {
  return (
    <Wrapper>
    <DeviceWrapper>
      <Cadastro/>
      <NavigatorMenu/>
    </DeviceWrapper>
    </Wrapper>
  );
}