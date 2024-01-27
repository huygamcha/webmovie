import clsx from "clsx";
import { ReactNode } from "react";
import styles from "./globalstyles.module.css";
interface GlobalStyles {
  children: ReactNode;
}

function GlobalStyles({ children }: GlobalStyles) {
  return <div className={clsx(styles.wrapper)}>{children}</div>;
}

export default GlobalStyles;
