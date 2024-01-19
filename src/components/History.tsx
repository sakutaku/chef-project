import React from 'react';
import { Fade } from 'react-awesome-reveal';

const History = () => {
  return (
    <Fade>
      <div className="container history-section" id="about" >
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
  );
};

export default History;