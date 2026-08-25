import AppLayout from '@/layouts/AppLayout';
import SantriLayout from '@/layouts/SantriLayout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import SantriList from '@/pages/Santri/SantriList';
import SantriAbsensi from '@/pages/Santri/SantriAbsensi';
import SantriNilai from '@/pages/Santri/SantriNilai';
import SantriDetail from '@/pages/Santri/SantriDetail';
import { createBrowserRouter } from 'react-router';

export const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/santri',
        element: <SantriLayout />,
        children: [
          {
            index: true,
            element: <SantriList />,
          },
          {
            path: 'list',
            children: [
              {
                index: true,
                element: <SantriList />,
              },
              {
                path: ':santri_id',
                element: <SantriDetail />,
              },
            ],
          },
          {
            path: 'nilai',
            element: <SantriNilai />,
          },
          {
            path: 'absensi',
            element: <SantriAbsensi />,
          },
        ],
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);
