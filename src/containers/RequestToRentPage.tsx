import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { format } from "date-fns";

import useRentForm from "../hooks/useRentForm";
import styles from "./RequestToRentPage.module.scss";

/* 
TODO:
. Pedir los datos del piso a la API.
. Enviar el pedido de renta a la API.
. Mostar la fecha en formato yyy-mm-dd.
*/

const RequestToRentPage = (): JSX.Element => {
  const { errors, fields, update } = useRentForm();

  const params = useParams();

  const available = true;

  const submitButtonDisable = (): boolean => {
    return errors.birthday.error || errors.name.error || fields.name.length < 1;
  };

  const handleDatePicker = (newValue: any) => {
    if (newValue) {
      update("birthday", format(new Date(newValue), "yyyy-MM-dd"));
    }
  };

  const handleNameField = (name: string) => {
    update("name", name);
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
            label="Name"
            variant="standard"
            fullWidth
            onBlur={(e) => handleNameField(e.currentTarget.value)}
            onChange={(e) => handleNameField(e.currentTarget.value)}
            error={errors.name.error}
            helperText={errors.name.message}
          />

          <div className={styles.datepicker}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Birthday"
                value={fields.birthday}
                onChange={handleDatePicker}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={errors.birthday.error}
                    helperText={errors.birthday.message}
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
