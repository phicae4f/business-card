import { useState } from "react";
import { IoMdPin } from "react-icons/io";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { scrollToSection } from "../utils/scrollToSection";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  const navItems = [
    { id: "about-us", label: "О нас" },
    { id: "services", label: "Компетенции и партнеры" },
    { id: "equipment", label: "Оборудование" },
    { id: "projects", label: "Наши работы" },
    { id: "contact-us", label: "Контакты" },
  ];

  return (
    <header className={`header ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="container">
        <div className="header__wrapper">
          <a href="#" className="header__logo" aria-label="Навигация на главную">
            <MdOutlineMapsHomeWork size={80} />
            <h2>
              <span>БАРС-В</span>
              <span>строительная компания</span>
            </h2>
          </a>

          <button 
            className="header__burger" 
            onClick={handleMenuToggle}
            aria-label="Меню"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`header__menu ${isMenuOpen ? "active" : ""}`}>
            <div className="header__right">
              <div className="header__location">
                <IoMdPin size={30} />
                <span>Воскресенск (МО)</span>
              </div>
              <ul className="header__list">
                {navItems.map((item) => (
                  <li className="header__item" key={item.id}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(item.id)}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};