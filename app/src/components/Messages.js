import {TextField, Button, CardActions} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import {useLocation} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      marginTop: theme.spacing(3),
      width: '90%',
    },
  },
}))

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Messages(props) {
  const classes = useStyles()
  const carID = useQuery();
  console.log(carID.get("query"))

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={8}
          defaultValue="Type your message here"
          variant="outlined"
        />
      </div>
      <Button variant="contained" color="primary" height="100%">
        Send Message
      </Button>
    </form>
  )
}

export default Messages
