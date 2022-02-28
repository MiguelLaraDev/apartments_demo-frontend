import ApartmentListItem, { IApartmentListItem } from "./ApartmentListItem";
import styles from "./ApartmentList.module.scss";

export interface IApartmentList {
  items: IApartmentListItem[];
}

const ApartmentList: React.FC<IApartmentList> = ({ items }): JSX.Element => {
  return (
    <ul className={styles.apartmentList}>
      {items.map(({ id, title, landlord, available }) => (
        <li key={id}>
          <ApartmentListItem
            id={id}
            title={title}
            landlord={landlord}
            available={available === "true"}
          />
        </li>
      ))}
    </ul>
  );
};

export default ApartmentList;
