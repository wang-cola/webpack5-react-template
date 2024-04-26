import React, { lazy } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import '@/app.css';
import '@/app.less';

import Class from './components/Class';

const Home = lazy(() => import('@/pages/Home'));
const PageA = lazy(() => import('@/pages/PageA'));
const PageB = lazy(() => import('@/pages/PageB'));
function App() {
  return (
    <h2>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/pageA'
          element={
            <React.Suspense fallback={<>...</>}>
              <PageA />
            </React.Suspense>
          }
        />
        <Route
          path='/pageB'
          element={
            <React.Suspense fallback={<>...</>}>
              <PageB />
            </React.Suspense>
          }
        />
      </Routes>
      <NavLink to='pageA'>pageA</NavLink>
      <NavLink to='pageB'>pageB</NavLink>
    </h2>
  );
}
export default App;
