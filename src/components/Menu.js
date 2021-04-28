import "../styles.css";
import React from "react";
import { Link } from "react-router-dom";
import bookmark from "../icons/bookmark.png";
import cloud from "../icons/cloud.png";

export default function Menu() {
  const [isBookmark, setIsBookmark] = React.useState(false);

  const searchLink = () => {
    setIsBookmark(false);
  };

  const bookmarkLink = () => {
    setIsBookmark(true);
  };

  return (
    <div className="menu">
      <Link to="/">
        <button
          className={`menu-button ${!isBookmark ? "isActiveSearch" : null}`}
          onClick={searchLink}
        >
          <img className="menu-icon" src={cloud} alt="" />
        </button>
      </Link>
      <Link to="/bookmarks">
        <button
          className={`menu-button ${isBookmark ? "isActiveBookmark" : null}`}
          onClick={bookmarkLink}
        >
          <img className="menu-icon" src={bookmark} alt="" />
        </button>
      </Link>
    </div>
  );
}
