import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Chefs = () => {
  return (
    <Fade>
      <div className="container">
        <div className="chefs">
          <h2 className="chefs-title">Актив-команда</h2>
          <div className="chef-main-txt">
            Каждый проект реализуется по Agile силами самих шеф-поваров. Административная команда помогает направить
            деятельность в нужную сторону и выставлять высокие цели и планки работы.
          </div>
          <div className="chefs-cards">
            <div className="chefs-card">
              <div>
                <img
                  className="chef-img"
                  src="https://thumb.tildacdn.com/tild6532-3462-4262-b565-363734373132/-/resize/400x/-/format/webp/noroot.png"
                  alt="chef1"
                />
              </div>
              <div>
                <h5 className="chef-name">Николай Сарычев</h5>
                <div className="chef-role">Президент Ассоциации</div>
                <div className="chef-txt">Движение вперед и организация работы Ассоциации</div>
              </div>
            </div>
            <div className="chefs-card">
              <div>
                <img
                  className="chef-img"
                  src="https://thumb.tildacdn.com/tild3536-6337-4564-a136-306433373866/-/resize/400x/-/format/webp/noroot.jpg"
                  alt="chef1"
                />
              </div>
              <div>
                <h5 className="chef-name">Павел Васильевв</h5>
                <div className="chef-role">Вице-президент</div>
                <div className="chef-txt">Координация консалтинговых проектов</div>
              </div>
            </div>
            <div className="chefs-card">
              <div>
                <img
                  className="chef-img"
                  src="https://thumb.tildacdn.com/tild3437-3765-4237-b666-323438386233/-/resize/400x/-/format/webp/noroot.png"
                  alt="chef1"
                />
              </div>
              <div>
                <h5 className="chef-name">Андрей Романов</h5>
                <div className="chef-role">Директор по развитию</div>
                <div className="chef-txt">Стратегические планы и цели Ассоциации. Организация мероприятий Ассоциации
                </div>
              </div>
            </div>
            <div className="chefs-card">
              <div>
                <img
                  className="chef-img"
                  src="https://thumb.tildacdn.com/tild3964-3162-4238-b863-303538613533/-/resize/400x/-/format/webp/noroot.jpg"
                  alt="chef1"
                />
              </div>
              <div>
                <h5 className="chef-name">Олег Вежнин</h5>
                <div className="chef-role">Директор по стратегическим партнёрствам</div>
                <div className="chef-txt">Работа со стратегическими партнёрами Ассоциации</div>
              </div>
            </div>
            <div className="chefs-card">
              <div>
                <img
                  className="chef-img"
                  src="https://thumb.tildacdn.com/tild3165-3665-4462-a236-346136313135/-/resize/400x/-/format/webp/noroot.jpg"
                  alt="chef1"
                />
              </div>
              <div>
                <h5 className="chef-name">Вадим Емелиян</h5>
                <div className="chef-role">Директор по маркетингу</div>
                <div className="chef-txt">Привлечение партнёров, координация маркетинговых активностей Ассоциации
                </div>
              </div>
            </div>
            <div className="chefs-card">
              <div>
                <img
                  className="chef-img"
                  src="https://thumb.tildacdn.com/tild6534-3364-4663-b933-373864653364/-/resize/400x/-/format/webp/noroot.png"
                  alt="chef1"
                />
              </div>
              <div>
                <h5 className="chef-name">Иван Богатырев</h5>
                <div className="chef-role">PR-менеджер</div>
                <div className="chef-txt">Координация внешних и внутренних коммуникаций Ассоциации</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Chefs;