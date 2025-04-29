import { BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Detalhes from "../pages/Detalhes";
import Favoritos from "../pages/Favoritos";

export default function AppRoutes() {
    return (
    <>
    <BrowserRouter>
      <Link to= "/">Home</Link>
      <Link to= "/Detalhes">Detalhes</Link>
      <Link to= "/Favoritos">Favoritos</Link>


      <Routes>
       <Route path= "/" element ={<Home/>} />
       <Route path= "/detalhes" element ={<Detalhes/>} />
       <Route path= "/Favoritos" element ={<Favoritos/>} />

      </Routes>
    
    
    </BrowserRouter>
    </>
    );
    }