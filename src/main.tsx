import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar.tsx'
import { NotFound } from './Pages/Home/404/NotFound.tsx'
import { Home } from './Pages/Home/Home.tsx'
import { AboutUs } from './Pages/AboutUs/AboutUs.tsx'
import { ContactUs } from './Pages/ContacUs/ContactUs.tsx'
import { Dashboard } from './Pages/Dashboard/Dashboard.tsx'
import { CharacterDetail } from './components/CharacterDetail/CharacterDetail.tsx'
import { Footer } from './components/Footer/Footer.tsx'

//Routes creations

const router = createBrowserRouter([
  {
    path: "/",
    element : <>
      <NavBar />
      <Home />
      <Footer />
      </>,
    errorElement: <NotFound />, 
  },
  {
    path: "/characters",
    element : <>
      <NavBar />
      <Dashboard />
      <Footer />
      </>,
    errorElement: <NotFound />, 
  },
  {
    path: "/about",
    element : <>
      <NavBar />
      <AboutUs />
      <Footer />

      </>,
    // errorElement: <NotFound />,
  },
  {
    path: "/contact",
    element : <>
      <NavBar />
      <ContactUs />
      <Footer />

      </>,
    // errorElement: <NotFound />,
  },  {
    path: "/characters/:id",
    element : <>
      <NavBar/>
      <CharacterDetail />
      <Footer />

      </>,
      // errorElement: <NotFound />,
  },
  {
    path: "*",
    element : 
    <>
    <NotFound /> 
    <Footer />
    </>
    ,
    
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router = {router} />
  </>
  )
