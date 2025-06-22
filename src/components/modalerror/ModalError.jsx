import './ModalError.scss';

export const ModalError = ({ outputText, correctedWord }) => {
  return (
    <div className="modalerror">
      <div className="modalerror__inner">
        <div className="modalerror__error">
          <p className="modalerror__error__text">
            Вы ввели:
            <span className="modalerror__error__text__red">{outputText}</span>
          </p>
        </div>
        <div className="modalerror__edit">
          <p className="modalerror__edit__title">
            Скорее всего, в вашем слове есть ошибка
          </p>
          <p className="modalerror__edit__info">
            Исправленное слово:
            <span className="modalerror__edit__green">
              {correctedWord || 'Исправление не найдено'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
