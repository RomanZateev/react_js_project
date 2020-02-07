import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import axios from "axios";
import mockR from "./mockR.json";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    display: "flex"
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 120
  },
  multilineColor: {
    backgroundColor: "white"
  }
});

export default function Restaurants() {
  const classes = useStyles();
  const [rests, setRests] = useState([]);
  const [search, setSearch] = useState("");

  let history = useHistory();

  function handleClick(e, id) {
    history.push("/restaurants/" + id);
  }
  //http://172.20.37.48:8484/restaurant
  useEffect(() => {
    axios
      .get("/localhost", {
        params: {
          ID: 12345
        }
      })
      .then(function(response) {
        console.log(response);
        if ("data" in response) {
          console.log(response.data);
          setRests(response.data);
        }
      })
      .catch(function(error) {
        console.log(error);
        setRests(mockR.data);
      })
      .then(function() {});
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };
  return (
    <Container maxWidth="lg">
      <main>
        <Typography
          component="h2"
          variant="h2"
          align="center"
          style={{ color: "#FFF" }}
        >
          Рестораны
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          className="input"
          fullWidth
          InputProps={{
            classes: {
              input: classes.multilineColor
            }
          }}
          id="search"
          name="search"
          autoFocus
          onChange={handleChange}
        />
        {rests.map(rest => {
          if (
            rest.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
            search === ""
          ) {
            return (
              <Grid item xs={12} md={12}>
                <CardActionArea
                  component="a"
                  href=""
                  // onClick={((e) => onClick(e, rest))}
                  onClick={e => handleClick(e, rest.id)}
                  id={rest.id}
                >
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={rest.img}
                      title={4}
                    />
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          Название ресторана: {rest.name}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          Описание ресторана: {rest.description}
                        </Typography>
                        <Typography variant="subtitle1" paragraph></Typography>
                      </CardContent>
                    </div>
                  </Card>
                </CardActionArea>
              </Grid>
            );
          }
        })}
      </main>
    </Container>
  );
}
