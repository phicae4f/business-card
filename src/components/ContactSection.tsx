import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegBuilding,
  FaFileDownload,
} from "react-icons/fa";
import { downloadDocument } from "../utils/downloadDocument";

export const ContactSection = () => {
  const phones = [
    "+7 (906) 744-83-36",
    "+7 (926) 222-46-36",
    "+7 (909) 979-99-97",
  ];

  const emails = ["bars-stroy@inbox.ru"];

  const details = [
    { label: "ИНН", value: "5005030551" },
    { label: "КПП", value: "500501001" },
  ];

  const contactItems = [
    {
      icon: FaMapMarkerAlt,
      title: "Адрес",
      content: (
        <p>
          140204, Московская область, г.о. Воскресенск,
          <br />
          тер. Старая промплощадка, д. 3В
        </p>
      ),
    },
    {
      icon: FaPhoneAlt,
      title: "Телефоны",
      content: phones.map((phone, index) => (
        <a
          key={index}
          href={`tel:${phone.replace(/[\s\-\(\)]/g, "")}`}
          className="contact__phone"
        >
          {phone}
        </a>
      )),
    },
    {
      icon: FaEnvelope,
      title: "Email",
      content: emails.map((email, index) => (
        <a key={index} href={`mailto:${email}`} className="contact__email">
          {email}
        </a>
      )),
    },
    {
      icon: FaRegBuilding,
      title: "Реквизиты",
      content: (
        <div className="contact__details">
          {details.map((detail, index) => (
            <p key={index}>
              <span className="contact__details-label">{detail.label}:</span>
              <span className="contact__details-value">{detail.value}</span>
            </p>
          ))}
        </div>
      ),
    },
  ];

  return (
    <section className="contact" id="contact-us">
      <div className="container">
        <h2 className="contact__title">Свяжитесь с нами</h2>

        <div className="contact__wrapper">
          <ul className="contact__list">
            {contactItems.map((item, index) => (
              <li className="contact__item" key={index}>
                <div className="contact__icon">
                  <item.icon />
                </div>
                <div className="contact__content">
                  <h3>{item.title}</h3>
                  {item.content}
                </div>
              </li>
            ))}
            <li className="contact__item contact__item--download">
              <div className="contact__icon">
                <FaFileDownload />
              </div>
              <div className="contact__content">
                <h3>Свидетельство о допуске</h3>
                <p>Скачайте документ, подтверждающий наши компетенции</p>
                <button
                  className="contact__download-btn"
                  onClick={downloadDocument}
                >
                  <FaFileDownload />
                  <span>Скачать PDF</span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
