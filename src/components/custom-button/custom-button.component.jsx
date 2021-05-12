import React from "react";

import "./custom-button.style.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`} {...otherProps} //Nếu như đang có tài khoản google đăng nhập thì thêm class google-sign-in
  >
    {children}
  </button>
);

export default CustomButton;
