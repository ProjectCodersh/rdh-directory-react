import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import HomePage from '../Pages/HomePage';
import AboutPage from '../Pages/AboutPage';
import ContactPage from '../Pages/ContactPage';
import NotFoundPage from '../Pages/NotFoundPage';
import UserProfilePage from '../Pages/UserProfilePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'user-profile', element: <UserProfilePage /> },

      { path: '*', element: <NotFoundPage /> }
    ]
  }
]);
