import React from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from '../Container/Home';

export default function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='*' element={<Home />} />
    </Routes>
    </BrowserRouter>
  );
}
 