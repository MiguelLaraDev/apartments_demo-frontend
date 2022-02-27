import ApartmentList from "../components/ApartmentsList/ApartmentList";
import styles from "./UsersPage.module.scss";

const UsersPage = () => {
  return (
    <div className={styles.usersPage}>
      <h1>List of Apartments</h1>
      <ApartmentList />
    </div>
  );
};

export default UsersPage;
