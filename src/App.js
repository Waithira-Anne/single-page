
import React from 'react';
import { BrowserRouter , Routes, Route,  } from 'react-router-dom'; 
import Parent from  "./components/Parent";
import Home from "./components/Home";
import PageNotFound from  "./components/PageNotFound";
import ChildOne from "./components/ChildOne";
import ChildTwo from "./components/ChildTwo";
import LastChild from "./components/LastChild";
import './App.css';



function App() {
  return (
    <BrowserRouter>
  

    <Routes>
 
      <Route path="/" element={<Parent />} >
      <Route index element={<Home />} />
      <Route path="/one" element={<ChildOne />} />
      <Route path="/two" element={<ChildTwo />} />
      <Route path="/three" element={<LastChild />} />
      <Route path="*" element={<PageNotFound />} />
     </Route>
    </Routes>
  
    </BrowserRouter>
  );
}

export default App;
