import clsx from "clsx";
import styles from "./MainNavBar.module.css";
import { Link } from "react-router-dom";
function MainNavBar() {
  return (
    <ul className={clsx("flex", styles.wrapper)}>
      <Link className={clsx(styles.item)} to="/nowplaying">
        Now Playing
      </Link>
      <Link className={clsx(styles.item)} to="/popularfilm">
        Popular Film
      </Link>
      <Link className={clsx(styles.item)} to="/toprate">
        Top Rate
      </Link>
    </ul>
  );
}

export default MainNavBar;
