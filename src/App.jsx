import React from 'react';
import './App.css'
import { Button, Container, Row, Col} from 'reactstrap'
import {ToastContainer, toast} from "react-toastify";
import { Home } from './components/Home';
import { Notes } from './components/Notes';
import { AllNotes } from './components/AllNotes';
import { AddNotes } from './components/AddNotes';
import {Header} from "./components/Header";
import { Menus } from './components/Menus';
// Importa los componentes necesarios de react-router-dom
import { BrowserRouter as Router, Route,Routes,Navigate} from 'react-router-dom';
import { useState } from 'react';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
    toast.success(`¡Bienvenido, ${username}!`);
  };

  const handleLogout = () => {
    setUser(null);
    toast.info('Sesión cerrada correctamente.');
  };

  const PrivateRoute = ({ element, path }) => {
    return user ? (
      element
    ) : (
      <Navigate state={{ from: path }} replace to="/login" />
    );
  };

  return (
    <div>
      <Router>
        <ToastContainer />
        <Routes>
          <Route
            path="/login"
            element={<Login onLogin={handleLogin} />}
          />
          <Route
            path="/*"
            element={
              user ? (
                <Container>
                  <Header />
                  <Row>
                    <Col md={4}>
                      <Menus user={user} onLogout={handleLogout} />
                    </Col>
                    <Col md={8}>
                      <Routes>
                        <Route
                          path="/"
                          element={<Home user={user} />}
                        />
                        <Route
                          path="/add-note"
                          element={<AddNotes user={user} />}
                        />
                        <Route
                          path="/view-notes"
                          element={<AllNotes user={user} />}
                        />
                      </Routes>
                    </Col>
                  </Row>
                </Container>
              ) : (
                <Navigate replace to="/login" />
              )
            }
          />
          <Route
            path="/*"
            element={<Navigate replace to="/app" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;