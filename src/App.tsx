import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <>
      <Header/>
      <div className="main-img-section">
        <div className="main-img"></div>
        <div className="main-img-section-txt">Об ассоциации</div>
      </div>
      <div className="container">
        <div className="green-box">
          CHEFS TEAM RUSSIA -
          ПРОРЫВ В КУЛИНАРНЫХ
          СООБЩЕСТВАХ РОССИИ
        </div>
      </div>
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
      <Fade>
        <div className="container history-section">
          <div className="history">
            <div className="history-txt">
              <p className="history-txt-one">
                Группа из 20 шеф-поваров объединились в один чат, когда отменилось мероприятие, где они были спикерами.
                Чат остался для обмена идеями, общения, обсуждения проблем и задач. За несколько лет к 20 шефам
                присоединилась еще 1600 профессионалов!
              </p>
              <p>
                16 июня 2021 года была получена официальная регистрация в качестве Некоммерческой Профессиональной
                Ассоциации.
              </p>
            </div>
            <div className="history-label">
              <div className="history-line"></div>
              <h2 className="history-title">история создания</h2>
            </div>
          </div>
        </div>
      </Fade>
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
      <Fade>
        <div className="success">
          <div className="container">
            <div>
              <div className="success-above">
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
      <Fade>
        <div className="says">
          <div className="container">
            <h2 className="says-title">Что говорят шефы?</h2>
            <div className="says-cards">
              <div className="says-card">
                <div className="says-card-txt">
                  Что же для меня и моих коллег Сообщество @chefs_team ?
                  Это прежде всего близкие люди: по духу и жизненным ценностям
                  люди. К которым я могу в любое время обратится и получить
                  квалифицированный ответ. Это глаза и поддержка шефов
                </div>
                <div className="says-card-icon"></div>
                <div className="says-card-person">
                  <div>
                    <img
                      className="says-card-img"
                      src="https://static.tildacdn.com/tild3335-6238-4264-b863-323839346137/noroot.png"
                      alt="img-1"
                    />
                  </div>
                  <div>
                    <h4 className="says-card-person-title">Андрей Забелин, Москва</h4>
                  </div>
                </div>
              </div>
              <div className="says-card">
                <div className="says-card-txt">
                  Если ты в живешь своей профессией, то нужно быть в «гуще» событий. Наше ремесло требует постоянного
                  круговорота знаний: получил-поделился-получил… Только так Шеф растёт!!! Этот бесконечный процесс
                  неумолимо толкает вперёд и даёт развитие во всем…
                </div>
                <div className="says-card-icon"></div>
                <div className="says-card-person">
                  <div>
                    <img
                      className="says-card-img"
                      src="https://static.tildacdn.com/tild3533-6630-4233-b564-343539383030/PHOTO-2021-09-01-17-.jpg"
                      alt="img-1"
                    />
                  </div>
                  <div>
                    <h4 className="says-card-person-title">Дан Марц, Москва</h4>
                  </div>
                </div>
              </div>
              <div className="says-card">
                <div className="says-card-txt">
                  <div>Одна страна, одна команда!</div>
                  <div>@chefs_team!</div>
                  <div>Мы делаем одно дело!</div>
                  <div>Объединяем от Камчатки до Калининграда.</div>
                </div>
                <div className="says-card-icon"></div>
                <div className="says-card-person">
                  <div>
                    <img
                      className="says-card-img"
                      src="https://static.tildacdn.com/tild3934-6334-4132-b733-346664383966/photo.jpg"
                      alt="img-1"
                    />
                  </div>
                  <div>
                    <h4 className="says-card-person-title">Павел Зубарев, Тюмень</h4>
                  </div>
                </div>
              </div>
              <div className="says-card">
                <div className="says-card-txt">
                  В первую очередь, это сообщество профессионалов! Это супер находится среди тех, с кем есть о чём
                  поговорить, посоветоваться,
                  обсудить наболевшие вопросы. Chefs Team Russia это моя зона
                  комфорта💯! Chefs Team Russia это мощно👩🍳 👨🍳
                </div>
                <div className="says-card-icon"></div>
                <div className="says-card-person">
                  <div>
                    <img
                      className="says-card-img"
                      src="https://static.tildacdn.com/tild6266-6135-4061-b036-656436303034/photo.jpg"
                      alt="img-1"
                    />
                  </div>
                  <div>
                    <h4 className="says-card-person-title">Лариса Максимова, Новосибирск</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Footer/>
    </>
  );
}

export default App;
