import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import SingleRecipe from './pages/SingleRecipe';

function App() {
   return (
    <>
     <BrowserRouter>
     <div className='mb-[60px]'>
      <Navbar />
     </div>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Single' element={<SingleRecipe/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
