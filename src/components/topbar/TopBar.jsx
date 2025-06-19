export const TopBar = () => {
  return (
    <header className="topbar">
      <div className="topbar__container">
        <div className="topbar__inner">
          <div className="topbar__theme">
            <button className="topbar__theme__btn">
              <img
                className="topbar__theme__ligth"
                src="../../assets/icons/theme/light.svg"
                alt="Светлая тема"
              />
            </button>

            <button className="topbar__theme__btn">
              <img
                className="topbar__theme__dark"
                src="../../assets/icons/theme/dark.svg"
                alt="Тёсная тема"
              />
            </button>
          </div>

          <div className="topbar__user">
            <img className="topbar__user__avatar" src="" alt="" />
            <p>Name N</p>
          </div>

          <form className="topbar__exit">
            <button className="topbar__exit__btn" type="submit">
              <img
                src="../../assets/icons/profile/logut.svg"
                alt="Выйти из аккаунта"
              />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};
