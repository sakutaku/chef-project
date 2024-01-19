import React, { useState } from 'react';


const Header = () => {
  const [active, setActive] = useState('header-inner');
  const [active2, setActive2] = useState('header');

  const navToggle = () => {
    if (active === 'header-inner') {
      setActive('header-inner header-inner-active');
    } else setActive('header-inner');

    if (active2 === 'header') {
      setActive2('header header-active');
    } else setActive2('header');
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className={active2}>
      <div className={`container ${active}`}>
        <div className="logo" onClick={handleScrollToTop}>Logo</div>
        <div className="header-inner-center">
          <a href="#about" className="header-about">О нас</a>
          <a href="#news" className="header-news">События</a>
          <a href="#partners" className="header-partners">Партнеры</a>
          <a href="#team" className="header-contacts">Команда</a>
        </div>
        <div className="header-btns">
          <button className="header-btn-one">Вступить в сообщество</button>
          <button className="header-btn-two">Связаться с сообществом</button>
        </div>
      </div>
      <div className="nav-toggler" onClick={navToggle}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </header>
  );
};

export default Header;