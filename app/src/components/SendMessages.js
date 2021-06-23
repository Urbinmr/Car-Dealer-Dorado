import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useParams, useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import { MessagingContext } from "../App";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      marginTop: theme.spacing(3),
      width: "90%",
    },
  },
}));

function SendMessages(props) {
  const { messages, setMessages } = useContext(MessagingContext);
  const classes = useStyles();
  const history = useHistory();
  const { carId } = useParams();

  const defaultMessage = "Type your message here";

  const [value, setValue] = useState(defaultMessage);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const createMessage = () => {
    let newMessages = new Map(messages);

    if (newMessages[carId]) {
      newMessages[carId].push(value);
    } else {
      newMessages[carId] = [value];
    }

    setMessages(newMessages);

    history.replace({
      pathname: `/messages`,
    });
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={8}
          defaultValue={defaultMessage}
          value={value}
          onChange={handleChange}
          variant="outlined"
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        height="100%"
        onClick={createMessage}
      >
        Send Message
      </Button>
    </form>
  );
}

export default SendMessages;
