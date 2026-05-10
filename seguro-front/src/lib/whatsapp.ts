type CreateWhatsappHrefParams = {
  phone: string;
  lines: string[];
};

export function createWhatsappHref({ phone, lines }: CreateWhatsappHrefParams) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(lines.join('\n'))}`;
}
