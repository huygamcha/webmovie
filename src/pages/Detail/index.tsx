import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Detail.module.css";
import clsx from "clsx";
import CircleMark from "../../components/CircleMark";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  AiOutlineUnorderedList,
  AiFillHeart,
  AiTwotoneAppstore,
  AiFillStar,
} from "react-icons/ai";
import Icon from "../../components/Icon";
import Top from "../../components/layouts/Top";

interface Genres {
  id: number;
  name: string;
}

interface dataType {
  id: number;
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
interface Cast {
  original_name: string;
  profile_path: string;
  character: string;
  id: number;
}

interface Character {
  id: number;
  cast: Cast[];
}

interface VideoTrailer {
  key: string;
  name: string;
  id: number;
}

interface Trailer {
  id: number;
  results: VideoTrailer[];
}

const Detail = () => {
  const [data, setData] = useState<dataType>();
  const [character, setCharacter] = useState<Character>();
  const [trailer, setTrailer] = useState<Trailer>();
  const [loved, setLoved] = useState<boolean>(true);
  const { id } = useParams(); // Lấy tham số "id" từ đường dẫn
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8",
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });

    axios
      .get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8",
        },
      })
      .then((response) => {
        setTrailer(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8",
        },
      })
      .then((response) => {
        setCharacter(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  // trailer?.results.map((item) => {
  //   console.log(item.key);
  // });
  console.log("««««« loved »»»»»", loved);
  return (
    <div>
      <div>
        <Top />
      </div>
      <div className={clsx(styles.wrapper, "container", "mx-auto")}>
        {data && (
          <div className={clsx(styles.content)}>
            <div className={clsx(styles.content_img)}>
              <img
                className={clsx(styles.img)}
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face${data.poster_path}`}
                alt=""
              />
              <div className={clsx(styles.content_img_trailer)}>Trailer</div>
            </div>

            <div className={clsx(styles.content_text)}>
              <h2>
                {data.original_title} ({data.release_date.slice(0, 4)})
              </h2>
              <ul className={clsx(styles.space)}>
                <li>Date Release: {data.release_date} </li>
                <li className={clsx(styles.ul)}>
                  Genres:
                  <ul className={clsx(styles.ul)}>
                    {data.genres.map((genre, i) => (
                      <li key={i}>
                        {i < data.genres.length - 1
                          ? `${genre.name},`
                          : `${genre.name}`}
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <ul className={clsx(styles.ul, styles.action)}>
                    <li className={clsx("flex", "items-center")}>
                      <CircleMark degree={data.vote_average} />
                      <span className={clsx("pl-1")}>User Score</span>
                    </li>
                    <li>
                      <AiOutlineUnorderedList />{" "}
                    </li>
                    <li>
                      <div onClick={() => setLoved(!loved)}>
                        <AiFillHeart
                          style={
                            loved ? { fill: "" } : { fill: "var(--primary)" }
                          }
                        />
                      </div>
                    </li>
                    <li>
                      <AiTwotoneAppstore />
                    </li>
                    <li>
                      <AiFillStar />
                    </li>
                    <li className={clsx("flex", "items-center")}>
                      <Icon />
                      <span className={clsx("pl-1")}> Play now</span>
                    </li>
                  </ul>
                </li>
                <li>
                  Run Time:
                  {` ${Math.floor(data.runtime / 60)}h ${data.runtime % 60}m`}
                </li>
                <li>
                  Over View:
                  <br></br>
                  {data.overview}
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        )}
        {trailer && (
          <div>
            <h4> Trailers:</h4>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar]}
              navigation
              // scrollbar={{ draggable: true, dragSize: 100 }}
              spaceBetween={15}
              slidesPerView={2}
            >
              {trailer.results.map((item) => (
                <SwiperSlide key={item.id}>
                  <iframe
                    className={clsx(styles.video_trailer)}
                    src={`https://www.youtube.com/embed/${item.key}`}
                    allowFullScreen
                  ></iframe>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
        {character && (
          <div>
            <h4> Top Billed Cast:</h4>
            <div>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar]}
                navigation
                // scrollbar={{ draggable: true, dragSize: 100 }}
                spaceBetween={15}
                slidesPerView={7}
              >
                {character.cast.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className={clsx(styles.character_info)}>
                      <img
                        className={clsx(styles.img_character)}
                        src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.profile_path}`}
                        alt={item.profile_path}
                      />
                      <div className={clsx(styles.character_actor)}>
                        {item.character}
                      </div>
                      <div className={clsx(styles.character_name_origin)}>
                        {item.original_name}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
