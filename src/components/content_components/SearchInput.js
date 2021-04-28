import "../../styles.css";
import { DebounceInput } from "react-debounce-input";

export default function SearchInput({ searchText, setSearchText }) {
  const searchHandler = (e) => {
    setSearchText((state) => {
      return { ...state, text: e.target.value };
    });
  };

  return (
    <DebounceInput
      className="search-input"
      placeholder="Find images"
      value={searchText.text}
      debounceTimeout={1000}
      onChange={searchHandler}
    />
  );
}
