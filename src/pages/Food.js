// import React, { useState, useEffect } from 'react';
// import Container from '@material-ui/core/Container';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Hidden from '@material-ui/core/Hidden';
// import Image from '../assets/mac.png';
// import axios from 'axios'
// import mockR from './mockR.json'
// import mockRF from './mockRF.json'
// import TextField from '@material-ui/core/TextField';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import mock from './mock.json'
// import { useHistory } from "react-router-dom";


// const useStyles = makeStyles({
//     card: {
//       display: 'flex',
//     },
//     cardDetails: {
//       flex: 1,
//     },
//     cardMedia: {
//       width: 120,
//     },
//     multilineColor:{
//       backgroundColor:'white'
//   }
//   });

// export default function Restaurants() {
//     const classes = useStyles();
//     const [rests, setRests] = useState([])
//     const [search, setSearch] = useState('');

//     let history = useHistory();

//     function BlogPost() {
//       let { id } = useParams();
//     }

//     const onClick = (e, data) =>{

//         axios.get('/localhost/'+data.id, {
//             params: {
//               ID: data.id
//             }
//           })
//           .then(function (response) {
//             console.log(response);
//             if ('data' in response)
//             {
//               console.log(response.data)
//               setRests(response.data)
//             }
//           })
//           .catch(function (error) {
//             console.log(error);
//             setRests(mockRF.data)
//           })
//           .then(function () {
//           });
//     }
    
//     useEffect(() => {
//       axios.get('/localhost', {
//         params: {
//           ID: 12345
//         }
//       })
//       .then(function (response) {
//         console.log(response);
//         if ('data' in response)
//         {
//           console.log(response.data)
//           setRests(response.data)
//         }
//       })
//       .catch(function (error) {
//         console.log('object')
//         console.log(error);
//         setRests(mockR.data)
//       })
//       .then(function () {
//       });
//     }, []);

//     const handleChange = (e) =>{
//       setSearch(e.target.value);
//       console.log("handleChange")
//     }
//           return (
//             <Container maxWidth="lg">
//                 <main>
//                     <Typography component="h2" variant="h2" align="center" style={{color: '#FFF'}}>
//                         Рестораны
//                     </Typography>
//                     <TextField
//                       variant="outlined"
//                       margin="normal"
//                       className="input"
//                       fullWidth
//                       InputProps={{
//                         classes: {
//                             input: classes.multilineColor
//                         }
//                       }}
//                       id="search"
//                       name="search"
//                       autoFocus
//                       onChange={handleChange}
//                     />
//                 {rests.map(rest => 
//                     {
//                       if (rest.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 || search==='')
//                       {

                     
//                     return <div>
//                         <div>
//                             <Grid item xs={12} md={12}>
//                                 <CardActionArea 
//                                 component="a" 
//                                 href="#"
//                                 // onClick={((e) => onClick(e, rest))}
//                                 onClick={handleClick}
//                                 id={rest.id}
//                                 >
//                                     <Card className={classes.card}>
//                                         <CardMedia className={classes.cardMedia} image={rest.img} title={4} />
//                                         <div className={classes.cardDetails}>
//                                             <CardContent>
//                                             <Typography component="h2" variant="h5">
//                                                 Название ресторана: {rest.name}
//                                             </Typography>
//                                             <Typography variant="subtitle1" color="textSecondary">
//                                                 Описание ресторана: {rest.description}
//                                             </Typography> 
//                                             <Typography variant="subtitle1" paragraph >
                                                
//                                             </Typography>
//                                             </CardContent>
//                                         </div>
//                                     </Card>
//                                 </CardActionArea>
//                             </Grid>
//                         </div>
//                 </div> }})}
//                 </main>
//             </Container>
//         )
// }