import { InputBar } from '../inputbar/InputBar';

export const ChatBox = () => {
  return (
    <div className="chat">
      <div className="chat__container">
        <div className="chat__inner">
          <InputBar />
        </div>
      </div>
    </div>
  );
};
