import { ReactNode } from "react";
import styles from "./content.module.css";
import clsx from "clsx";

interface Content {
  children: ReactNode;
}
function Content({ children }: Content) {
  return <div className={clsx(styles.wrapper)}>{children}</div>;
}

export default Content;
