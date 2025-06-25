import { useState } from 'react';
import axios from 'axios';
import arrow from '../../assets/icons/others/arrow.svg';
import './InputBar.scss';

export const InputBar = ({ onSubmitText }) => {
  const [inputValue, setInputValue] = useState('');

  // Утиль для безопасного получения username из localStorage
  const getUsername = () => {
    try {
      const stored = localStorage.getItem('user');
      return stored ? JSON.parse(stored).username : null;
    } catch (e) {
      console.error('Не удалось распарсить user из localStorage:', e);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const word = inputValue.trim();
    if (!word) return;

    const username = getUsername();

    try {
      // 1) Запрос к ML-сервису
      const { data } = await axios.post('http://127.0.0.1:5000/predict', {
        word,
      });
      console.log('Predict response:', data);
      // Поддерживаем все варианты ключей для исправления
      const rawCorrected =
        data.correctedWord ??
        data.corrected_word ??
        data.corrected ??
        data.correction ??
        '';
      // Если модель не вернула исправление, показываем сообщение об отсутствии
      const corrected = rawCorrected ? rawCorrected : 'Исправление не найдено';

      // 2) Отображаем результат в модалке
      onSubmitText(word, corrected);

      // 3) Подготовим тело для истории
      const historyEntry = {
        username,
        input: word,
        output: corrected,
      };
      console.log('History POST body:', historyEntry);

      // 4) Сохраняем в истории только если есть username
      if (username) {
        await axios.post('http://127.0.0.1:5000/history', historyEntry);
      } else {
        console.warn('Нет username в localStorage — история не сохраняется');
      }
    } catch (err) {
      console.error('Ошибка в обработке запроса:', err.response?.data || err);
    } finally {
      setInputValue('');
    }
  };

  return (
    <div className="inputbar">
      <div className="inputbar__container">
        <div className="inputbar__inner">
          <form className="inputbar__form" onSubmit={handleSubmit}>
            <input
              className="inputbar__form__input"
              type="text"
              placeholder="Введите слово, которое хотите проверить"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
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
