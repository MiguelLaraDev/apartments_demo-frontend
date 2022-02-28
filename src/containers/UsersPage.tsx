import ApartmentList from "../components/ApartmentsList/ApartmentList";
import useFetchData from "../hooks/useFetchData";
import styles from "./UsersPage.module.scss";

const apiUrl = "https://jsonplaceholder.typicode.com/posts"; // TODO: Move inta a .env file.

const UsersPage = () => {
  const { data, loading } = useFetchData(apiUrl);

  const items = [
    {
      id: "1",
      title: "Apart 1",
      landlord: "Juan Perez",
      available: true,
    },
  ];

  return (
    <div className={styles.usersPage}>
      <h1>List of Apartments</h1>
      <ApartmentList items={items} />
    </div>
  );
};

export default UsersPage;
