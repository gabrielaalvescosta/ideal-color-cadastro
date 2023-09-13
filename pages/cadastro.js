import React, { useState } from 'react';
import StyledSelectComponent from '../src/app/components/select/Select'
import StyledInput from '@/app/components/input/Input';
import StyledButton from '@/app/components/botao/Botao';
import Titulo from '@/app/components/titulo/Titulo';
import DeviceWrapper from '@/app/components/mobile/SimulacaoDevice';
import Wrapper from '@/app/components/wrapper/Wrapper';
import NavigatorMenu from '@/app/components/navigator/NavigatorMenu'


const categoryOptions = [
  { label: 'Eletrônicos', value: 'electronics' },
  { label: 'Roupas', value: 'clothing' },
  { label: 'Alimentos', value: 'food' },
];

export default function ProductForm() {

  const [newProductInfo, setNewProductInfo] = useState({
    name: '',
    price: '',
    color: '',
    url: '',
    category: '',
    quantity: '',
  });

  let colorOptions = [];
  let categoryOptions = [];

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
        body: JSON.stringify(novoRegistro),
      });

      if (response.ok) {
        console.log('Registro criado com sucesso!');
      } else {
        console.error('Erro ao criar registro');
      }
    } catch (error) {
      console.error('Erro ao criar registro:', error);
    }
  };


  async function getServerSideProps() {

    try {
      const response = await fetch(`/idealcolors/api/coloracaopessoal`);
      if (!response.ok) {
        throw new Error('Erro ao buscar cartelas');
      }
      colorOptions = await response.json();
      return colorOptions;
    } catch (error) {
      console.error('Erro ao buscar categorias:', error);
      return [];
    }
  }

  return (
    <Wrapper>
    <DeviceWrapper>
      <Titulo h2="Cadastro de Produtos"/>
      <StyledInput
        label="Nome do Produto"
        name="name"
        value={newProductInfo.name}
        onChange={handleChange}
      />
      <StyledInput
        label="Preço do Produto"
        name="price"
        value={newProductInfo.price}
        onChange={handleChange}
      />
      <StyledSelectComponent
        label="Cartela de Cores"
        options={colorOptions}
        value={newProductInfo.color}
        onChange={handleChange}
      />
      <StyledInput
        label="URL do Produto"
        name="url"
        value={newProductInfo.url}
        onChange={handleChange}
      />
      <StyledSelectComponent
        label="Categoria do Produto"
        options={categoryOptions}
        value={newProductInfo.category}
        onChange={handleChange}
      />
      <StyledInput
        label="Quantidade Disponível"
        name="quantity"
        value={newProductInfo.quantity}
        onChange={handleChange}
      />
      <StyledButton label="Enviar Cadastro" onClick={handleSubmit} />
      <NavigatorMenu/>
    </DeviceWrapper>
    </Wrapper>
  );
}
