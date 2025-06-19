import './DeveloperContact.scss';

import quest from '../../assets/icons/others/quest.svg';

export const DeveloperContact = () => {
  return (
    <div className="devcall">
      <div className="devcall__container">
        <div className="devcall__inner">
          <img className="devcall__img" src={quest} alt="Question" />
          <p className="devacll__text">Связь с разработчиком</p>
        </div>
      </div>
    </div>
  );
};
