import styles from "./Search.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { IoSearch } from "react-icons/io5";
import { selectSearch } from "../../store/controls/controls-selectors";
import { setSearch } from "../../store/controls/controls-actions";

export const Search = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };
  return (
    <div className={styles.search}>
      <IoSearch />
      <input
        className={styles.input}
        type="search"
        placeholder="Search for a country..."
        onChange={handleSearch}
        value={search}
      />
    </div>
  );
};
