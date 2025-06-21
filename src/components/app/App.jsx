import { Sidebar } from '../sidebar/Sidebar';
import { TopBar } from '../topbar/TopBar';
import { Home } from '../../../pages/main/Home';
import { History } from '../../../pages/history/History';
import { Statistics } from '../../../pages/statistics/Statistics';

import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import '../app/App.scss';

export function App() {
  useEffect(() => {
    document.body.classList.add('bodygradient');
    return () => {
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
                  <Routes>
                    <Route index element={<Home />} />
                    <Route path="history" element={<History />} />
                    <Route path="statistics" element={<Statistics />} />
                  </Routes>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
