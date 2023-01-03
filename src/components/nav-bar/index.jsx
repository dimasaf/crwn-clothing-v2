import { useSelector, useDispatch } from "react-redux";

import { Outlet, Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { signOutAuth } from "../../utils/firebase/firebase.utils";

import CartIcon from "../CartIcon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";

import { selectCurrentUser } from "../../store/user/user.selector";
import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

// import "./navigation.style.scss";
import { NavigationBar, Navlink, NavlinkContainer } from "./navigation.style";

const Navigation = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const currentUser = useSelector(selectCurrentUser);
  const cartCount = useSelector(selectCartCount);

  const handleSignOut = async () => {
    await signOutAuth();
  };

  console.warn(currentUser);

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
            handleOpen={() => dispatch(setIsCartOpen(!isCartOpen))}
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
