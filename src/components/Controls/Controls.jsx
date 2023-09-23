import styles from "./Controls.module.scss";
import { Search } from "../Search";
import { CustomSelect } from "../CustomSelect";

const optionsMap = {
  Africa: { value: "Africa", label: "Africa" },
  America: { value: "America", label: "America" },
  Asia: { value: "Asia", label: "Asia" },
  Europe: { value: "Europe", label: "Europe" },
  Oceania: { value: "Oceania", label: "Oceania" },
};
const options = Object.values(optionsMap);

export const Controls = () => {
  return (
    <div className={styles.controls}>
      <Search />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={""}
        onChange={() => {}}
      />
    </div>
  );
};
