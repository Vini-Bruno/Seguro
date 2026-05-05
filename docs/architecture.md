# Arquitetura Inicial

## Pastas principais

- `seguro-api`: API, autenticação, integrações, fila, pós-venda e regras de negócio
- `seguro-front`: interface pública, fluxo de cotação, páginas institucionais e painéis futuros

## Padrão adotado

### Backend

- Estrutura nativa do Laravel
- Crescimento por domínio dentro de `app/`
- Rotas HTTP separadas em `routes/`
- Jobs, notifications, mail e integrações adicionados conforme necessidade

### Frontend

- `src/app`: bootstrap da aplicação
- `src/components`: componentes compartilhados
- `src/features`: módulos por funcionalidade
- `src/services`: comunicação com API e integrações do cliente
- `src/styles`: estilos globais e tokens visuais

## Próximo passo sugerido

1. Definir o domínio inicial do MVP
2. Criar endpoints base no Laravel
3. Estruturar o fluxo inicial de cotação no React
