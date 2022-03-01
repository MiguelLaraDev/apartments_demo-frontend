import ApartmentsListItem, { IApartmentListItem } from "./ApartmentsListItem";
import styles from "./ApartmentsList.module.scss";

export interface IApartmentList {
  items: IApartmentListItem[];
}

const ApartmentList: React.FC<IApartmentList> = ({ items }): JSX.Element => {
  return (
    <ul className={styles.apartmentList}>
      {items.map(({ id, title, landlord, available }) => (
        <li key={id}>
          <ApartmentsListItem
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
