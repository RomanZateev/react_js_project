import React from "react";
import "../assets/style.css";
import Avatarka from "../assets/avatarka.jpg";
import Container from "@material-ui/core/Container";
import User1 from "../assets/user1.jpg";
import User2 from "../assets/user2.jpg";

export default function FoodSharing() {
  return (
    <main>
      <Container>
        <div class="main-haeder-food">
          <h2>Что такое FOOD SHARING?</h2>
          <p>
            Наш сервис предоставляет возможность найти применение ненужным
            продуктам с умом. Вы всегда можете выложить еду, которую хотите
            отдать, или объединиться с другими жителями общежития и приготовить
            блюдо вместе.
          </p>
        </div>
        <div class="foodsh">
          <img src={User1} alt="" />

          <p>
            {" "}
            Всем привет! хочу приготовить пиццу по маминому рецепту! Кто за? У
            меня есть сыр и тесто. <br />
            <div>- ВАСЯ</div>
          </p>
        </div>
        <div class="foodsh">
          <img src={User2} alt="" />
          <p>
            привет вася! хорошая идея! у меня есть колбаса и кетчуп. какая у
            тебя комната?<div>- ПЕТЯ</div>
          </p>
        </div>
        <div class="foodsh">
          <img src={User1} alt="" />
          <p>
            отлично, друг! заходи в 308а, пароль "фудшеринг". Буду очень рад!
            <div>- ВАСЯ</div>
          </p>
        </div>
        <div class="foodsh-feedback">
          <form class="decor">
            <div class="form-left-decoration"></div>
            <div class="form-right-decoration"></div>
            <div class="circle"></div>
            <div class="form-inner">
              <h3>Написать нам</h3>
              <input type="text" placeholder="Username"></input>
              <textarea placeholder="Сообщение..." rows="3"></textarea>
              <input type="submit" value="Отправить"></input>
            </div>
          </form>
        </div>
        <div class="foodsh-dscr">
          <p>Просто оставьте сообщение на форуме и следите за откликами</p>
        </div>
      </Container>
    </main>
  );
}
