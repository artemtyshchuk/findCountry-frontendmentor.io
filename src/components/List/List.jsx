import styles from "./List.module.scss";

export const List = ({ children }) => {
  return <div className={styles.list}>{children}</div>;
};
