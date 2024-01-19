import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

const Success = () => {
  return (
    <Fade>
      <div className="success">
        <div className="container">
          <div>
            <div className="success-above" id="news">
              <h2 className="success-title">Наши успехи 2022 года</h2>
              <p className="success-txt">
                Мы делаем большие успехи и всегда развиваемся! Вот некоторые факты о том, как мы работаем:
              </p>
            </div>
            <Slide>
              <div className="success-cards">
                <div className="success-card">
                  <h4>1450 участников</h4>
                  <div>На конец 2022 года - это прирост на 55%. При этом, мы не гонимся за количеством. В Сообществе
                    только профессиональные Шефы!
                  </div>
                </div>
                <div className="success-card">
                  <h4>60 мероприятий</h4>
                  <div>Собственные мероприятия в Москве и регионах, встречи, мастер-классы, лекции</div>
                </div>
                <div className="success-card">
                  <h4>20+ charity</h4>
                  <div>Благотворительные мероприятия в детских домах, для бездомных и другие активности</div>
                </div>
                <div className="success-card">
                  <h4>65 ужинов</h4>
                  <div>Гастрономические ужины в регионах России, объединяющие всю географию нашей страны</div>
                </div>
              </div>
            </Slide>

          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Success;