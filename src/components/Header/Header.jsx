import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Header.module.scss";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { setTheme } from "../../store/theme/theme-actions";

export const Header = () => {
  const dipatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const toggleTheme = () => {
    dipatch(setTheme(theme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <p className={styles.title}>Where is the world?</p>
          <div className={styles.modeSwitcher} onClick={toggleTheme}>
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
