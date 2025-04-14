import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Root from './components/Root/Root.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/contact/contact.jsx'
import User from './components/user/user.jsx'
import Todos from './components/todos/Todos.jsx'
import UserDatail from './components/userDatail/UserDatail.jsx'
import TodolsDetails from './components/todos/TodolsDetails.jsx'
import Posts from './components/Posts/Posts.jsx'
import PostDetails from './components/Post/PostDetails.jsx'


const todosPromise = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: 'about', Component: About},
      {path: 'contact', Component: Contact},
      {
        path: '/user',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: User
      },
      {
        path: 'todos',
        element: <Suspense fallback={<h1>Loading...</h1>}>
            <Todos todosPromise={todosPromise}></Todos>
        </Suspense>
      },
      {
        path: 'todos/:todosId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/todos/${params.todosId}`),
        Component: TodolsDetails
      },
      {
        path:'/user/:userid',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`),
        Component: UserDatail
      },
      {
        path: 'posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Posts
      },
      {
        path: '/post/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetails
      },
      {
        path: '*',
        element: <h1>Not Found</h1>
      }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
