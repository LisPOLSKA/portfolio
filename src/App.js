import "./style.scss"
import Projects from './pages/Projects/Projects';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
import React, { useContext } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer/>
        </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true, // To wskazuje, że ta ścieżka odpowiada głównemu "/" 
          element: <Home />, // Główna strona
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  
  return (
      <RouterProvider router={router} />
  );
}

export default App;
