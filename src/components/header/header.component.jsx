import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

import "./header.style.scss";

const Header = ({currentUser}) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link className="option" to="shop">
        SHOP
      </Link>
      <Link className="option" to="shop">
        CONTACT
      </Link>
      {
        currentUser ? //Nếu đang có user thì sẽ in ra div SignOut với sign out method
        <div className='option' onClick={() => auth.signOut()}> SIGN OUT </div>
        :
        <Link className='option' to='signin'> SIGN IN </Link> //Nếu không thì in ra link với đường dẫn tới trang sign in
      }
    </div>
  </div>
);

export default Header;