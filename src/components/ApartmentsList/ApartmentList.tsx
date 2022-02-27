import ApartmentListItem from "./ApartmentListItem";
import styles from "./ApartmentList.module.scss";

const ApartmentList = () => {
  const items = [
    {
      id: 1,
      title: "Apart 1",
      landlord: "Juan Perez",
      available: true,
    },
  ];

  return (
    <ul className={styles.apartmentList}>
      {items.map((el) => (
        <li key={el.id}>
          <ApartmentListItem />
        </li>
      ))}
    </ul>
  );
};

export default ApartmentList;
