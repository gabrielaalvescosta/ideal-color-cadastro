import React, { useState } from 'react';
import Titulo from '@/app/components/titulo/Titulo';
import StyledInput from '@/app/components/input/Input';
import DeviceWrapper from '@/app/components/mobile/SimulacaoDevice';
import Wrapper from '@/app/components/wrapper/Wrapper';
import NavigatorMenu from '@/app/components/navigator/NavigatorMenu'

export default function Login() {

    const [formData, setFormData] = useState({
        login: 'exemploNome',
        senha: 'exemploSenha123',
      });
    
      const handleChange = (e) => {
        const { login, value } = e.target;
        setFormData({
          ...formData,
          [login]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
      };
    

  return (
    <Wrapper>
      <DeviceWrapper>
    <Titulo h2="Login"/>
    <StyledInput
        label="Nome"
        name="name"
        value={formData.login}
        onChange={handleChange}
    />
    <StyledInput
        label="Senha"
        name="senha"
        type="password"
        value={formData.senha}
        onChange={handleChange}
    />
    <NavigatorMenu/>
    </DeviceWrapper>
    </Wrapper>
  )
}
