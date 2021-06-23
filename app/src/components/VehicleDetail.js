import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddToCart from "./AddToCart";
import DeleteFromCart from "./DeleteFromCart";
const useStyles = makeStyles({
  carImage: {
    height: 200,
    width: 200,
  },
  carCard: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  carInfoWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  carInfo: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  buttonWrapper: {
    alignItems: "unset",
  },
});

function VehicleDetail(props) {
  const classes = useStyles();

  const { image, make, model, year, color, price, id } = props.value;
  const { type } = props;

  return (
    <Card className={classes.carCard}>
      <CardMedia className={classes.carImage} image={image} title="Car" />
      <CardContent className={classes.carInfo}>
        <Typography gutterBottom variant="h5" component="h2">
          {make}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          {model}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          {year}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          {color}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          ${price}
        </Typography>
      </CardContent>
      <CardActions className={classes.buttonWrapper}>
        {type === "list" && <AddToCart id={id} />}
        {type === "cart" && <DeleteFromCart id={id} />}
      </CardActions>
    </Card>
  );
}

export default VehicleDetail;
