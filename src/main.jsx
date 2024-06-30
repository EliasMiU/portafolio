import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Root from './components/routes/root.jsx';
import About from './components/routes/about.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "/sobre-mi",
    element: <About />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
