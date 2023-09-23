import styles from "./Main.module.scss";

export const Main = ({ children }) => {
  return (
    <div className={styles.main}>
      <div className="container">{children}</div>
    </div>
  );
};
