import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import store from './store/store.js'
import './index.css'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home.jsx'
import { AuthLayout,Login } from './components/index.js'

import AddPost from './pages/AddPost.jsx'
import Signup from './pages/SignUp.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'
import AllPost from './pages/AllPost.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        )
      },
      {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <Signup />
                </AuthLayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AllPost />
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
