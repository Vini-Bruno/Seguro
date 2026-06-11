import { type FormEvent, useState } from 'react';

type AdminLoginPageProps = {
  isAuthConfigured: boolean;
  onLogin: (username: string, password: string) => boolean;
  onLoginSuccess: () => void;
};

export function AdminLoginPage({ isAuthConfigured, onLogin, onLoginSuccess }: AdminLoginPageProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);

    const isValidLogin = onLogin(username, password);

    if (!isValidLogin) {
      setErrorMessage('Usuário ou senha inválidos.');
      return;
    }

    onLoginSuccess();
  }

  return (
    <main className="admin-login-shell">
      <section className="admin-login-card" aria-labelledby="admin-login-title">
        <div className="admin-login-card__header">
          <span>Painel do Léo</span>
          <h1 id="admin-login-title">Entrar no painel</h1>
          <p>Acesse a central de cotações recebidas pelo WhatsApp e chatbot.</p>
        </div>

        {!isAuthConfigured ? (
          <div className="admin-alert">
            Configure VITE_ADMIN_USERNAME e VITE_ADMIN_PASSWORD para liberar o login.
          </div>
        ) : null}

        <form className="admin-login-form" onSubmit={handleSubmit}>
          <label>
            <span>Usuário</span>
            <input
              type="text"
              autoComplete="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>

          <label>
            <span>Senha</span>
            <input
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>

          {errorMessage ? <div className="admin-login-error">{errorMessage}</div> : null}

          <button className="admin-button" type="submit" disabled={!isAuthConfigured}>
            Entrar
          </button>
        </form>
      </section>
    </main>
  );
}
