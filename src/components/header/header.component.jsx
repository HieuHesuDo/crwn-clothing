import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import "./header.style.scss";

const Header = ({ currentUser, hidden }) => ( //Nhận current user value từ reducer
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
        currentUser ? ( //Nếu đang có user thì sẽ in ra div SignOut với sign out method
          <div className="option" onClick={() => auth.signOut()}>
            {" "}
            SIGN OUT{" "}
          </div>
        ) : (
          <Link className="option" to="signin">
            {" "}
            SIGN IN{" "}
          </Link>
        ) //Nếu không thì in ra link với đường dẫn tới trang sign in
      }

      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />} {/* Nếu hidden true thì render null, hidden false render CartDropdown */}
  </div>
);

const mapStateToProps = (state) => ({ 
  currentUser: state.user.currentUser, //Lấy giá trị currentUser của user từ state gán vào currentUser như một props
  hidden: state.cart.hidden //Lấy giá trị hidden của cart từ state gán vào hidden như một props
});

export default connect(mapStateToProps)(Header);
