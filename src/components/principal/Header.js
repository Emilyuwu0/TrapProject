import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {AppContext} from "../../context/AppContext";
import '../../styles/header.css'

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">PrimoyMily</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
      aaa
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </div>
  );
}

export default Header;