import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "react-notification-alert/dist/animate.css";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
    backgroundImage: "none",
    paddingTop: theme.spacing(7)
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  multilineColor: {
    backgroundColor: "white"
  }
}));

function SignIn(props) {
  const classes = useStyles();
  const [email, setEmail] = useState("user@mail.com");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("1");

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  });

  const onSubmitForm = event => {
    if (email === "admin" && password === "admin") {
      props.history.push("/");
    } else {
      setErr("");
      console.log("email", email);
      console.log("password", password);
    }
  };

  return (
    <Container component="main" maxWidth="xs" className={classes.paper}>
      <div>
        <Typography component="h3" variant="h7">
          ЛОГИН
        </Typography>
        <TextField
          error={err === ""}
          helperText={err === "" ? "Некорректный ввод!" : " "}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="login"
          name="login"
          autoComplete="login"
          autoFocus
          InputProps={{
            classes: {
              input: classes.multilineColor
            }
          }}
          onChange={event => setEmail(event.target.value)}
        />
        <Typography component="h3" variant="h7">
          ПАРОЛЬ
        </Typography>
        <TextField
          error={err === ""}
          helperText={err === "" ? "Некорректный ввод!" : " "}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          type="password"
          id="password"
          autoComplete="current-password"
          InputProps={{
            classes: {
              input: classes.multilineColor
            }
          }}
          onChange={event => setPassword(event.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={onSubmitForm}
        >
          Войти
        </Button>
      </div>
    </Container>
  );
}

export default withRouter(SignIn);
{
}
