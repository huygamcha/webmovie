import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./Search.module.css";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Icon from "../Icon";
import useSearch from "../../hooks/useSearch";
import NoResults from "../NoResults";
import Top from "../layouts/Top";
interface Genres {
  id: number;
  name: string;
}
interface dataType {
  id: number;
  title: string;
  backdrop_path: string;
  original_title: string;
  genres: Genres[];
  release_date: string;
  original_language: string;
  runtime: number;
  vote_average: number;
  overview: string;
  poster_path: string;
}
interface Data {
  page: number;
  results: dataType[];
}

function SearchFilm() {
  const [data, setData] = useState<Data>();
  const { value_movie } = useSearch();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${value_movie}&include_adult=false&language=en-US`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8",
          },
        }
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [value_movie]);
  console.log("««««« data »»»»»", data);
  return (
    <>
      <div>
        <Top />
      </div>
      <div className={clsx("container", "mx-auto", styles.wrapper)}>
        <h4 className={clsx(styles.heading)}>
          <span>Results</span>
        </h4>
        {data?.results.length === 0 ? (
          <div className={clsx(styles.no_results)}>
            {" "}
            <NoResults />{" "}
          </div>
        ) : (
          ""
        )}

        {data && (
          <div className={clsx("grid-cols-4", "grid", "gap-5", styles.content)}>
            {data.results.map((item, i) => (
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
      </div>
    </>
  );
}

export default SearchFilm;
