import PageA from '@/pages/PageA';
import PageB from '@/pages/PageB';
import Home from '@/pages/Home';
import HomeChild from '@/pages/HomeChild';

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/homeChild',
        component: HomeChild,
      },
    ],
  },
  {
    path: '/pageA',
    component: PageA,
  },
  {
    path: '/pageB',
    component: PageB,
  },
];

export default routes;
