const adminSessionKey = 'seguro.admin.session';

const adminUsername = import.meta.env.VITE_ADMIN_USERNAME?.trim();
const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD?.trim();

export const isAdminAuthConfigured = Boolean(adminUsername && adminPassword);

function encodeSessionToken(value: string): string {
  return window.btoa(
    Array.from(new TextEncoder().encode(value), (byte) => String.fromCharCode(byte)).join(''),
  );
}

function getExpectedSessionToken(): string | null {
  if (!isAdminAuthConfigured) {
    return null;
  }

  return encodeSessionToken(`${adminUsername}:${adminPassword}`);
}

export function hasAdminSession(): boolean {
  const expectedToken = getExpectedSessionToken();

  if (!expectedToken) {
    return false;
  }

  return window.localStorage.getItem(adminSessionKey) === expectedToken;
}

export function loginAdmin(username: string, password: string): boolean {
  if (!isAdminAuthConfigured) {
    return false;
  }

  const isValidLogin = username.trim() === adminUsername && password === adminPassword;

  if (!isValidLogin) {
    return false;
  }

  window.localStorage.setItem(adminSessionKey, getExpectedSessionToken() as string);

  return true;
}

export function logoutAdmin() {
  window.localStorage.removeItem(adminSessionKey);
}
