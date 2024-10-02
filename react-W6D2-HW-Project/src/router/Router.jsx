import React from 'react'
import ChatPage from '../pages/ChatPage';
import App from '../App';
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />
    },
    {
        path: "/chat",
        element: <ChatPage />,
      },
  ]);

export default router;