# Seguro

Base do projeto organizada em duas aplicações independentes:

- `seguro-api`: backend em Laravel
- `seguro-front`: frontend em React + Vite + TypeScript

## Estrutura

```text
.
|-- docs/
|   `-- architecture.md
|-- seguro-api/
`-- seguro-front/
```

## Convenção

- Nada de concentrar regra de negócio em um arquivo só
- Frontend separado por `app`, `config`, `features`, `lib`, `services` e `styles`
- Features do front agrupam suas próprias `components`, `data`, `hooks`, `pages` e `types`
- Backend segue a estrutura padrão do Laravel, com evolução por camadas conforme o domínio crescer
- A raiz do repositório fica enxuta, usada para documentação e visão geral do projeto

## Rodando a landing

```powershell
cd seguro-front
copy .env.example .env
npm run dev
```

Preencha `VITE_N8N_WEBHOOK_URL` no `.env` com a URL de produção do webhook do n8n:

```text
https://seu-n8n.com/webhook/insurance-chatbot
```
