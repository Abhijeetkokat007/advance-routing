import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css';

import Home from "./Views/Home/Home";
import Posts from "./Views/Posts/Post";
import ReadPost from "./Views/ReadPost/ReadPost";


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element :  <Home/>
  },
  {
    path: '/Post',
    element: <Posts/>
  },
  // {
  //   path: '/Post/ReadPost/1',
  //   element: <Posts/>
  // },
  {
    path: '/Post/ReadPost/:id',
    element: <ReadPost/>
  },
  {
    path: '*',
    element: <div> Not Found</div>
  }
])
root.render(<RouterProvider router = {router} />);



