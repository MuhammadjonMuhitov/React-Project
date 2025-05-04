import React from "react";
import "./style/about.css";

export const About = () => {
  return (
    <section className="about-section">
      <div className="about-background-circle"></div>

      <div className="about-container">
        {/* Фото */}
        <div className="about-image-wrapper">
          <img
            src="https://st4.depositphotos.com/3467581/24257/i/450/depositphotos_242578380-stock-photo-silhouette-of-black-supercar-on.jpg"
            alt="Серый автомобиль на тёмном фоне"
            className="about-image"
          />
        </div>

        {/* Текст */}
        <div className="about-text-block">
          <h2 className="about-title">О нас</h2>
          <p className="about-paragraph">
            Добро пожаловать в <span className="bold">MMM</span> — современный
            автосалон с индивидуальным подходом.
          </p>
          <p className="about-paragraph">
            С 2010 года мы помогаем людям находить автомобили своей мечты. У нас
            — честные цены, качественные авто и дружелюбный сервис.
          </p>
          <ul className="about-list">
            <li>Широкий выбор авто: от эконом до премиум</li>
            <li>Прозрачные условия — никаких скрытых комиссий</li>
            <li>Автокредит, трейд-ин, страховка</li>
            <li>Гарантия и техническое обслуживание</li>
          </ul>
          <p className="about-paragraph">
            Мы заботимся о вашем удобстве и безопасности. Приезжайте и убедитесь
            в этом лично!
          </p>
        </div>
      </div>
    </section>
  );
};
