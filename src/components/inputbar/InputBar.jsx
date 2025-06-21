import arrow from '../../assets/icons/others/arrow.svg';

import './InputBar.scss';

export const InputBar = () => {
  return (
    <div className="inputbar">
      <div className="inputbar__container">
        <div className="inputbar__inner">
          <form className="inputbar__form">

              <input
                className="inputbar__form__input"
                type="text"
                placeholder="Введите слово, которое хотите проверить"
              />
              <button className="inputbar__form__btn" type="submit">
                <img
                  className="inputbar__form__btn__img"
                  src={arrow}
                  alt="Отправить"
                />
              </button>

          </form>
        </div>
      </div>
    </div>
  );
};
