// Login.js
import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate } from 'react-router-dom';  // Importa useNavigate

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Inicializa useNavigate

  const handleLogin = () => {
    // Validar el usuario y la contraseña
    if (username === 'dante' && password === '123') {
      onLogin(username);
      // Redirige al usuario a la página principal después de iniciar sesión
      navigate('/');  // Puedes cambiar '/app' por la ruta que desees
    } else {
      alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <Form>
        <FormGroup>
          <Label for="username">Usuario</Label>
          <Input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Contraseña</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button color="primary" onClick={handleLogin}>
          Iniciar Sesión
        </Button>
      </Form>
    </div>
  );
};

export default Login;
