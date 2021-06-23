import {Card, CardMedia, CardContent, Typography, CardActions, Button} from "@material-ui/core"
import {makeStyles} from '@material-ui/core/styles'
import {useHistory} from "react-router"

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
  }
})

function VehicleDetail(props) {
  const history = useHistory()
  const classes = useStyles()

  return (
    <Card className={classes.carCard}>
      <CardMedia
        className={classes.carImage}
        image={props.value.image}
        title="Car"
      />
      <CardContent className={classes.carInfo}>
        <Typography gutterBottom variant="h5" component="h2">
          {props.value.make}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          {props.value.model}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          {props.value.year}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          {props.value.color}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          ${props.value.price}
        </Typography>
      </CardContent>
      <CardActions className={classes.buttonWrapper}>
        <Button variant="contained" color="secondary" height="100%" onClick={() => history.push({
          pathname: '/messages',
          search: `?query=${props.value.id}`
        })}
        >
          Contact
        </Button>
      </CardActions>
      <CardActions className={classes.buttonWrapper}>
        <Button variant="contained" color="primary" height="100%">
          Buy
        </Button>
      </CardActions>
    </Card>
  )
}

export default VehicleDetail
