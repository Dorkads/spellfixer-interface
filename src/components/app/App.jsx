import { Sidebar } from '../sidebar/Sidebar';
import { TopBar } from '../topbar/TopBar';
import { Home } from '../../../pages/main/Home';

import { useEffect } from 'react';

import '../app/App.scss';

export function App() {
  useEffect(() => {
    // Добавляем класс при монтировании
    document.body.classList.add('bodygradient');
    return () => {
      // Удаляем при размонтировании
      document.body.classList.remove('bodygradient');
    };
  }, []);

  return (
    <div className="spellfixer">
      <div className="spellfixer__container">
        <div className="spellfixer__inner">
          <Sidebar />
          <main className="spellfixer__main">
            <div className="spellfixer__main__container">
              <div className="spellfixer__main__inner">
                <div className="spellfixer__main__topbar">
                  <TopBar />
                </div>

                <div className="spellfixer__main__home">
                  <Home />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
