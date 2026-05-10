import { useMemo, useState } from 'react';

import { siteConfig } from '@/config/site';
import { onlyDigits } from '@/lib/format';
import { createWhatsappHref } from '@/lib/whatsapp';

import { quoteTypes } from '../data/homeContent';
import type { QuoteType } from '../types';

export type QuoteFormViewModel = {
  clientName: string;
  setClientName: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
  quoteType: string;
  setQuoteType: (value: string) => void;
  selectedQuoteType: QuoteType;
  contactStatus: string;
  messagePreviewText: string;
  whatsappHref: string;
};

export function useQuoteForm(): QuoteFormViewModel {
  const [clientName, setClientName] = useState('');
  const [phone, setPhone] = useState('');
  const [quoteType, setQuoteType] = useState(quoteTypes[0].value);

  const normalizedPhone = onlyDigits(phone);
  const selectedQuoteType = quoteTypes.find((type) => type.value === quoteType) ?? quoteTypes[0];
  const contactStatus = normalizedPhone.length >= 10 ? 'WhatsApp informado' : 'WhatsApp opcional';
  const messagePreviewText = `Olá, Leo. Vim pelo site da Torrezan e quero comparar opções de ${selectedQuoteType.label.toLowerCase()} para entender cobertura, franquia e preço antes de fechar.`;

  const whatsappHref = useMemo(
    () =>
      createWhatsappHref({
        phone: siteConfig.contact.whatsappPhone,
        lines: [
          messagePreviewText,
          `Nome: ${clientName.trim() || 'Não informado'}`,
          `Meu WhatsApp: ${phone || 'Não informado'}`,
          `Interesse: ${selectedQuoteType.label}`,
        ],
      }),
    [clientName, messagePreviewText, phone, selectedQuoteType.label],
  );

  return {
    clientName,
    setClientName,
    phone,
    setPhone,
    quoteType,
    setQuoteType,
    selectedQuoteType,
    contactStatus,
    messagePreviewText,
    whatsappHref,
  };
}
