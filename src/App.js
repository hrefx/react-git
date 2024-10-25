import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from "./NavBar"
import Home from "./Home";
import SearchBar from './SearchBar';
import ItemDetails from './ItemDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
            <Route path="/search" element={<SearchBar></SearchBar>}></Route>
            <Route path="/details/:id" element={<ItemDetails></ItemDetails>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
