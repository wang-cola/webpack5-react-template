import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
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
        <Route path='/pageA' element={<PageA />} />
        <Route path='/pageB' element={<PageB />} />
      </Routes>
    </h2>
  );
}
export default App;
