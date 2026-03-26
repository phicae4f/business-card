export const HeroSection = () => {
  return (
    <section className="hero">
      <h1 className="visually-hidden">Строительная компания ООО "БАРС-В"</h1>
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__left">
            <h2 className="hero__title">Кто</h2>
            <h2 className="hero__text">
              Ваш надёжный партнёр в&nbsp;строительстве. Проектируем, строим,
              сдаём&nbsp;&mdash; от&nbsp;нулевого цикла до&nbsp;чистовой
              отделки.
            </h2>
          </div>
          <div className="hero__right">
            <ul className="hero__list">
              <li className="hero__item">
                <span className="hero__item-text">26+</span>
                <span className="hero__item-subtext">лет на рынке</span>
              </li>
              <li className="hero__item">
                <span className="hero__item-text">300 млн</span>
                <span className="hero__item-subtext">руб. годовой оборот</span>
              </li>
              <li className="hero__item">
                <span className="hero__item-text">1,5 га</span>
                <span className="hero__item-subtext">
                  собственная производственная база
                </span>
              </li>
              <li className="hero__item">
                <span className="hero__item-text">100+</span>
                <span className="hero__item-subtext">
                  реализованных объектов
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
