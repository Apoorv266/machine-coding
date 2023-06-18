import { Route, Routes } from 'react-router-dom';
import './App.css';
import HabitsHome from './Components/HabitsHome';
import Archives from './Components/Archives';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<HabitsHome/>}/>
      <Route path='/archives' element={<Archives/>}/>
    </Routes>
    </div>
  );
}

export default App;
