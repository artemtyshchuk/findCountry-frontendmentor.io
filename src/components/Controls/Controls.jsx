import styles from "./Controls.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Search } from "../Search";
import { CustomSelect } from "../CustomSelect";
import { selectRegion } from "../../store/controls/controls-selectors";
import { setRegion } from "../../store/controls/controls-actions";

const optionsMap = {
  Africa: { value: "Africa", label: "Africa" },
  America: { value: "America", label: "America" },
  Asia: { value: "Asia", label: "Asia" },
  Europe: { value: "Europe", label: "Europe" },
  Oceania: { value: "Oceania", label: "Oceania" },
};
const options = Object.values(optionsMap);

export const Controls = () => {
  const dispatch = useDispatch();
  const region = useSelector(selectRegion);

  const handleSelect = (reg) => {
    dispatch(setRegion(reg?.value || ""));
  };

  return (
    <div className={styles.controls}>
      <Search />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={optionsMap[region]}
        onChange={handleSelect}
      />
    </div>
  );
};
