import { FaPlayCircle } from "react-icons/fa";
import clsx from "clsx";

import styles from "./Icon.module.css";
function Icon() {
  return (
    <div className={clsx(styles.width)}>
      <div className={clsx(styles.icon)}>
        <FaPlayCircle />
      </div>
    </div>
  );
}

export default Icon;
