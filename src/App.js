import react from "react" ;
import "./App.css";
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from "./Home";
import Singlemovie from "./Singlemovie";
import Error from "./Error";
import { AppProvider } from "./Context";
function App() {
  return (
    <div>
      <AppProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies/:id" element={<Singlemovie />} /> 
          <Route path="*" element={<Error />} />
        </Routes>
        </BrowserRouter>
      </AppProvider>  
    </div>
  );
}

export default App;
