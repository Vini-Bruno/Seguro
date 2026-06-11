import { useCallback, useState } from 'react';

import {
  hasAdminSession,
  isAdminAuthConfigured,
  loginAdmin,
  logoutAdmin,
} from '../auth/adminAuth';

export function useAdminAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAdminSession);

  const login = useCallback((username: string, password: string) => {
    const isValidLogin = loginAdmin(username, password);
    setIsAuthenticated(isValidLogin);

    return isValidLogin;
  }, []);

  const logout = useCallback(() => {
    logoutAdmin();
    setIsAuthenticated(false);
  }, []);

  return {
    isAuthConfigured: isAdminAuthConfigured,
    isAuthenticated,
    login,
    logout,
  };
}
