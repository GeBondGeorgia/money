import { Route, Routes, BrowserRouter, createBrowserRouter } from "react-router-dom";
import MainPage from "../mainPage/MainPage";


const App = () => { 
    return ( 
        <BrowserRouter >
    
            <Routes>
                <Route path="/" Component={MainPage}/>
            </Routes>
        
        </BrowserRouter>
    )
}

export default App; 
