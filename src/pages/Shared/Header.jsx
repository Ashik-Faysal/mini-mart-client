import  { useState } from "react";
import { ButtonWrapper, HeaderWrapper, LoginButton, LogoutButton, Name } from "../Styled/Styled";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <HeaderWrapper>
      <Name>Mini Mart</Name>
      <ButtonWrapper>
        {isLoggedIn ? (
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        ) : (
          <LoginButton onClick={handleLogin}>Login</LoginButton>
        )}
      </ButtonWrapper>
    </HeaderWrapper>
  );
};

export default Header;
