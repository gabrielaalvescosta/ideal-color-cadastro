import React from 'react';
import { useRouter } from 'next/router';
import Titulo from '@/app/components/titulo/Titulo';
import StyledInput from '@/app/components/input/Input';


export default function Login() {

    const [formData, setFormData] = useState({
        login: 'exemploNome',
        senha: 'exemploSenha',
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
        // Aqui você pode adicionar lógica para enviar os dados de login
      };
    

  return (
    <div>
    <Titulo h2="Login"/>
    <StyledInput
        label="Nome do Produto"
        name="name"
        value={formatData.login}
        onChange={handleChange}
    />
    <StyledInput
        label="Senha"
        name="senha"
        type="password"
        value={formatData.senha}
        onChange={handleChange}
    />
    </div>
  )
}
