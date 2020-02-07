import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Basket from "../../assets/basket.png";
import Acount from "../../assets/acount.png";
import HeaderLogo from "../../assets/header-logo.png";
import Dorm from "../../assets/dorm.png";
import Background from "../../assets/header-bg.jpg";
import "../../assets/style.css";

var sectionStyle = {
  width: "100%",
  height: "100px",
  backgroundImage: `url(${Background})`
};

var imageStyle = {
  width: "90px",
  height: "90px"
};

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none"
    }
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6)
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[700]
        : theme.palette.grey[200]
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2)
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    }
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* <CssBaseline />
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar} style={ sectionStyle }>
          <Link color="textPrimary" className={classes.link} href="/">
            <img src={HeaderLogo} alt="HeaderLogo" style={ imageStyle }/>
          </Link>
          <nav>
            <Link variant="button" color="textPrimary" className={classes.link} href="/restaurants" variant="h4" align="center">
              Доставка
            </Link>
            <img src={Dorm} alt="Dorm" style={ imageStyle }/>
            <Link variant="button" color="textPrimary" className={classes.link} href="/foodsharing" variant="h4" align="center">
              Фудшеринг
            </Link>
          </nav>
          <img src={Basket} alt="Basket" style={ imageStyle } justify='center'/>
          <Link className={classes.link} href="/auth" justify='center'>
            <img src={Acount} alt="Basket" style={ imageStyle }/>
          </Link>
        </Toolbar>
      </AppBar> */}
      <header>
        <a href="/">
          <img src={HeaderLogo} alt="logo" class="logo" />
        </a>
        <a class="nav nav1" href="/restaurants">
          Delivery
        </a>
        <a href="#">
          <img class="dormitory" src={Dorm} alt="logo" />
        </a>
        <a class="nav nav2" href="/foodsharing">
          Food sharing
        </a>
        <div class="basket-accont">
          <a href="#">
            <img class="basket" src={Basket} alt="logo" />
          </a>
          <a href="/auth">
            <img class="acount" src={Acount} alt="logo" />
          </a>
        </div>
      </header>
    </React.Fragment>
  );
}
