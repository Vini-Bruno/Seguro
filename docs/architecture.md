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
- `src/config`: configurações estáveis da aplicação e leitura de variáveis de ambiente
- `src/components`: componentes compartilhados
- `src/features`: módulos por funcionalidade
- `src/features/<feature>/components`: seções e componentes específicos da feature
- `src/features/<feature>/data`: conteúdo, listas e constants da interface
- `src/features/<feature>/hooks`: estado e efeitos próprios da feature
- `src/features/<feature>/pages`: composição final das telas
- `src/features/<feature>/types`: contratos TypeScript da feature
- `src/lib`: helpers reutilizáveis e integrações utilitárias
- `src/services`: comunicação com API e integrações do cliente
- `src/styles`: estilos globais e tokens visuais

## Próximo passo sugerido

1. Definir o domínio inicial do MVP
2. Criar endpoints base no Laravel
3. Estruturar o fluxo inicial de cotação no React
