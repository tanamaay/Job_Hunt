
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browser from './components/Browser'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
import Companies from './components/admin/Companies'
import CompanyCreate from './components/admin/CompanyCreate'
import CompanySetup from './components/admin/CompanySetup'
import AdminJobs from './components/admin/AdminJobs'
import PostJob from './components/admin/PostJob'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/jobs',
    element: <Jobs />
  },
  {
    path: "/description/:id",
    element: <JobDescription />
  },
  {
    path: '/browser',
    element: <Browser />
  },
  {
    path: '/profile',
    element: <Profile />
  },

  // admin ke liye yaha se start hoga

  {
    path:"/admin/companies",
    element:<Companies/> 
  },  
  {
    path:"/admin/companies/create",
    element:<CompanyCreate/> 
  },
  {
    path:"/admin/companies/:id",
    element:<CompanySetup/> 
  },

  {
    path:"/admin/jobs",
    element:<AdminJobs/> 
  },
  {
    path:"/admin/jobs/post",
    element:<PostJob/> 
  },


])

function App() {

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
