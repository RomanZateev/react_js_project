// Делал с локальным mock.RF
// import React, { useState, useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import axios from "axios";
// import mockRF from "./mockRF.json";
// import Container from "@material-ui/core/Container";
// import Typography from "@material-ui/core/Typography";
// import Grid from "@material-ui/core/Grid";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import TextField from "@material-ui/core/TextField";
// import { useHistory } from "react-router-dom";

// const useStyles = makeStyles({
//   card: {
//     display: "flex"
//   },
//   cardDetails: {
//     flex: 1
//   },
//   cardMedia: {
//     width: 120
//   },
//   multilineColor: {
//     backgroundColor: "white"
//   }
// });
// //все выполняется дважды, непонятно почему
// export default function Food() {
//   let { id } = useParams();
//   const classes = useStyles();
//   const [rests, setRests] = useState({});
//   const [meals, setMeals] = useState([]);
//   const [search, setSearch] = useState("");

//   console.log(id);

//   useEffect(() => {
//     axios
//       .get("/localhost", {
//         params: {
//           ID: 12345
//         }
//       })
//       .then(function(response) {
//         console.log(response);
//         if ("data" in response) {
//           setRests(response.data);
//         }
//       })
//       .catch(function(error) {
//         console.log(error);

//         if ("meals" in mockRF.data) {
//           console.log(rests);
//           console.log("meals: ", mockRF.data.meals);
//           setRests(mockRF.data);
//           setMeals(mockRF.data.meals);
//         }
//       })
//       .then(function() {});
//   }, []);

//   const handleChange = e => {
//     setSearch(e.target.value);
//     console.log("handleChange");
//   };

//   console.log(meals);

//   return (
//     <Container maxWidth="lg">
//       <main>
//         <Typography
//           component="h2"
//           variant="h2"
//           align="center"
//           style={{ color: "#FFF" }}
//         >
//           Меню ресторана
//         </Typography>
//         <TextField
//           variant="outlined"
//           margin="normal"
//           className="input"
//           fullWidth
//           InputProps={{
//             classes: {
//               input: classes.multilineColor
//             }
//           }}
//           id="search"
//           name="search"
//           autoFocus
//           onChange={handleChange}
//         />
//         {meals.map(rest => {
//           if (
//             (rest.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
//               search === "") &&
//             rest.name.toLowerCase().indexOf(search.toLowerCase()) === 0
//           ) {
//             return (
//               <div>
//                 <div>
//                   <Grid item xs={12} md={12}>
//                     <CardActionArea
//                       component="a"
//                       href="#"
//                       // onClick={((e) => onClick(e, rest))}
//                       //onClick={handleClick}
//                       id={rest.id}
//                     >
//                       <Card className={classes.card}>
//                         <CardMedia
//                           className={classes.cardMedia}
//                           image={rest.img}
//                           title={4}
//                         />
//                         <div className={classes.cardDetails}>
//                           <CardContent>
//                             <Typography component="h2" variant="h5">
//                               {rest.name}
//                             </Typography>
//                             <Typography
//                               variant="subtitle1"
//                               color="textSecondary"
//                             >
//                               {rest.description}
//                             </Typography>
//                             <Typography
//                               variant="subtitle1"
//                               paragraph
//                             ></Typography>
//                           </CardContent>
//                         </div>
//                       </Card>
//                     </CardActionArea>
//                   </Grid>
//                 </div>
//               </div>
//             );
//           }
//         })}
//       </main>
//     </Container>
//   );
// }
import { useParams } from "react-router-dom";
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
import { red } from "@material-ui/core/colors";

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
  },
  backGround: {
    backgroundImage: "none"
  }
});

const useStylesNEW = makeStyles({
  Typography: {
    color: red
  }
});

export default function Food(props) {
  console.log("props", props);

  const classes = useStyles();
  const classesNEW = useStylesNEW();

  const [rests, setRests] = useState([]);
  const [search, setSearch] = useState("");

  let { id } = useParams();

  //http://172.20.37.106:8484/restaurant/

  useEffect(() => {
    axios
      .get("localhost/restaurant/" + id, {
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
      <main className={classes.backGround}>
        <Typography
          component="h2"
          variant="h2"
          align="center"
          style={{ color: "#FFF" }}
        >
          Меню ресторана: {localStorage.getItem("restaurant")}
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
            (rest.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
              search === "") &&
            rest.name.toLowerCase().indexOf(search.toLowerCase()) === 0
          ) {
            return (
              <Grid item xs={12} md={12}>
                <CardActionArea
                  component="a"
                  href=""
                  // onClick={((e) => onClick(e, rest))}
                  // onClick={e => handleClick(e, rest.id)}
                  id={rest.id}
                >
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={rest.image}
                      title={4}
                    />
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          {rest.name}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {rest.description}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          paragraph
                          className={classesNEW.Typography}
                        >
                          {rest.value} р
                        </Typography>
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
