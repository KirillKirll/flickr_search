import "../../styles.css";
import NoImage from "../NoImage";
import Loading from "../Loading";
import SearchInput from "./SearchInput";
import ResultBox from "./ResultBox";

export default function Content({
  searchText,
  photos,
  loading,
  setSearchText
}) {
  return (
    <div className="content">
      <SearchInput searchText={searchText} setSearchText={setSearchText} />
      <div className="content-box">
        {!photos.photo ? (
          <NoImage />
        ) : loading ? (
          <Loading />
        ) : (
          <ResultBox
            photos={photos}
            searchText={searchText}
            setSearchText={setSearchText}
          />
        )}
      </div>
    </div>
  );
}
