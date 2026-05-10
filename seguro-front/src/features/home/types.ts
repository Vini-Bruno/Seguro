export type TrustSignal = {
  value: string;
  label: string;
};

export type QuoteType = {
  value: string;
  label: string;
  detail: string;
};

export type TextCard = {
  title: string;
  description: string;
};

export type Insurer = {
  name: string;
  slug: string;
  logo: string;
  shape?: 'square' | 'wide';
};

export type UseCase = TextCard & {
  tag: string;
};

export type NavLink = {
  label: string;
  href: string;
};
