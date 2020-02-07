import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Background from "../../assets/header-bg.jpg";
import "../../assets/style.css";

var sectionStyle = {
  width: "100%",
  height: "100px",
  backgroundImage: `url(${Background})`
};

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

export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <footer style={sectionStyle}>
        <div class="feedback">
          <i class="fa fa-phone"></i>
          <a href="#">+7-800-555-35-35</a>
          <br></br>
          <i class="fa fa-envelope-square"></i>
          <a href="#">rich@dostavka.com</a>
        </div>

        <div class="footer-dscr">
          <h4>Работаем для вас</h4>
          <h2>Круглосуточно</h2>
        </div>
        <div class="social_footer">
          <a href="#">
            <i class="fa fa-vk fa-5" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i class="fa fa-facebook fa-5" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i class="fa fa-instagram fa-5" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i class="fa fa-youtube" aria-hidden="true"></i>
          </a>
        </div>
      </footer>
    </React.Fragment>
  );
}
