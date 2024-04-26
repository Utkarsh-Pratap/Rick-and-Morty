import Banner from "./Banner";
import { Route,Routes } from "react-router-dom";
import Character from "./Character";
import CharPage from "./Char_Page";
import Epipage from "./Episode-page";

const  MyRouter = () =>{
  return(
    <div>
      <Routes>
        <Route path="/" element ={<Banner/>}></Route>
        <Route path="Character" element={<Character/>}></Route>
        <Route path="CharPage" element= {<CharPage/>}></Route>
        <Route path="Epipage" element={<Epipage/>}></Route>
      </Routes>
    </div>
  )
}

export default MyRouter;