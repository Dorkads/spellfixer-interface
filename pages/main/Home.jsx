import { useState } from 'react';

import { InputBar } from '../../src/components/inputbar/InputBar';
import { ModalComplete } from '../../src/components/modalcomplete/ModalComplete';
import './Home.scss';

export const Home = () => {
  const [text, setText] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (inputValue) => {
    setText(inputValue);
    setIsSubmitted(true); // Показываем ModalComplete
  };

  return (
    <div className="home">
      <div className="home__inner">
        <div className="home__content">
          {isSubmitted && <ModalComplete outputText={text} />}
        </div>
        <div className="home__footer">
          <InputBar onSubmitText={handleSubmit} />
        </div>
      </div>
    </div>
  );
};
