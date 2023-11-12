import React, { useState } from 'react';
import StyledSelectComponent from '../src/app/components/select/Select'
import StyledInput from '@/app/components/input/Input';
import StyledButton from '@/app/components/botao/Botao';
import Titulo from '@/app/components/titulo/Titulo';
import DeviceWrapper from '@/app/components/mobile/SimulacaoDevice';
import Wrapper from '@/app/components/wrapper/Wrapper';
import NavigatorMenu from '@/app/components/navigator/NavigatorMenu'


export default function ProductForm() {

  const handleEnviar = () => {
    setEnviado(true);
    const dataAtual = new Date();
    const formattedData = `${dataAtual.getFullYear()}-${(dataAtual.getMonth() + 1).toString().padStart(2, '0')}-${dataAtual.getDate().toString().padStart(2, '0')}`;
    setDataCadastro(formattedData);
  };

  const [newProductInfo, setNewProductInfo] = useState({
    name: '',
    email: '',
    senha: '',
    cartelaCores: [],
    dataCadastro: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProductInfo({ ...newProductInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/idealcolors/api/produto/cadastrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
       // body: JSON.stringify(novoRegistro),
      });

      if (response.ok) {
        console.log('Registro criado com sucesso!');
        onMudarPagina('login');
      } else {
        console.error('Erro ao criar registro');
      }
    } catch (error) {
      console.error('Erro ao criar registro:', error);
    }
  };



  return (
    <Wrapper>
    <DeviceWrapper>
      <Titulo h2="Cadastre-se"/>
      <StyledInput
        label="Nome completo"
        name="name"
        value={newProductInfo.name}
        onChange={handleChange}
      />
      <StyledInput
        label="Email"
        name="email"
        value={newProductInfo.price}
        onChange={handleChange}
      />
      <StyledInput
        label="Senha"
        name="senha"
        value={newProductInfo.price}
        onChange={handleChange}
      />
      <StyledButton label="Enviar Cadastro" onClick={handleSubmit} />
      <NavigatorMenu/>
    </DeviceWrapper>
    </Wrapper>
  );
}