import Home from "../../Home";
import Header from "../Header";
import styles from "./Top.module.css";
import clsx from "clsx";
import { useParams } from "react-router-dom";

function Top() {
  const { id } = useParams(); // Lấy tham số "id" từ đường dẫn

  return (
    <div className={clsx(styles.wrapper, "container", "mx-auto")}>
      <div className={clsx(styles.header, "mx-auto", "container", "w-full")}>
        <Header />
      </div>
      <div className={clsx(styles.home)}>{id || <Home />}</div>
    </div>
  );
}

export default Top;
