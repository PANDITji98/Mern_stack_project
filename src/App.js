import './App.css';
import {BrowserRouter , Routes , Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.js"
import Hotel from "./pages/Hotel/Hotel.js"
import List from "./pages/List/List.js"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/hotel" element={<List/>}/>
      <Route path="/hotel/:id" element={<Hotel/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
