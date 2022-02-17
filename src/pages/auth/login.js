import React from 'react';
import Auth from '../../containers/Auth';
import Layout from '../../components/Layout';
import LoginForm from '../../components/auth/LoginForm';

const Login = () => {
  return (
    <Layout showNavbar={ false }>
        <Auth sectionName='Log In'>
            <LoginForm />
        </Auth>
    </Layout>
  );
}

export default Login;