import { useEffect } from "react";
import { selectNeighbors } from "../../store/details/details-selectors";
import styles from "./Info.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { loadNeighborsByBorder } from "../../store/details/details-actions";

export const Info = (props) => {
  const {
    name,
    nativeName,
    flag,
    capital,
    population,
    region,
    subregion,
    topLevelDomain,
    currencies = [],
    languages = [],
    borders = [],
    push,
  } = props;

  const dispatch = useDispatch();
  const neighbors = useSelector(selectNeighbors);

  useEffect(() => {
    if (borders.length) {
      dispatch(loadNeighborsByBorder(borders));
    }
  }, [dispatch, borders]);

  return (
    <div className={styles.info}>
      <img className={styles.infoImage} src={flag} alt={name} />
      <div>
        <h1 className={styles.infoTitle}>{name}</h1>
        <div className={styles.infoListGroup}>
          <ul className={styles.infoList}>
            <li className={styles.infoListItem}>
              <b>Native Name:</b> {nativeName}
            </li>

            <li className={styles.infoListItem}>
              <b>Population</b> {population}
            </li>

            <li className={styles.infoListItem}>
              <b>Region:</b> {region}
            </li>

            <li className={styles.infoListItem}>
              <b>Sub Region:</b> {subregion}
            </li>

            <li className={styles.infoListItem}>
              <b>Capital:</b> {capital}
            </li>
          </ul>

          <ul className={styles.infoList}>
            <li className={styles.infoListItem}>
              <b>Top Level Domain</b>{" "}
              {topLevelDomain.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </li>

            <li className={styles.infoListItem}>
              <b>Currency</b>{" "}
              {currencies.map((c) => (
                <span key={c.code}>{c.name} </span>
              ))}
            </li>

            <li className={styles.infoListItem}>
              <b>Top Level Domain</b>{" "}
              {languages.map((l) => (
                <span key={l.name}>{l.name}</span>
              ))}
            </li>
          </ul>
        </div>
        <div className={styles.infoMeta}>
          <b>Border Countries</b>
          {!borders.length ? (
            <span>There is no border countries</span>
          ) : (
            <div className={styles.infoTagGroup}>
              {neighbors.map((b) => (
                <span
                  className={styles.infoTag}
                  key={b}
                  onClick={() => push(`/country/${b}`)}
                >
                  {b}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
