/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import News from './pages/News';
import Institution from './pages/Institution';
import Contact from './pages/Contact';

// ENAO Module
import ENAOLayout from './pages/enao/ENAOLayout';
import ENAOWelcome from './pages/enao/ENAOWelcome';
import ENAOPanel from './pages/enao/ENAOPanel';
import ENAORegistration from './pages/enao/ENAORegistration';
import ENAOLogin from './pages/enao/ENAOLogin';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="noticias" element={<News />} />
          <Route path="institucion" element={<Institution />} />
          <Route path="contacto" element={<Contact />} />
        </Route>
        
        {/* ENAO Module with its own layout nested for sub-navigation */}
        <Route path="/enao" element={<Layout />}>
          <Route element={<ENAOLayout />}>
            <Route index element={<ENAOWelcome />} />
            <Route path="login" element={<ENAOLogin />} />
            <Route path="panel" element={<ENAOPanel />} />
            <Route path="registro" element={<ENAORegistration />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
