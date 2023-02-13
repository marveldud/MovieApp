import './App.css';
import Home from "./Home";
import Error from './Error';
import Single from "./Single";
import {Routes,Route} from "react-router-dom";
import Movies from './Movies';
import Search from './Search';

function App() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home />}   />
      <Route  path='movie/:id' element={<Single/>}/>
      <Route path='*' element={<Error/>}/>
     <Route path='Movies' element={<Movies/>}/>
      <Route path='Search' element={<Search/>}/> 



    </Routes>

   
    </>
  );
}

export default App;
