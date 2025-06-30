import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleClick = () => setClick(!click);

  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.clear();
    setIsLoggedIn(false);
    setEmail('');
    setUsername('');
    window.location.reload();
  };

  const handleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("email");
    if (storedEmail) {
      setIsLoggedIn(true);
      setUsername(storedEmail.split('@')[0]);
    }
  }, []);

  // Cierra el dropdown al hacer clic fuera
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <nav>
      <div className="nav__logo">
        <Link to="/">
          StayHealthy <i style={{ color: '#2190FF' }} className="fa fa-user-md"></i>
        </Link>
        <span>.</span>
      </div>

      <div className="nav__icon" onClick={handleClick}>
        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
      </div>

      <ul className={click ? 'nav__links active' : 'nav__links'}>
        <li className="link"><Link to="/">Home</Link></li>
        <li className="link"><Link to="/instant-consultation">Appointments</Link></li>
        <li className="link"><Link to="/healthblog">Health Blog</Link></li>
        <li className="link"><Link to="/reviews">Reviews</Link></li>

        {isLoggedIn ? (
          <li className="link user-dropdown" ref={dropdownRef}>
            <span onClick={handleDropdown} style={{ cursor: 'pointer' }}>
              Welcome, {username} <i className="fa fa-caret-down"></i>
            </span>
            {showDropdown && (
              <div className="dropdown-menu">
                <Link to="/profile" className="dropdown-item">Mi perfil</Link>
                <Link to="/reports" className="dropdown-item">Reports</Link>
                <button className="dropdown-item logout-btn" onClick={handleLogout}>Logout</button>
              </div>
            )}
          </li>
        ) : (
          <>
            <li className="link"><Link to="/signup"><button className="btn1">Sign Up</button></Link></li>
            <li className="link"><Link to="/login"><button className="btn1">Login</button></Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
