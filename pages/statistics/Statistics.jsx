import { useState, useEffect } from 'react';
import axios from 'axios';

import './Statistiсs.scss';
import btnLeft from '../../src/assets/icons/others/arrow-left.svg';
import btnRight from '../../src/assets/icons/others/arrow-right.svg';

export const Statistics = () => {
  const [history, setHistory] = useState([]);
  const [wordCounts, setWordCounts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Получаем имя пользователя из localStorage
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
        setHistory(data);
      })
      .catch((err) => {
        console.error('Не удалось загрузить историю:', err);
      });
  }, []);

  // Вычисляем статистику слов при обновлении history
  useEffect(() => {
    if (!history.length) {
      setWordCounts([]);
      setCurrentPage(1);
      return;
    }

    const allText = history
      .map(({ input }) => input)
      .join(' ')
      .toLowerCase();
    const words = allText.match(/\b\w+\b/g) || [];

    const counts = {};
    words.forEach((word) => {
      counts[word] = (counts[word] || 0) + 1;
    });

    const sorted = Object.entries(counts)
      .map(([word, count]) => ({ word, count }))
      .sort((a, b) => b.count - a.count);

    setWordCounts(sorted);
    setCurrentPage(1);
  }, [history]);

  // Логика пагинации
  const totalPages = Math.ceil(wordCounts.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = wordCounts.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="statistics">
      <div className="statistics__container">
        <div className="statistics__inner">
          <h2 className="statistics__title">Статистика слов</h2>
          {wordCounts.length === 0 ? (
            <p className="statistics__empty">Нет данных для отображения.</p>
          ) : (
            <>
              <table className="statistics__table">
                <thead className="statistics__thead">
                  <tr className="statistics__thead__tr">
                    <th className="statistics__thead__th">Слово</th>
                    <th className="statistics__thead__th">Количество</th>
                  </tr>
                </thead>
                <tbody className="statistics__tbody">
                  {currentItems.map(({ word, count }, idx) => (
                    <tr className="statistics__tbody__tr" key={idx}>
                      <td className="statistics__tbody__td">{word}</td>
                      <td className="statistics__tbody__td">{count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="history__pagination">
                <div className="history__pagination__list">
                  <p className="history__pagination__count">
                    Страница {currentPage} из {totalPages}
                  </p>
                </div>

                <div className="history__pagination__arrows">
                  <button
                    className="history__pagination__arrows__btn"
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                  >
                    <img
                      className="history__pagination__arrows__left"
                      src={btnLeft}
                      alt="btn left"
                    />
                  </button>

                  <button
                    className="history__pagination__arrows__btn"
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                  >
                    <img
                      className="history__pagination__arrows__right"
                      src={btnRight}
                      alt="btn right"
                    />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
