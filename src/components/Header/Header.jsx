import { useEffect } from "react";
import styles from "./Header.module.scss";
import { IoMoon, IoMoonOutline } from "react-icons/io5";

export const Header = () => {
  const theme = "light";

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <p className={styles.title}>Where is the world?</p>
          <div className={styles.modeSwitcher}>
            {theme === "light" ? (
              <IoMoonOutline size="14px" />
            ) : (
              <IoMoon size="14px" />
            )}{" "}
            <span style={{ marginLeft: "12px" }}>{theme} Theme</span>
          </div>
        </div>
      </div>
    </header>
  );
};
