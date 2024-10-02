import React from 'react'
import ChatPage from '../components/ChatPage';
import App from '../App';
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
        path: "/chat",
        element: <ChatPage />,
      },
  ]);

export default router;