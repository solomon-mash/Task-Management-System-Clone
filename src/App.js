import './App.css';
import Sidebar from './components/Sidebar';
import Calendar from './components/calendar';
import Window from './components/main-window';
function App() {
  return (
      <div className='app'>
    <div class="section section-1">
      <Sidebar />
    </div>
    <div class="section section-2">
    <Window />
    </div>
    
    
    <div class="section section-3">
      <Calendar />
    </div>
      </div>
    
  );
}

export default App;
