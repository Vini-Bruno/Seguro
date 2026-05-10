export const siteConfig = {
  contact: {
    whatsappPhone: import.meta.env.VITE_SELLER_WHATSAPP_PHONE?.trim() || '5517997759444',
    whatsappDisplay: '(17) 99775-9444',
    instagramUrl: 'https://www.instagram.com/torrezanseguros/',
    email: 'contato@torrezanseguros.com.br',
  },
} as const;
