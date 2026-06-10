export const siteConfig = {
  contact: {
    whatsappPhone: import.meta.env.VITE_SELLER_WHATSAPP_PHONE?.trim() || '5517996527948',
    whatsappDisplay: '(17) 99652-7948',
    instagramUrl: 'https://www.instagram.com/torrezanseguros/',
    email: 'contato@torrezanseguros.com.br',
  },
} as const;
