import styles from "./Card.module.scss";

export const Card = ({ img, name, info = [], onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img className={styles.cardImage} src={img} alt={name} />
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{name}</h3>
        <ul className={styles.cardList}>
          {info.map((el) => (
            <li className={styles.cardListItem} key={el.title}>
              <b>{el.title}:</b> {el.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
