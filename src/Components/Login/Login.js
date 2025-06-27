// Importar los módulos necesarios de la biblioteca React
import React from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // Importar los estilos CSS para el componente Login

// Definiendo el componente de función Login
const Login = () => {
  return (
    <div className="container" style={{ marginTop: "5%" }}>
      <div className="login-grid">
        <div className="login-text">
          <h1>Login</h1>
        </div>
        <div className="login-text1" style={{ textAlign: "left" }}>
          Are you a new member?{" "}
          <span>
            <Link to="/signup" style={{ color: "#2190FF" }}>
              Sign Up Here
            </Link>
          </span>
        </div>
        <div className="login-form">
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                required
                className="form-control"
                placeholder="Enter your password"
              />
            </div>

            <div className="btn-group">
              <button type="submit" className="btn btn-primary mb-2 mr-1">
                Login
              </button>
              <button type="reset" className="btn btn-danger mb-2">
                Reset
              </button>
            </div>

            <div style={{ marginTop: "10px" }}>
              <a href="#" style={{ textDecoration: "none", color: "black" }}>
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Exportar el componente Login para usarlo en otras partes de la aplicación
export default Login;
