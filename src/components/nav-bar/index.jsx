import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";

import { signOutAuth } from "../../utils/firebase/firebase.utils";

import CartIcon from "../CartIcon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";

// import "./navigation.style.scss";
import { NavigationBar, Navlink, NavlinkContainer } from "./navigation.style";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const handleSignOut = async () => {
    await signOutAuth();
  };

  return (
    <>
      <NavigationBar>
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <NavlinkContainer>
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {currentUser ? (
            <Navlink onClick={handleSignOut}>SIGN OUT</Navlink>
          ) : (
            <Navlink to="/auth">SIGN IN</Navlink>
          )}

          <CartIcon
            handleOpen={() => setIsCartOpen(!isCartOpen)}
            totalCartItem={cartCount}
          />
        </NavlinkContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationBar>
      <Outlet />
    </>
  );
};

export default Navigation;
