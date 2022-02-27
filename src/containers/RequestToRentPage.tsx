import { Button, TextField, Typography } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { useParams } from "react-router-dom";

import styles from "./RequestToRentPage.module.scss";
import { useState } from "react";

const RequestToRentPage = (): JSX.Element => {
  const params = useParams();
  const [value, setValue] = useState(null);

  const handleSubmit = () => {
    console.log("onClick");
  };

  return (
    <div className={styles.requestToRentPage}>
      <Typography className={styles.label} variant="h4" gutterBottom>
        Request to Rent
      </Typography>

      <div className={styles.group}>
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
          variant="h5"
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

        <div className={styles.field}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Birthday"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>

        <Button
          className={styles.button}
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
