import "../../styles.css";
import Pages from "./Pages";
import React from "react";
import ImageContainer from "./ImageContainer";

export default function ResultBox({ photos, searchText, setSearchText }) {
  const [bookmark, setBookmark] = React.useState({
    tag: ""
  });
  const saveditems = JSON.parse(localStorage.getItem("bookmarks")) || [];

  const bookmarkSubmit = (value, id) => {
    const item = {
      value,
      id,
      ...bookmark
    };
    if (saveditems) {
      localStorage.setItem("bookmarks", JSON.stringify([...saveditems, item]));
    } else {
      localStorage.setItem("bookmarks", JSON.stringify([item]));
    }

    setBookmark({
      tag: ""
    });
  };

  const tagsHandler = (value, id) => {
    setBookmark((state) => {
      return { ...state, tag: value, id: id };
    });
  };

  return (
    <div className="images">
      <Pages
        searchText={searchText}
        photos={photos}
        setSearchText={setSearchText}
      />
      {photos.photo.map((photo) => {
        return (
          <ImageContainer
            photo={photo}
            bookmarkSubmit={bookmarkSubmit}
            tagsHandler={tagsHandler}
            bookmark={bookmark}
            saveditems={saveditems}
            key={photo.id}
            id={photo.id}
          />
        );
      })}
    </div>
  );
}
