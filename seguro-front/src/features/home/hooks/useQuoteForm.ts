import { useMemo, useState } from 'react';

import { siteConfig } from '@/config/site';
import { createWhatsappHref } from '@/lib/whatsapp';

import { quoteTypes } from '../data/homeContent';

export type QuoteFormViewModel = {
  phone: string;
  setPhone: (value: string) => void;
  quoteType: string;
  setQuoteType: (value: string) => void;
  messagePreviewText: string;
  whatsappHref: string;
};

export function useQuoteForm(): QuoteFormViewModel {
  const [phone, setPhone] = useState('');
  const [quoteType, setQuoteType] = useState(quoteTypes[0].value);

  const selectedQuoteType = quoteTypes.find((type) => type.value === quoteType) ?? quoteTypes[0];
  const messagePreviewText =
    'Olá! Vim pela página de seguro auto e gostaria de fazer uma cotação gratuita.';

  const whatsappHref = useMemo(
    () =>
      createWhatsappHref({
        phone: siteConfig.contact.whatsappPhone,
        lines: [
          messagePreviewText,
          `Meu WhatsApp: ${phone || 'Não informado'}`,
          `Veículo: ${selectedQuoteType.label}`,
        ],
      }),
    [messagePreviewText, phone, selectedQuoteType.label],
  );

  return {
    phone,
    setPhone,
    quoteType,
    setQuoteType,
    messagePreviewText,
    whatsappHref,
  };
}
