import React from "react";
import Container from "@material-ui/core/Container";
import "../assets/style.css";
import Delivery from "../assets/delivery.png";
import choice from "../assets/choice.png";
import food from "../assets/food.png";
import MainHeader from "../assets/main-header.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  backGround: {
    backgroundImage: "none"
  }
});

export default function Home() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <main className={classes.backGround}>
        <div class="main-header">
          <img src={MainHeader} alt="logodd" />
        </div>
        <p class="main-dscr">Крупнейшая доставка еды в общежития</p>
        <div class="description">
          <div class="main-delivery-speed-1">
            <img class="main-photo" src={choice} alt="" />
            <div class="main-text test">
              <h3 class="main-text-h3">Большой выбор</h3>
              <p class="main-text-p">
                {" "}
                Наш сервис поддерживает множество кафе и ресторанов,
                предоставляющих как традиционную, так и веганскую кухню
              </p>
            </div>
          </div>
          <div class="main-delivery-speed">
            <img class="main-photo" src={Delivery} alt="" />
            <div class="main-text">
              <h3 class="main-text-h3">Скорость доставки</h3>
              <p class="main-text-p">
                Доставим ваш заказ в сжатые сроки прямо к комнате
              </p>
            </div>
          </div>
          <div class="main-food-sharing">
            <img class="main-photo" src={food} alt="" />
            <div class="main-text">
              <h3 class="main-text-h3">Фудшеринг</h3>
              <p class="main-text-p">
                Вы всегда можете купить еду у соседа или предложить свою
              </p>
            </div>
          </div>
        </div>
        <a href="/restaurants" class="btn">
          Заказать
        </a>
      </main>
    </Container>
  );
}
