import "../../styles.css";
import React from "react";

export default function Bookmarks() {
  const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  const [bookmarks, setBookmarks] = React.useState(savedBookmarks || []);

  const removeHandler = (id) => {
    setBookmarks((bookmarks) =>
      bookmarks.filter((el) => {
        return el.id !== id;
      })
    );
  };

  React.useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  return (
    <div className="content">
      <div className="content-box">
        <div className="images">
          {bookmarks.map((el) => {
            return (
              <div className="bookmark-container" key={el.id}>
                <img className="content-images" src={el.value} alt="" />
                <button
                  className="bookmark-button"
                  onClick={() => removeHandler(el.id)}
                >
                  Remove it!
                </button>
                <p className="bookmark-tags">Tags:{el.tag}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
