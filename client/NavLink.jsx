import { NavLink as RouterNavLink } from "react-router-dom";

const NavLink = ({ children, ...props }) => (
  <RouterNavLink
    className="nav-link"
    activeClassName="active"
    aria-current="page"
    {...props}
  >
    {children}
  </RouterNavLink>
);

export default NavLink;
