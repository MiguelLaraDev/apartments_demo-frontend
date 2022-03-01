import ApartmentsListItem from "./ApartmentsListItem";
import styles from "./ApartmentsList.module.scss";
import IApartmentList from "src/interfaces/IApartmentList";

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
