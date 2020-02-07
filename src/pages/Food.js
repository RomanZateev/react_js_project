import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import mockRF from "./mockRF.json";
import { useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
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
//все выполняется дважды, непонятно почему
export default function Food() {
  let { id } = useParams();
  const classes = useStyles();
  const [rests, setRests] = useState({});
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");

  console.log(id);

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
          setRests(response.data);
        }
      })
      .catch(function(error) {
        console.log(error);

        if ("meals" in mockRF.data) {
          console.log(rests);
          console.log("meals: ", mockRF.data.meals);
          setRests(mockRF.data);
          setMeals(mockRF.data.meals);
        }
      })
      .then(function() {});
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
    console.log("handleChange");
  };

  console.log(meals);

  return (
    <Container maxWidth="lg">
      <main>
        <Typography
          component="h2"
          variant="h2"
          align="center"
          style={{ color: "#FFF" }}
        >
          Блюда ресторана: {rests.name}
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
        {meals.map(rest => {
          if (
            rest.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
            search === ""
          ) {
            return (
              <div>
                <div>
                  <Grid item xs={12} md={12}>
                    <CardActionArea
                      component="a"
                      href="#"
                      // onClick={((e) => onClick(e, rest))}
                      //onClick={handleClick}
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
                            <Typography
                              variant="subtitle1"
                              color="textSecondary"
                            >
                              Описание ресторана: {rest.description}
                            </Typography>
                            <Typography
                              variant="subtitle1"
                              paragraph
                            ></Typography>
                          </CardContent>
                        </div>
                      </Card>
                    </CardActionArea>
                  </Grid>
                </div>
              </div>
            );
          }
        })}
      </main>
    </Container>
  );
}
