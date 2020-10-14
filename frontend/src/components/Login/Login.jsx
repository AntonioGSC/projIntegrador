import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import StoreContext from '../../components/Store/Context';
import { Form, Button, Spinner } from 'react-bootstrap';
import logo from '../../assets/images/LogoRecruIT.png';
import Input from '../Input/Input';
import Checkbox from '../Checkbox/Checkbox';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import Error from '../Helper/Error';
import { USER_LOGIN } from '../../APIs/APIs';

import './Login.css';

const UserLogin = () => {
  const email = useForm('email');
  const senha = useForm();
  const [erroLogin, setErroLogin] = useState(null);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();
  const { loading, request } = useFetch();

  async function login(email, senha) {
    const { url, options } = USER_LOGIN({ email, senha });
    const {acessoToken, error} = await request (url, options);
    return {acessoToken, error};
    //await request(url, options);
    //if (email.value === '1@gmail.com' && senha.value === '1') {
     // return { apptoken: '1234' };
    //}
    //return { error: 'Usuário ou senha inválido' };
  }

  async function onSubmit(e) {
    e.preventDefault();

    if (email.validate() && senha.validate()) {
      const { apptoken, error } = await login(email, senha);
      if (apptoken) {
        setToken(apptoken);
        return history.push('/');
      }
      setErroLogin(error);
    }
  }

  return (
    <div className="container-box-login">
      {/* className="container-image-background" está no Main.css */}
      <div className="container-image-background">
        <Form className="container form-box-login" onSubmit={onSubmit}>
          <h1 className="logo-login"><img className="logo-banner-login" src={logo} /></h1>
          <h2>Recru<span>IT</span></h2>
          <Input
            namelabel="Email"
            type="text"
            placeholder="Email"
            required
            {...email}
          />
          <Input
            namelabel="Senha"
            type="text"
            placeholder="Senha"
            required
            {...senha}
          />
          <Checkbox
            className="CheckBoxMin"
            type="checkbox"
            label="Lembrar minha senha"
          />
          {loading ? (
            <Button id="Entrar" variant="primary" disabled>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="sr-only">Carregando...</span>
            </Button>
          ) : (
              <Button id="btnEntrar" variant="primary" type="submit">
                Entrar
              </Button>
            )}
          <Error error={erroLogin} />
          <p id="links-login">
            <Link id="esqueci-senha" to="/login">
              Esqueci minha senha
          </Link>
          </p>
          <p id="links-login">
            Não tem uma conta ?{' '}
            <Link id="cadastro-login" to="/register">
              Cadastre-se
          </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default UserLogin;
