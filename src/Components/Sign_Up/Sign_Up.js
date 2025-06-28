import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sign_Up.css";
import { API_URL } from "../../config";

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showerr, setShowerr] = useState('');
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    const response = await fetch(`${API_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
      }),
    });

    const json = await response.json();
    if (json.authtoken) {
      sessionStorage.setItem("auth-token", json.authtoken);
      sessionStorage.setItem("name", name);
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("phone", phone);
      navigate("/");
      window.location.reload();
    } else {
      if (json.errors) {
        setShowerr(json.errors[0].msg); // solo muestra el primer error
      } else {
        setShowerr(json.error);
      }
    }
  };

  return (
    <div className="container" style={{ marginTop: "5%" }}>
      <div className="signup-grid">
        <div className="signup-text">
          <h1>Registrarse</h1>
        </div>
        <div className="signup-text1" style={{ textAlign: "left" }}>
          ¿Ya eres miembro?{" "}
          <span>
            <Link to="/login" style={{ color: "#2190FF" }}>
              Iniciar sesión
            </Link>
          </span>
        </div>
        <div className="signup-form">
          <form onSubmit={register}>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                id="name"
                required
                className="form-control"
                placeholder="Ingresa tu nombre"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Teléfono</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                name="phone"
                id="phone"
                required
                className="form-control"
                placeholder="Ingresa tu número de teléfono"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                required
                className="form-control"
                placeholder="Ingresa tu correo electrónico"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                required
                className="form-control"
                placeholder="Ingresa tu contraseña"
              />
            </div>

            {showerr && <div style={{ color: "red", marginBottom: "10px" }}>{showerr}</div>}

            <div className="btn-group">
              <button
                type="submit"
                className="btn btn-primary mb-2 mr-1 waves-effect waves-light"
              >
                Enviar
              </button>
              <button
                type="reset"
                className="btn btn-danger mb-2 waves-effect waves-light"
                onClick={() => {
                  setName('');
                  setPhone('');
                  setEmail('');
                  setPassword('');
                  setShowerr('');
                }}
              >
                Restablecer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
