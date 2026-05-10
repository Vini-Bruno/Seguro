import type { Insurer, NavLink, QuoteType, TextCard, TrustSignal, UseCase } from '../types';

export const navLinks: NavLink[] = [
  { label: 'Vantagens', href: '#beneficios' },
  { label: 'Seguros', href: '#seguros' },
  { label: 'Seguradoras', href: '#seguradoras' },
  { label: 'Cotação', href: '#cotacao' },
];

export const trustSignals: TrustSignal[] = [
  { value: 'Comparação', label: 'entre seguradoras parceiras' },
  { value: 'WhatsApp', label: 'orientação sem formulário longo' },
  { value: 'Pós-venda', label: 'apoio em renovação e sinistro' },
];

export const quoteTypes: QuoteType[] = [
  { value: 'Auto', label: 'Seguro auto', detail: 'carro, moto ou utilitário' },
  { value: 'Residencial', label: 'Seguro residencial', detail: 'casa ou apartamento' },
  { value: 'Vida', label: 'Seguro de vida', detail: 'proteção para família' },
  { value: 'Empresarial', label: 'Seguro empresarial', detail: 'empresa, loja ou escritório' },
];

export const benefits: TextCard[] = [
  {
    title: 'Seguro explicado, sem empurra-empurra',
    description:
      'A Torrezan mostra o que muda entre preço, franquia, cobertura e assistência antes de você decidir.',
  },
  {
    title: 'Cotação alinhada ao seu perfil',
    description:
      'Você conta sua rotina, seu bem ou sua empresa, e recebe opções que fazem sentido para esse cenário.',
  },
  {
    title: 'Atendimento que continua depois',
    description:
      'Renovação, dúvidas sobre apólice e orientação em sinistro também entram na conversa com a equipe.',
  },
];

export const insuranceOptions: TextCard[] = [
  {
    title: 'Auto e moto',
    description: 'Compare cobertura para colisão, roubo, terceiros, assistência e franquia.',
  },
  {
    title: 'Residencial',
    description: 'Proteção para casa ou apartamento, com coberturas e assistências úteis no dia a dia.',
  },
  {
    title: 'Empresarial',
    description: 'Opções para patrimônio, operação, equipamentos e responsabilidade da empresa.',
  },
  {
    title: 'Vida',
    description: 'Planejamento de proteção financeira para família, sucessão e tranquilidade.',
  },
  {
    title: 'Terceiros',
    description: 'Entenda limites, danos materiais, danos corporais e quando vale reforçar a cobertura.',
  },
  {
    title: 'Renovação',
    description: 'Revisão da apólice atual para ajustar preço, cobertura e necessidade real.',
  },
];

export const steps = [
  'Conte seu cenário',
  'Compare cobertura, preço e franquia',
  'Decida com orientação da Torrezan',
];

export const insurers: Insurer[] = [
  { name: 'Porto Seguro', slug: 'porto-seguro', logo: '/insurers/porto-seguro.svg' },
  { name: 'Azul Seguros', slug: 'azul-seguros', logo: '/insurers/azul-seguros.svg', shape: 'square' },
  { name: 'Itaú Seguros', slug: 'itau-seguros', logo: '/insurers/itau-seguros.png' },
  {
    name: 'Tókio Marine Seguradora',
    slug: 'tokio-marine',
    logo: '/insurers/tokio-marine.svg',
  },
  {
    name: 'Mitsui Sumitomo Insurance',
    slug: 'mitsui-sumitomo',
    logo: '/insurers/mitsui-sumitomo.png',
    shape: 'wide',
  },
  { name: 'Allianz', slug: 'allianz', logo: '/insurers/allianz.svg' },
  { name: 'Yelum Seguradora', slug: 'yelum', logo: '/insurers/yelum-seguradora.png' },
  { name: 'HDI Seguros', slug: 'hdi', logo: '/insurers/hdi-seguros.svg' },
  { name: 'Bradesco Seguros', slug: 'bradesco', logo: '/insurers/bradesco-seguros.svg' },
  { name: 'Darwin', slug: 'darwin', logo: '/insurers/darwin.svg' },
  { name: 'Mapfre', slug: 'mapfre', logo: '/insurers/mapfre.svg' },
  { name: 'Zurich', slug: 'zurich', logo: '/insurers/zurich.svg', shape: 'square' },
  { name: 'Suhai Seguradora', slug: 'suhai', logo: '/insurers/suhai-seguradora.png' },
  { name: 'Justos', slug: 'justos', logo: '/insurers/justos.svg' },
];

export const useCases: UseCase[] = [
  {
    title: 'Renovação do seguro auto',
    description:
      'Revisão da apólice atual, comparação de franquia e checagem de coberturas que ainda fazem sentido.',
    tag: 'Auto',
  },
  {
    title: 'Primeiro seguro residencial',
    description:
      'Explicação simples sobre danos elétricos, roubo, vendaval e assistências para casa ou apartamento.',
    tag: 'Residencial',
  },
  {
    title: 'Empresa protegida sem excesso',
    description:
      'Cotação para proteger patrimônio e operação sem contratar coberturas que não combinam com o negócio.',
    tag: 'Empresarial',
  },
];

export const advisoryItems = [
  'Entendimento do que você precisa proteger',
  'Comparação entre seguradoras parceiras',
  'Explicação de cobertura, franquia e assistência',
  'Apoio em renovação, dúvidas e sinistro',
];
