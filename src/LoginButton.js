import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';
import './LoginButton.css';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
  return <Button variant="success" onClick = {()=>loginWithRedirect()}>Log in </Button>;
};

export default LoginButton;

