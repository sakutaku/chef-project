import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Why = () => {
  return (
    <Fade>
      <div className="container why-section">
        <div className="why">
          <h2 className="why-title">зачем нам все это?</h2>
          <div className="why-line"></div>
          <div className="why-txt">
            <p className="why-txt-one">
              Наша миссия: объединить людей и знания для развития гастрономии нашей страны.
              "Одна страна - одна команда": мы объединяем профессионалов для совместного развития и решения проблем
              отрасли.
            </p>
            <p className="why-txt-two">
              "С Chefs Team везде как дома": мы как одна семья, помогаем своим коллегам в любой ситуации всем, чем
              можем от контактов поставщиков в новом городе до точечной финансовой помощи.
              Вызовы, который бросает нам рынок каждый год, невозможно преодолеть в одиночку, поэтому лучшее, что мы
              можем сделать - развиваться вместе и встречать проблемы, стоя плечом к плечу.
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Why;