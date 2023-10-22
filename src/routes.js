import { Routes, Route } from 'react-router-dom';

import Resume from './pages/resume';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Resume />} />
      <Route path='/cobertura' element={<h1>Cobertura</h1>} />
      <Route path='/servicos' element={<h1>Serviços</h1>} />
      <Route path='/ligacoes' element={<h1>Ligações</h1>} />
      <Route path='/rede' element={<h1>Rede</h1>} />
      <Route path='/infraestrutura' element={<h1>Infraestrutura</h1>} />

      <Route path='*' element={<h1>Rota desconhecida</h1>} />
    </Routes>
  );
}
