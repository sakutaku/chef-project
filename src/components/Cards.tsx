import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Cards = () => {
  return (
    <Fade>
      <div className="container cards-section">
        <div className="cards">
          <div className="card">
            <div>
              <img src="https://static.tildacdn.com/tild3863-6264-4131-b237-353062613437/DSC00313_1.jpg" alt="img"
                   className="card-img"/>
            </div>
            <div className="card-info">
              <h4 className="card-title">4 года интенсивного роста</h4>
              <div className="card-txt">Из чата с 20 шеф-поварами в WhatsApp до всероссийского сообщества из 1500+
                человек!
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <img src="https://static.tildacdn.com/tild3432-3134-4637-a435-303030623065/DSC_7727_1.jpg" alt="img"
                   className="card-img"/>
            </div>
            <div className="card-info">
              <h4 className="card-title">Объединяем людей и знания для развития гастрономии!а</h4>
              <div className="card-txt">Шефы не платят взносы, но получают максимальную отдачу и чувствуют личное
                внимание к себе
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <img src="https://static.tildacdn.com/tild6135-3238-4432-b435-336132303961/DSC00549_2.jpg" alt="img"
                   className="card-img"/>
            </div>
            <div className="card-info">
              <h4 className="card-title">34 Амбассадора в регионах</h4>
              <div className="card-txt">Активная работа во всех уголках России за счет местных активных шеф-поваров и
                объединений.
                9 региональных и 3 общих чата в Telegram
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Cards;