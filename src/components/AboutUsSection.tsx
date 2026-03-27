import { scrollToSection } from "../utils/scrollToSection";

export const AboutUsSection = () => {
  return (
    <section className="about" id="about-us">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__left">
            <h2 className="about__title">О компании</h2>
            <div className="about__text">
              <p>
                ООО «БАРС-В» основано 2 ноября 1999 года. На протяжении более 26
                лет компания успешно работает на строительном рынке Московской
                области.
              </p>
              <p>
                На собственной производственной базе площадью более 1,5 га
                расположены офисные и складские помещения, что позволяет
                оперативно решать любые задачи и контролировать качество на всех
                этапах строительства.
              </p>
              <p>
                Мы гарантируем качество выполняемых работ, которые полностью
                соответствуют требованиям действующей нормативной и технической
                документации. Накопленный опыт позволяет нам обеспечивать
                выполнение всех строительных работ в срок и вводить объекты в
                эксплуатацию без задержек.
              </p>
            </div>
            <div className="about__principles">
              <h2 className="about__principles-title">Наши принципы:</h2>
              <ul className="about__list">
                <li className="about__item">
                  Комплексный подход к строительству
                </li>
                <li className="about__item">
                  Индивидуальный подход к каждому заказчику
                </li>
                <li className="about__item">Грамотная организация работ</li>
                <li className="about__item">Гибкая ценовая политика</li>
              </ul>
            </div>
            <button
              className="about__button"
              type="button"
              onClick={() => scrollToSection("contact-us")}
            >
              Связаться с нами
            </button>
          </div>
          <div className="about__right">
            <img
              src="/img/logo/logo.jpeg"
              alt="Логотип компании ООО БАРС-В"
              className="about__img"
              width={500}
              height={300}
            />
            <div className="about__img-background"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
