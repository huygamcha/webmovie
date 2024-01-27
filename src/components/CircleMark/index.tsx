import clsx from "clsx";
import styles from "./Circle.module.css";
function CircleMark({ degree }: { degree: number }) {
  const value = degree * 10 * 3.6;
  return (
    <div
      className={clsx(styles.half_circle)}
      style={{
        background: `conic-gradient(from 0deg,  rgb(34, 208, 122)  ${value}deg, rgb(30, 30, 42) ${value}deg)`,
      }}
    >
      <div className={clsx(styles.title)}> {(degree * 10).toFixed(0)}%</div>
    </div>
  );
}

export default CircleMark;
