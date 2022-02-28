import { Typography } from "@mui/material";
import ApartmentList from "../components/ApartmentsList/ApartmentList";
import useFetchData from "../hooks/useFetchData";
import styles from "./ApartmensListPage.module.scss";

const apiUrl = process.env.REACT_APP_APARTMENTS_API;

const ApartmensListPage = () => {
  const { data, loading } = useFetchData(apiUrl);

  if (!data) {
    return (
      <Typography align="center" variant="h3">
        No data loaded
      </Typography>
    );
  }

  if (loading) {
    return (
      <Typography align="center" variant="h3">
        Loading...
      </Typography>
    );
  }

  return (
    <div className={styles.usersPage}>
      <Typography align="center" variant="h2">
        Apartment listing
      </Typography>
      <ApartmentList items={data} />
    </div>
  );
};

export default ApartmensListPage;
