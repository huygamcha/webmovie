import { useEffect, useState } from "react";
import axios from "axios";
interface Data {
  id: number;
  original_title: string;
  poster_path: string;
  backdrop_path: string;
  title: string;
}

interface FetchResult {
  data: Data[];
  error: string;
  loading: boolean;
}

export default function useFetch(url: string, page: string): FetchResult {
  const [data, setData] = useState<Data[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  console.log("««««« setError »»»»»", setError);
  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        let link = `https://api.themoviedb.org/3/movie/${url}?language=en-US`;
        if (page) {
          link += `&page=${page}`;
        }
        const response = await axios.get(link, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8",
          },
        });
        setData(response.data.results);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url, page]);

  return { data, error, loading };
}
