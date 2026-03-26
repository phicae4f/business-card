import { IoMdPin } from "react-icons/io";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { scrollToSection } from "../utils/scrollToSection";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <a
            href="#"
            className="header__logo"
            aria-label="Навигация на главную"
          >
            <MdOutlineMapsHomeWork size={80} />
            <h2>
              <span>БАРС-В</span>
              <span>строительная компания</span>
            </h2>
          </a>
          <div className="header__right">
            <div className="header__location">
              <IoMdPin size={30} />
              <span>Воскресенск (МО)</span>
            </div>
            <ul className="header__list">
              <li className="header__item">
                <button
                  type="button"
                  onClick={() => scrollToSection("equipment")}
                >
                  О нас
                </button>
              </li>
              <li className="header__item">
                <button
                  type="button"
                  onClick={() => scrollToSection("equipment")}
                >
                  Виды работ
                </button>
              </li>
              <li className="header__item">
                <button
                  type="button"
                  onClick={() => scrollToSection("equipment")}
                >
                  Оборудование
                </button>
              </li>
              <li className="header__item">
                <button
                  type="button"
                  onClick={() => scrollToSection("equipment")}
                >
                  Наши работы
                </button>
              </li>
              <li className="header__item">
                <button type="button">Контакты</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
