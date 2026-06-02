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

export type ClientProof = TextCard & {
  image: string;
  alt: string;
  meta: string;
  imagePosition: string;
};

export type IconCard = TextCard & {
  icon: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Insurer = {
  name: string;
  slug: string;
  logo: string;
  shape?: 'square' | 'wide';
};

export type NavLink = {
  label: string;
  href: string;
};
