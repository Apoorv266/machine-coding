import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Category from './Components/Category';
import SearchComponent from './Components/SearchComponent';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/category' element={<Category/>}/>
      <Route path='/search' element={<SearchComponent/>}/>
    </Routes>
    </div>
  );
}

export default App;
