import { useState } from 'react';
import axios from 'axios';

import { InputBar } from '../../src/components/inputbar/InputBar';
import { ModalComplete } from '../../src/components/modalcomplete/ModalComplete';
import { ModalError } from '../../src/components/modalerror/ModalError';
import './Home.scss';

export const Home = () => {
  const [text, setText] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [modelResult, setModelResult] = useState(null);

  const handleSubmit = async (inputValue) => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', {
        word: inputValue,
      });

      const data = response.data;

      setText(inputValue);
      setModelResult(data);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Ошибка при запросе к API:', error);
    }
  };

  return (
    <div className="home">
      <div className="home__inner">
        <div className="home__content">
          {isSubmitted &&
            modelResult &&
            (modelResult.correct ? (
              <ModalComplete outputText={text} />
            ) : (
              <ModalError
                outputText={text}
                correctedWord={modelResult.correction}
              />
            ))}
        </div>
        <div className="home__footer">
          <InputBar onSubmitText={handleSubmit} />
        </div>
      </div>
    </div>
  );
};
