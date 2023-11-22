import './index.css'
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Home} from './pages/home.js'
import Header from './components/Header.js' 


function App() {
  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route index element={<Home></Home>}></Route>
        <Route path='movie/:id' element={<h1>Hello 2</h1>}></Route>
        <Route path='movies/:type' element={<h1>Hello 3</h1>}></Route>
        <Route path='/*' element={<h1>ERROR PAGE</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
