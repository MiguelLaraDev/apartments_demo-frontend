import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

import styles from "./ApartmentListItem.module.scss";

export interface IApartmentListItem {
  id: string;
  title: string;
  landlord: string;
  available: boolean;
}

const ApartmentListItem: React.FC<IApartmentListItem> = ({
  id,
  title,
  landlord,
  available,
}): JSX.Element => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/request-to-rent/${id}`);
  };

  return (
    <div className={styles.apartmentListItem}>
      <Card className={styles.card}>
        <CardContent className={styles.content}>
          <div className={styles.row}>
            <Typography align="left" className={styles.label} gutterBottom>
              Title:
            </Typography>
            <Typography align="left">{title}</Typography>
          </div>

          <div className={styles.row}>
            <Typography align="left" className={styles.label} gutterBottom>
              Landlord:
            </Typography>
            <Typography align="left">{landlord}</Typography>
          </div>

          <div className={styles.row}>
            <Typography align="left" className={styles.label} gutterBottom>
              Available:
            </Typography>
            <Typography align="left">{available ? "YES" : "NO"}</Typography>
          </div>
        </CardContent>

        <CardActions>
          <Button
            size="small"
            variant="contained"
            disableElevation
            onClick={handleClick}
          >
            Request to rent
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ApartmentListItem;
