import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import mock from "./mock.json";
import { createMuiTheme } from "@material-ui/core/styles";
import "react-notification-alert/dist/animate.css";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
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
  const [name, setName] = useState("");

  console.log(props);

  const onSubmitForm = event => {
    if (email === "admin" && password === "admin") {
      props.history.push("/");
    } else {
    }
  };

  const onGet = event => {
    axios
      .get("https://swapi.co/api/people/m", {
        params: {
          ID: 12345
        }
      })
      .then(function(response) {
        console.log(response);
        if ("data" in response) {
          console.log(response.data.name);
          setName(response.data.name);
        }
      })
      .catch(function(error) {
        console.log(error);
        setName(mock.data.name);
      })
      .then(function() {
        // always executed
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Вход в Rich Dostavka {name}
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="login"
          label="Логин"
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
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Пароль"
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
