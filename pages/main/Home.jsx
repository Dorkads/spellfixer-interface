import { InputBar } from '../../src/components/inputbar/InputBar';

import './Home.scss'

export const Home = () => {
  return (
    <div className="home">
      <div className="home__inner">
        <InputBar />
      </div>
    </div>
  );
};
