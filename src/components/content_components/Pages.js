import "../../styles.css";

export default function Header({ searchText, photos, setSearchText }) {
  const handlePrevPage = () => {
    setSearchText((state) => {
      return { ...state, page: state.page - 1 };
    });
  };

  const handleNextPage = () => {
    setSearchText((state) => {
      return { ...state, page: state.page + 1 };
    });
  };
  return (
    <div className="pages">
      {searchText.page !== 1 ? (
        <button onClick={handlePrevPage} className="page-button">
          {"< Back "}
        </button>
      ) : null}
      <p className="page-info">{`Page ${photos.page} of ${photos.pages}`}</p>
      <button onClick={handleNextPage} className="page-button">
        {"Forward >"}
      </button>
    </div>
  );
}
