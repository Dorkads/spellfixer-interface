import { Sidebar } from './components/sidebar/Sidebar';
import { TopBar } from './components/topbar/TopBar';
import { ChatBox } from './components/chatbox/ChatBox';

function App() {
  return (
    <div className="spellfixer">
      <Sidebar />
      <main className="spellfixer__main">
        <TopBar />
        <ChatBox />
      </main>
    </div>
  );
}
