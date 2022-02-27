import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { format, differenceInYears } from "date-fns";

import styles from "./RequestToRentPage.module.scss";

const formatDate = (value: Date) => {
  return format(value, "yyyy-MM-dd");
};

const validateBirthday = (birthday: string) => {
  const date = new Date(birthday);
  const age = differenceInYears(new Date(), date);

  if (age < 18) {
    return {
      error: true,
      message: "You must have at least 18 years old in order to rent a flat",
    };
  }

  return {
    error: false,
    message: "",
  };
};

const validateName = (name: string) => {
  const splitted = name.split(" ");

  if (splitted.length < 2) {
    return {
      error: true,
      message: "Please enter your first and last name",
    };
  }

  if (name.length < 10) {
    return {
      error: true,
      message: "Looks like your name is too short",
    };
  }

  return {
    error: false,
    message: "",
  };
};

/* 
TODO: 
. Si !avaialable capar.
. Hasta que no esté todo validado no se puede enviar.
. Pedir los datos del piso a la API.
. Enviar el pedido de renta a la API.
. Mostar la fecha en formato yyy-mm-dd.
. Meter todo en un customHook.
*/

const RequestToRentPage = (): JSX.Element => {
  /* 
    The birthdate’s format is YYYY/MM/DD
    Users must be older than 18 years old.
    The apartment must be available
    */

  const params = useParams();

  const available = false;

  const [datePickerValue, setDatePickerValue] = useState(
    formatDate(new Date())
  );
  const [datePickerError, setDatePickerError] = useState({
    error: false,
    message: "",
  });
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState({
    error: false,
    message: "",
  });

  const submitButtonDisable = (): boolean => {
    return datePickerError.error || userNameError.error || userName.length < 1;
  };

  const handleDatePicker = (newValue: any) => {
    if (newValue) {
      setDatePickerError(validateBirthday(newValue));
      setDatePickerValue(format(new Date(newValue), "yyyy-MM-dd"));
    }
  };

  const handleNameField = (name: string) => {
    setUserNameError(validateName(name));
    setUserName(name);
  };

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

      {!available && (
        <Typography
          className={styles.label}
          align="left"
          variant="h5"
          color="error"
        >
          This apartment is already rented
        </Typography>
      )}

      {available && (
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
            onBlur={(e) => handleNameField(e.currentTarget.value)}
            onChange={(e) => handleNameField(e.currentTarget.value)}
            error={userNameError.error}
            helperText={userNameError.message}
          />

          <div className={styles.datepicker}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Birthday"
                value={datePickerValue}
                onChange={handleDatePicker}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={datePickerError.error}
                    helperText={datePickerError.message}
                  />
                )}
                disableFuture
              />
            </LocalizationProvider>
          </div>

          <Button
            className={styles.button}
            variant="contained"
            disableElevation
            onClick={handleSubmit}
            disabled={submitButtonDisable()}
          >
            Submit
          </Button>
        </div>
      )}
    </div>
  );
};

export default RequestToRentPage;
