import { Button, TextField, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import styles from "./RequestToRentPage.module.scss";

const RequestToRentPage = (): JSX.Element => {
  const params = useParams();

  const handleSubmit = () => {
    console.log("onClick");
  };

  return (
    <div className={styles.requestToRentPage}>
      <Typography className={styles.label} variant="h3" gutterBottom>
        Request to Rent
      </Typography>

      <div className={styles.group}>
        <Typography
          className={styles.label}
          align="left"
          variant="h4"
          gutterBottom
        >
          Apartment details:
        </Typography>

        <div className={styles.row}>
          <Typography
            className={styles.label}
            align="left"
            variant="body1"
            gutterBottom
          >
            Title:
          </Typography>
          <Typography align="left" variant="body1" gutterBottom>
            Studio apartment to rent in Goya
          </Typography>
        </div>

        <div className={styles.row}>
          <Typography
            className={styles.label}
            align="left"
            variant="body1"
            gutterBottom
          >
            Landlord:
          </Typography>
          <Typography align="left" variant="body1">
            Luis Gonzalez
          </Typography>
        </div>
      </div>

      <div className={styles.group}>
        <Typography
          className={styles.label}
          align="left"
          variant="h4"
          gutterBottom
        >
          User details:
        </Typography>

        <TextField
          className={styles.field}
          id="user-name"
          label="Name"
          variant="standard"
          fullWidth
        />

        <TextField
          className={styles.field}
          id="user-birthday"
          label="Birthday"
          variant="standard"
          fullWidth
        />

        <Button
          className={styles.button}
          size="small"
          variant="contained"
          disableElevation
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default RequestToRentPage;
