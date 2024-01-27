import clsx from "clsx";
import styles from "./TopRate.module.css";
// import { Link } from "react-router-dom";
import useFetch from "../../hooks/useGetMovies";
import { useState } from "react";
import Icon from "../../components/Icon";
import { Link } from "react-router-dom";
import Top from "../../components/layouts/Top";

function TopRate() {
  const [page, setPage] = useState<number>(1);
  const { data, loading, error } = useFetch("top_rated", page.toString());
  console.log(data);
  if (error) {
    console.log(error);
  }
  return (
    <div>
      <div>
        <Top />
      </div>
      <div className={clsx(styles.wrapper, "container", "mx-auto")}>
        <h4 className={clsx(styles.heading)}>
          <span> Top rate</span>
        </h4>
        {loading && <div className={clsx(styles.color)}>Loading...</div>}
        {data && (
          <div className={clsx("grid-cols-4", "grid", styles.img, "gap-5")}>
            {data.map((item, i) => (
              <div key={i}>
                <Link to={`/detail/${item.id}`}>
                  <div className={clsx(styles.content_wrapper)}>
                    <div className={clsx(styles.title)}>
                      <h3>{item.title}</h3>
                      <span className={clsx("flex", "justify-between")}>
                        <span>Action</span>
                        <Icon />
                      </span>
                    </div>
                    <img
                      className={clsx(styles.img)}
                      src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`}
                      alt={item.title}
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
        <div className={clsx(styles.btn_page)}>
          <button onClick={() => setPage(page <= 1 ? 1 : page - 1)}>
            PrePage
          </button>
          <button className={clsx(styles.btn_text)}>{page}/79</button>
          <button onClick={() => setPage(page >= 79 ? 79 : page + 1)}>
            NextPage
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopRate;
