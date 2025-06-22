import './ModalComplete.scss';
import check from '../../assets/icons/others/chek.svg';

export const ModalComplete = ({ outputText }) => {
  return (
    <div className="complete">
      <div className="complete__inner">
        <div className="complete__blue">
          <p className="complete__text">
            Вы ввели: <span className="complete__output">{outputText}</span>
          </p>
        </div>
        <div className="complete_green">
          <p className="complete__green__c">
            Скорее всего, ошибки в тексте нет
          </p>
          <img className="complete__green__check" src={check} alt="check" />
        </div>
      </div>
    </div>
  );
};
