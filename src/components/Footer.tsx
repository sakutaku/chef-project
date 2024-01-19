import React from 'react';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div>
          <div onClick={handleScrollToTop} className="footer-logo-btn">
            <img
              alt="logo"
              src="https://thumb.tildacdn.com/tild3965-3735-4135-a362-653964353562/-/resize/240x/-/format/webp/noroot.png"
              className="footer-logo"
            />
          </div>
          <div className="footer-main-txt">
            © 2023 Chefs Team Russia (R)
            Ассоциация "Сообщество шеф-поваров "ШЕФС ТИМ" (Команда Шефов)
            ОГРН 1217700280137
            ИНН/КПП 9719016334/771901001
            Учетный номер Реестра некоммерческих организаций №7714064643
            Президент Сарычев Н.М.
          </div>
        </div>
        <div className="footer-links">
          <a href="#about" className="footer-about">О нас</a>
          <a href="#news" className="footer-news">События</a>
          <a href="#partners" className="footer-partners">Партнеры</a>
          <a href="#contacts" className="footer-contacts">Контакты</a>
        </div>
        <div className="footer-social">
          <div className="footer-tg"></div>
          <div className="footer-tg"></div>
          <div className="footer-tg"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;