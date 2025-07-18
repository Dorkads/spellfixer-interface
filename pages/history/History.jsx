import { useState, useEffect } from 'react';
import axios from 'axios';

import './History.scss';

import btnLeft from '../../src/assets/icons/others/arrow-left.svg';
import btnRight from '../../src/assets/icons/others/arrow-right.svg';

export const History = () => {
  const [history, setHistory] = useState([]);

  const ITEMS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const userString = localStorage.getItem('user');
    let username = '';
    if (userString) {
      try {
        username = JSON.parse(userString).username;
      } catch {
        console.error('Не смогли распарсить user');
      }
    }

    if (!username) {
      console.error('Username не найден!');
      return;
    }

    axios
      .get('http://127.0.0.1:5000/history', { params: { username } })
      .then(({ data }) => {
        // data — это массив {input, output, date: "2025-06-25T14:23:00"}
        setHistory(data);
      })
      .catch((err) => {
        console.error('Не удалось загрузить историю:', err);
      });
  }, []);

  const totalPages = Math.ceil(history.length / ITEMS_PER_PAGE);
  const start = currentPage * ITEMS_PER_PAGE;
  const visibleHistory = history.slice(start, start + ITEMS_PER_PAGE);

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
                {visibleHistory.map(({ input, output, date }, idx) => (
                  <tr className="history__table__body__row" key={start + idx}>
                    <td className="history__table__body__text">{input}</td>
                    <td className="history__table__body__text">{output}</td>
                    <td className="history__table__body__text">
                      {new Date(date).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="history__pagination">
            <div className="history__pagination__list">
              <p className="history__pagination__count">
                Страница {currentPage + 1} из {totalPages || 1}
              </p>
            </div>

            <div className="history__pagination__arrows">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 0))}
                disabled={currentPage === 0}
                className="history__pagination__arrows__btn"
              >
                <img
                  className="history__pagination__arrows__left"
                  src={btnLeft}
                  alt="btn left"
                />
              </button>

              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages - 1))
                }
                className="history__pagination__arrows__btn"
              >
                <img
                  disabled={currentPage >= totalPages - 1}
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
