import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import styles from "./ApartmentListItem.module.scss";

const ApartmentListItem = () => {
  return (
    <div className={styles.apartmentListItem}>
      <Card className={styles.card}>
        <CardContent className={styles.content}>
          <div className={styles.row}>
            <Typography align="left" className={styles.label} gutterBottom>
              Title:
            </Typography>
            <Typography align="left">Este es el título</Typography>
          </div>
          <div className={styles.row}>
            <Typography align="left" className={styles.label} gutterBottom>
              Landlord:
            </Typography>
            <Typography align="left">Este es el título</Typography>
          </div>
          <div className={styles.row}>
            <Typography align="left" className={styles.label} gutterBottom>
              Available:
            </Typography>
            <Typography align="left">Este es el título</Typography>
          </div>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" disableElevation>
            Request to rent
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ApartmentListItem;
