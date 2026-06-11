import { Analytics } from '@vercel/analytics/react';

import { QuotesAdminPage } from '@/features/admin/pages/QuotesAdminPage';
import { HomePage } from '@/features/home/pages/HomePage';

export function App() {
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  const page = currentPath === '/adm/cotacoes' ? <QuotesAdminPage /> : <HomePage />;

  return (
    <>
      {page}
      <Analytics />
    </>
  );
}
