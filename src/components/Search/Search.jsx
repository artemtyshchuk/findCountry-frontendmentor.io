import styles from "./Search.module.scss";
import { IoSearch } from "react-icons/io5";

export const Search = ({ search, setSearch }) => {
  return (
    <div className={styles.search}>
      <IoSearch />
      <input
        className={styles.input}
        type="search"
        placeholder="Search for a country..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </div>
  );
};
