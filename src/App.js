import './App.css';
import Launches from './components/launches';
import Launch from './components/launch';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Launches />} />
        <Route path='/launch/:id' element={<Launch />} />
      </Routes>
    </div>
  );
}

export default App;
