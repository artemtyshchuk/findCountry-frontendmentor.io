import styles from "./CustomSelect.module.scss";

import Select from "react-select";

export const CustomSelect = (props) => {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "var(--colors-ui-base)",
      color: "var(--colors-text)",
      borderRadius: "var(--radii)",
      padding: "4px",
      border: "none",
      boxShadow: "var(--shadow)",
      height: "50px",
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: "pointer",
      color: "var(--colors-text)",
      backgroundColor: state.isSelected
        ? "var(--colors-bg)"
        : "var(--colors-ui-base)",
    }),
  };

  return (
    <div>
      <Select
        styles={customStyles}
        className={styles.customSelect}
        options={props.options}
        placeholder={props.placeholder}
        isClearable={props.isClearable}
        isSearchable={props.isSearchable}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};
