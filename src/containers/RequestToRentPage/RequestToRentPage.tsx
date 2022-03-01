import { useParams } from "react-router-dom";
import { Alert, Button, TextField, Typography } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

import IApartment from "src/interfaces/IApartment";
import styles from "./RequestToRentPage.module.scss";
import useRentForm from "../../hooks/useRentForm";
import useFetchData from "../../hooks/useFetchData";

const apiUrl = process.env.REACT_APP_APARTMENTS_API;

const convertToApartment = (data: IApartment | undefined) => {
  if (!data) {
    return null;
  }

  const output: IApartment = {
    available: data.available === "true",
    id: data.id,
    landlord: data.landlord,
    title: data.title,
  };

  return output;
};

const RequestToRentPage = (): JSX.Element => {
  const params = useParams();
  const { apartmentId } = params;
  const { data, loading } = useFetchData(`${apiUrl}/${apartmentId}`);
  const { errors, fields, rentStatus, submit, update } = useRentForm();
  const apartment: IApartment | null = convertToApartment(data);

  const submitButtonDisable = (): boolean => {
    return errors.birthday.error || errors.name.error || fields.name.length < 1;
  };

  const handleDatePicker = (newValue: any) => {
    if (newValue) {
      update("birthday", newValue);
    }
  };

  const handleNameField = (name: string) => {
    update("name", name);
  };

  const handleSubmit = () => {
    if (params.apartmentId) {
      submit(`${apiUrl}/${apartmentId}`);
    }
  };

  if (loading) {
    return (
      <Typography className={styles.label} variant="h2" gutterBottom>
        ...loading
      </Typography>
    );
  }
  if (!apartment) {
    return <Alert severity="error">Apartment not found</Alert>;
  }

  return (
    <div className={styles.requestToRentPage}>
      <Typography className={styles.label} variant="h2" gutterBottom>
        Request to Rent
      </Typography>

      {rentStatus === "success" && (
        <Alert severity="success">
          Success, your have rented this apartment!
        </Alert>
      )}

      {rentStatus === "error" && (
        <Alert severity="error">Error. Try again.</Alert>
      )}

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
            {apartment.title}
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
            {apartment.landlord}
          </Typography>
        </div>
      </div>

      {!apartment.available && (
        <Typography
          className={styles.label}
          align="left"
          variant="h5"
          color="error"
        >
          This apartment is already rented
        </Typography>
      )}

      {apartment.available && (
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
