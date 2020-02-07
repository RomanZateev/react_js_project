import React from "react";
import "../assets/style.css";
import Avatarka from "../assets/avatarka.jpg";

export default function FoodSharing() {
  return (
    <main>
      <div class="main-haeder-food">
        <h2>Что такое FOOD SHARING?</h2>
        <p>
          Наш сервис предоставляет возможность избавляться от излишков еды с
          умом.Вы всегда можете выложить еду, которую хотите отдать, или
          объединиться с другими и приготовить какое-то блюдо вместе.
        </p>
      </div>
      <div class="foodsh">
        <img src={Avatarka} alt="" />

        <p>
          {" "}
          Всем привет! хочу приготовить пиццу по маминому рецепту! Кто за? У
          меня есть сыр и тесто. <br />
          <div>- ВАСЯ</div>
        </p>
      </div>
      <div class="foodsh">
        <img src={Avatarka} alt="" />
        <p>
          привет вася! хорошая идея! у меня есть тесто и кетчуп. какая у тебя
          комната?<div>- ПЕТЯ</div>
        </p>
      </div>
      <div class="foodsh">
        <img src={Avatarka} alt="" />
        <p>
          отлично, друг! заходи в 308а, буду очень рад!
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
    </main>
  );
}
