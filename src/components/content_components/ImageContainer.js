import "../../styles.css";

export default function ImageContainer({
  photo,
  bookmarkSubmit,
  tagsHandler,
  bookmark,
  saveditems,
  id
}) {
  const isSaved = saveditems.find((item) => item.id === id);
  return (
    <div className="image-container">
      <p className="photo-title">{photo.title}</p>
      <img
        className="content-images"
        src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`}
        alt={photo.title}
      />
      <Form
        photo={photo}
        bookmarkSubmit={bookmarkSubmit}
        tagsHandler={tagsHandler}
        bookmark={bookmark}
        isSaved={isSaved}
        id={id}
      />
    </div>
  );
}

const Form = ({
  photo,
  bookmarkSubmit,
  tagsHandler,
  bookmark,
  id,
  isSaved
}) => {
  console.log(isSaved);
  return (
    <form
      className="form"
      onSubmit={(e) =>
        bookmarkSubmit(
          `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`,
          photo.id,
          e.preventDefault()
        )
      }
    >
      {isSaved ? (
        <p>Saved to bookmarks</p>
      ) : (
        <>
          <button className="bookmark-button" type="submit">
            Boormark it!
          </button>
          <input
            placeholder="some tags?"
            value={id === bookmark.id ? bookmark.tag : ""}
            onChange={(e) => tagsHandler(e.target.value, id)}
          />
        </>
      )}
    </form>
  );
};
