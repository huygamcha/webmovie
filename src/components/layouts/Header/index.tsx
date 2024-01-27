import clsx from "clsx";
import styles from "./header.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import MainNavBar from "../MainNavbar";
import useSearch from "../../../hooks/useSearch";
// import { useState } from "react";

function Header() {
  // câu lệnh dùng để lưu giá trị search vào
  const { value_movie, onchange } = useSearch();
  const handleSearch = () => {
    onchange(value_movie);
  };
  return (
    <div className={clsx(styles.wrapper)}>
      <div></div>
      <div>
        <Link to="/">
          {" "}
          MOVIE<span className={clsx(styles.title_sub)}>VENNIE</span>
        </Link>
      </div>
      <div>
        <MainNavBar />
      </div>
      <div className={clsx(styles.searchavatar)}>
        <div className={clsx(styles.search)}>
          <Link to={"/search"}>
            <input
              value={value_movie}
              onChange={(e) => onchange(e.target.value)}
              placeholder="Search Movie"
              type="text"
            />
          </Link>
          <div className={clsx(styles.search_icon)}>
            <Link to={"/search"} onClick={handleSearch}>
              <AiOutlineSearch />
            </Link>
          </div>
        </div>
        <div>
          <img className={clsx(styles.img)} src="/public/avatar.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
