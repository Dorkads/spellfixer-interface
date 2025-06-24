import './History.scss';

import btnLeft from '../../src/assets/icons/others/arrow-left.svg';
import btnRight from '../../src/assets/icons/others/arrow-right.svg';

export const History = () => {
  return (
    <div className="history">
      <div className="history__container">
        <div className="history__inner">
          <h2 className="history__title">История запросов</h2>
          <div className="history__table">
            <table className="history__tablet">
              <thead className="history__table__head">
                <tr className="history__table__head__row">
                  <th className="history__table__head__text">Текст</th>
                  <th className="history__table__head__text">Исправление</th>
                  <th className="history__table__head__text">Дата</th>
                </tr>
              </thead>

              <tbody className="history__table__body">
                <tr className="history__table__body__row">
                  <td className="history__table__body__text">text</td>
                  <td className="history__table__body__text">text</td>
                  <td className="history__table__body__text">01.01.2000</td>
                </tr>

                <tr className="history__table__body__row">
                  <td className="history__table__body__text">text</td>
                  <td className="history__table__body__text">text</td>
                  <td className="history__table__body__text">01.01.2000</td>
                </tr>

                <tr className="history__table__body__row">
                  <td className="history__table__body__text">text</td>
                  <td className="history__table__body__text">text</td>
                  <td className="history__table__body__text">01.01.2000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="history__pagination">
            <div className="history__pagination__list">
              <p className="history__pagination__count">Страница 1 из 30</p>
            </div>

            <div className="history__pagination__arrows">
              <button className="history__pagination__arrows__btn">
                <img
                  className="history__pagination__arrows__left"
                  src={btnLeft}
                  alt="btn left"
                />
              </button>

              <button className="history__pagination__arrows__btn">
                <img
                  className="history__pagination__arrows__right"
                  src={btnRight}
                  alt="btn right"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
