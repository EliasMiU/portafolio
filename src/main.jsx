import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import App from './App';
import Sobremi from './components/sobremi/Sobremi.jsx';

//import App from './App.jsx';

/*const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "/sobre-mi",
    element: <About />
  }
]
);*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="portafolio">
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/sobre-mi' element={<Sobremi />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
