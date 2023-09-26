import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { setTheme } from "../../store/theme/theme-actions";
import { clearControls } from "../../store/controls/controls-actions";

export const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const toggleTheme = () => {
    dispatch(setTheme(theme === "light" ? "dark" : "light"));
  };

  const cleanUp = () => dispatch(clearControls());

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link to={"/"} onClick={cleanUp} className={styles.title}>
            Where is the world?
          </Link>
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
