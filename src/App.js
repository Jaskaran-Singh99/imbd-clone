import './index.css'
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Home} from './pages/home.js'
import { MovieList } from './pages/movieList.jsx';
import Header from './components/Header.js' 
import {MovieDetail} from './pages/movieDetail.jsx';


function App() {
  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route index element={<Home></Home>}></Route>
        <Route path='movie/:id' element={<MovieDetail></MovieDetail>}></Route>
        <Route path='movies/:type' element={<MovieList></MovieList>}></Route>
        <Route path='/*' element={<h1>ERROR PAGE</h1>}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
