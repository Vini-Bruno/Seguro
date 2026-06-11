import { Analytics } from '@vercel/analytics/react';

import { AdminRouter } from '@/features/admin/pages/AdminRouter';
import { HomePage } from '@/features/home/pages/HomePage';
import { PrivacyPolicyPage } from '@/features/legal/pages/PrivacyPolicyPage';
import { TermsOfUsePage } from '@/features/legal/pages/TermsOfUsePage';

function getPageByPath(path: string) {
  if (path.startsWith('/adm')) {
    return <AdminRouter />;
  }

  if (path === '/politica-de-privacidade') {
    return <PrivacyPolicyPage />;
  }

  if (path === '/termos-de-uso') {
    return <TermsOfUsePage />;
  }

  return <HomePage />;
}

export function App() {
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  const page = getPageByPath(currentPath);

  return (
    <>
      {page}
      <Analytics />
    </>
  );
}
