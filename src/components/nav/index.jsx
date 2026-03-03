import styles from "./styles.module.css";
import { Link, NavLink } from "react-router-dom";

const navMenu = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Users",
    path: "/users",
  },
];

function Nav() {
  return (
    <nav>
      <ul>
        {navMenu.map((menuItem) => {
          return (
            <li key={menuItem.title}>
              <NavLink
                to={menuItem.path}
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.link
                }
              >
                {menuItem.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
export default Nav;
