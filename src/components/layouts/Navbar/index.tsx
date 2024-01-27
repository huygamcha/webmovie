// NavBar.js
import clsx from "clsx";
import styles from "./navbar.module.css";
import {
  AiFillHome,
  AiTwotoneFire,
  AiOutlineRise,
  AiFillPlaySquare,
} from "react-icons/ai";

function NavBar() {
  return (
    <nav className={clsx(styles.navbar, styles.slide)}>
      <ul className={clsx(styles.ul)}>
        <li className={clsx(styles.li)}>
          <a href="#">
            <div className={clsx(styles.icon)}>
              <AiFillHome />
            </div>
            <span className={styles.header}> Home</span>
          </a>
        </li>
        <li className={clsx(styles.li)}>
          <a href="#nowplaying">
            <div className={clsx(styles.icon)}>
              <AiFillPlaySquare />
            </div>
            <span className={styles.header}> Now Playing</span>
          </a>
        </li>
        <li className={clsx(styles.li)}>
          <a href="#popularfilm">
            <div className={clsx(styles.icon)}>
              <AiTwotoneFire />
            </div>
            <span className={styles.header}>Popular</span>
          </a>
        </li>
        <li className={clsx(styles.li)}>
          <a href="#toprate">
            <div className={clsx(styles.icon)}>
              <AiOutlineRise />
            </div>
            <span className={styles.header}> Top Rate</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
