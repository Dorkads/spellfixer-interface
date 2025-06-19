import { Sidebar } from '../sidebar/Sidebar';
import { TopBar } from '../topbar/TopBar';
import { ChatBox } from '../chatbox/ChatBox';

import { useEffect } from 'react';

import '../app/App.scss';

export function App() {
  useEffect(() => {
    // Добавляем класс при монтировании
    document.body.classList.add('bodygeadient');
    return () => {
      // Удаляем при размонтировании
      document.body.classList.remove('bodygeadient');
    };
  }, []);

  return (
    <div className="spellfixer">
      <div className="spellfixer__container">
        <div className="spellfixer__inner">
          <Sidebar />
          <main className="spellfixer__main">
            <TopBar />
            <ChatBox />
          </main>
        </div>
      </div>
    </div>
  );
}
