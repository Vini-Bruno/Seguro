import { useCallback, useEffect, useState } from 'react';

import { useAdminAuth } from '../hooks/useAdminAuth';
import { AdminLoginPage } from './AdminLoginPage';
import { QuotesAdminPage } from './QuotesAdminPage';

function normalizePathname(pathname: string): string {
  return pathname.replace(/\/$/, '') || '/';
}

type RedirectProps = {
  onRedirect: (path: string) => void;
  to: string;
};

function Redirect({ onRedirect, to }: RedirectProps) {
  useEffect(() => {
    onRedirect(to);
  }, [onRedirect, to]);

  return null;
}

export function AdminRouter() {
  const [currentPath, setCurrentPath] = useState(() => normalizePathname(window.location.pathname));
  const auth = useAdminAuth();

  const navigate = useCallback((path: string) => {
    window.history.replaceState({}, '', path);
    setCurrentPath(normalizePathname(path));
  }, []);

  useEffect(() => {
    function handleRouteChange() {
      setCurrentPath(normalizePathname(window.location.pathname));
    }

    window.addEventListener('popstate', handleRouteChange);

    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  if (currentPath === '/adm') {
    return auth.isAuthenticated ? (
      <Redirect to="/adm/cotacoes" onRedirect={navigate} />
    ) : (
      <AdminLoginPage
        isAuthConfigured={auth.isAuthConfigured}
        onLogin={auth.login}
        onLoginSuccess={() => navigate('/adm/cotacoes')}
      />
    );
  }

  if (!auth.isAuthenticated) {
    return <Redirect to="/adm" onRedirect={navigate} />;
  }

  if (currentPath === '/adm/cotacoes') {
    return <QuotesAdminPage onLogout={auth.logout} />;
  }

  return <Redirect to="/adm/cotacoes" onRedirect={navigate} />;
}
