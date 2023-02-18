import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './components/About.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <App /> }>
      <Route path="/about" element={ <About /> } />
    </Route>
  )
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={ router } />
  </React.StrictMode>
);


