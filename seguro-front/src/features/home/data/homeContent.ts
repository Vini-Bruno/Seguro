import clientBmwGsMotoPhoto from '@/assets/client-bmw-gs-moto-seguro.jpeg';
import clientFiatSuvPhoto from '@/assets/client-fiat-suv-seguro.jpeg';
import clientPeugeotPhoto from '@/assets/client-peugeot-entrega.jpeg';
import clientPorschePremiumPhoto from '@/assets/client-porsche-premium-seguro.jpeg';
import clientVolkswagenPhoto from '@/assets/client-volkswagen-seguro.jpeg';
import leoSincorPartnershipPhoto from '@/assets/leo-sincor-parceria.jpeg';

import type { ClientProof, FaqItem, IconCard, Insurer, NavLink, QuoteType, TextCard, TrustSignal } from '../types';

export const navLinks: NavLink[] = [
  { label: 'Veículos', href: '#veiculos' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Coberturas', href: '#coberturas' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Dúvidas', href: '#duvidas' },
];

export const trustSignals: TrustSignal[] = [
  { value: 'Cotação personalizada', label: 'veículo, uso, perfil e região' },
  { value: 'Compare seguradoras', label: 'cobertura, franquia e assistência' },
];

export const quoteTypes: QuoteType[] = [
  { value: 'Carro', label: 'Carro', detail: 'passeio ou SUV' },
  { value: 'Moto', label: 'Moto', detail: 'uso particular ou trabalho' },
  { value: 'Picape', label: 'Picape', detail: 'particular, rural ou empresa' },
  { value: 'Van', label: 'Van', detail: 'família, escolar ou empresa' },
  { value: 'Caminhao', label: 'Caminhão', detail: 'carga ou trabalho' },
  { value: 'Utilitario', label: 'Utilitário', detail: 'operação ou empresa' },
  { value: 'Empresarial', label: 'Veículo empresarial', detail: 'frota ou utilitário' },
];

export const vehicleTypes: IconCard[] = [
  { icon: 'car', title: 'Carro', description: 'Cotação para carro de passeio, hatch, sedan e SUV.' },
  { icon: 'motorcycle', title: 'Moto', description: 'Opções conforme cilindrada, uso e região de circulação.' },
  { icon: 'suv', title: 'SUV', description: 'Alternativas para uso familiar, estrada e rotina urbana.' },
  { icon: 'pickup', title: 'Picape', description: 'Cotação para uso particular, trabalho, rural ou empresa.' },
  { icon: 'van', title: 'Van', description: 'Proteção para uso familiar, transporte ou operação.' },
  { icon: 'utility', title: 'Utilitário', description: 'Avaliação para veículos de serviço, entrega ou apoio.' },
  { icon: 'truck', title: 'Caminhão', description: 'Análise de aceitação por perfil de uso e seguradora.' },
  { icon: 'business', title: 'Veículo empresarial', description: 'Alternativas para frota, operação ou veículo de empresa.' },
];

export const benefits: TextCard[] = [
  {
    title: 'Compare seguradoras',
    description: 'Receba opções de acordo com seu perfil, veículo, região e coberturas desejadas.',
  },
  {
    title: 'Atendimento pelo WhatsApp',
    description: 'Você inicia a cotação de forma simples, sem preencher formulários longos.',
  },
  {
    title: 'Seguro sob medida',
    description: 'A proposta pode ser ajustada com cobertura completa, terceiros, assistência, vidros e mais.',
  },
  {
    title: 'Orientação de corretor',
    description: 'Entenda as diferenças entre as coberturas antes de contratar.',
  },
  {
    title: 'Franquia sem mistério',
    description: 'Explicação clara sobre quando a franquia é cobrada e como influencia no valor do seguro.',
  },
  {
    title: 'Suporte no sinistro',
    description: 'Você conta com orientação se precisar acionar o seguro.',
  },
  {
    title: 'Assistência 24h',
    description: 'Orientação para guincho, pane, colisão e demais serviços previstos na apólice.',
  },
];

export const steps = [
  'Clique no botão de WhatsApp',
  'Responda perguntas rápidas',
  'Analisamos opções para seu perfil',
  'Você recebe a cotação explicada',
  'Ajustamos as coberturas',
  'Você decide com tranquilidade',
];

export const advisoryItems = [
  'Franquia',
  'Cobertura para terceiros',
  'Assistência 24h',
  'Carro reserva',
  'Vidros, faróis e retrovisores',
  'Roubo e furto',
  'Colisão',
  'Danos da natureza',
  'Exclusões da apólice',
  'Diferenças entre seguradoras',
  'Coberturas essenciais para seu perfil',
  'Quando a franquia é cobrada',
];

export const coverageItems: IconCard[] = [
  {
    icon: 'RF',
    title: 'Roubo e furto',
    description: 'Proteção caso o veículo seja roubado ou furtado, conforme as condições da apólice.',
  },
  {
    icon: 'CO',
    title: 'Colisão',
    description: 'Ajuda em caso de danos ao veículo decorrentes de acidente coberto.',
  },
  {
    icon: 'IN',
    title: 'Incêndio',
    description: 'Cobertura para danos causados por incêndio, conforme contratação e regras da apólice.',
  },
  {
    icon: '3O',
    title: 'Danos a terceiros',
    description: 'Proteção para prejuízos causados a outras pessoas, veículos ou bens, conforme limite contratado.',
  },
  {
    icon: '24',
    title: 'Assistência 24 horas',
    description: 'Serviços como guincho, chaveiro, pane seca, troca de pneu e outros, conforme plano escolhido.',
  },
  {
    icon: 'GH',
    title: 'Guincho',
    description: 'Auxílio para remoção do veículo em situações previstas na assistência contratada.',
  },
  {
    icon: 'VI',
    title: 'Vidros, faróis e retrovisores',
    description: 'Cobertura adicional para reparo ou troca de itens específicos, conforme contratação.',
  },
  {
    icon: 'CR',
    title: 'Carro reserva',
    description: 'Possibilidade de usar veículo reserva em situações cobertas, conforme regras da seguradora.',
  },
  {
    icon: 'DN',
    title: 'Danos da natureza',
    description: 'Pode incluir enchente, granizo, queda de árvore e outros eventos previstos na apólice.',
  },
  {
    icon: 'AC',
    title: 'Acessórios',
    description: 'Alguns acessórios podem ser protegidos quando informados e aceitos pela seguradora.',
  },
];

export const trustCards: TextCard[] = [
  {
    title: 'Cotação gratuita e sem compromisso',
    description: 'Você conhece valores e coberturas antes de decidir se faz sentido contratar.',
  },
  {
    title: 'Explicação antes da contratação',
    description: 'A proposta é traduzida para você entender franquia, assistências, limites e exclusões.',
  },
  {
    title: 'Suporte antes e depois',
    description: 'O atendimento continua em dúvidas, renovação e orientação para acionar o seguro.',
  },
  {
    title: 'Dados usados para cotação',
    description: 'As informações são usadas apenas para atendimento e simulação do seguro.',
  },
];

export const proofItems: TextCard[] = [
  {
    title: 'Seguro junto com a compra',
    description: 'A proteção pode ser encaminhada no momento em que o veículo passa a fazer parte da sua rotina.',
  },
  {
    title: 'Coberturas explicadas',
    description: 'Franquia, assistência, terceiros e carro reserva são comparados com calma antes da contratação.',
  },
  {
    title: 'Atendimento próximo',
    description: 'Você fala com quem acompanha a cotação, ajusta a proposta e orienta também depois da emissão.',
  },
];

export const clientProofs: ClientProof[] = [
  {
    image: leoSincorPartnershipPhoto,
    alt: 'Leo com parceiro em frente ao painel do Sincor SP',
    meta: 'Parceria',
    title: 'Parceria do Leo no Sincor SP',
    description: 'Registro de relacionamento profissional que fortalece a atuação no mercado de seguros.',
    imagePosition: 'center 52%',
  },
  {
    image: clientPorschePremiumPhoto,
    alt: 'Cliente ao lado de um Porsche branco durante atendimento de seguro',
    meta: 'Carro premium',
    title: 'Carro premium com seguro encaminhado',
    description: 'Cotação orientada para proteger veículos de maior valor com coberturas adequadas ao perfil.',
    imagePosition: 'center 74%',
  },
  {
    image: clientBmwGsMotoPhoto,
    alt: 'Cliente ao lado de uma moto BMW GS em concessionária',
    meta: 'Seguro para moto',
    title: 'Seguro para moto com orientação',
    description: 'Avaliação de opções conforme cilindrada, uso da moto e aceitação das seguradoras.',
    imagePosition: 'center 56%',
  },
  {
    image: clientVolkswagenPhoto,
    alt: 'Cliente ao lado de um Volkswagen preto em uma loja de veículos',
    meta: 'Entrega acompanhada',
    title: 'Carro novo com seguro encaminhado',
    description: 'Cotação alinhada ao perfil do motorista, ao uso do veículo e às coberturas mais importantes.',
    imagePosition: 'center 44%',
  },
  {
    image: clientPeugeotPhoto,
    alt: 'Cliente em concessionária ao lado de veículo coberto com laço vermelho',
    meta: 'Retirada do veículo',
    title: 'Proteção pensada antes de sair rodando',
    description: 'Atendimento para comparar opções e entender o que muda entre seguradoras, franquias e assistências.',
    imagePosition: 'center 42%',
  },
  {
    image: clientFiatSuvPhoto,
    alt: 'Casal sorrindo ao lado de um SUV branco com laço vermelho',
    meta: 'Seguro contratado',
    title: 'Decisão tranquila na entrega do carro',
    description: 'A proposta é explicada em linguagem simples para o cliente contratar sabendo o que está levando.',
    imagePosition: 'center 38%',
  },
];

export const faqItems: FaqItem[] = [
  {
    question: 'A cotação é gratuita?',
    answer: 'Sim. A cotação é gratuita e sem compromisso. Você só contrata se fizer sentido para você.',
  },
  {
    question: 'Sou obrigado a contratar depois de cotar?',
    answer: 'Não. A cotação serve para você conhecer valores, coberturas e opções disponíveis para seu perfil.',
  },
  {
    question: 'Quais dados preciso informar?',
    answer:
      'Normalmente são solicitadas informações sobre o veículo, região de circulação, perfil de uso e condutores. Alguns dados adicionais podem ser necessários para simular com precisão, conforme exigência das seguradoras.',
  },
  {
    question: 'Por que preciso informar alguns dados para cotar?',
    answer:
      'Porque o valor do seguro depende de fatores como modelo do veículo, local de circulação, perfil de uso, condutores, coberturas escolhidas e regras de cada seguradora.',
  },
  {
    question: 'Preciso informar CPF logo no início?',
    answer:
      'Não necessariamente. Primeiro podemos entender seu interesse e explicar o processo. Quando algum dado pessoal for necessário para uma cotação mais precisa, explicamos o motivo antes de solicitar.',
  },
  {
    question: 'Posso contratar apenas cobertura contra roubo e furto?',
    answer:
      'Em alguns casos, sim. A disponibilidade depende do veículo, perfil, região e aceitação da seguradora. Durante o atendimento, podemos avaliar opções completas e opções mais básicas.',
  },
  {
    question: 'Seguro cobre terceiros?',
    answer:
      'Sim, quando a cobertura de danos a terceiros é contratada. Ela pode ajudar em prejuízos causados a outras pessoas, veículos ou bens, conforme o limite escolhido.',
  },
  {
    question: 'O que é franquia?',
    answer:
      'Franquia é o valor pago pelo segurado em determinadas situações de sinistro parcial, como reparo do próprio veículo. O valor e as regras variam conforme a apólice.',
  },
  {
    question: 'Posso colocar mais de um condutor?',
    answer:
      'Sim, é possível informar os condutores que utilizam o veículo. Isso ajuda a cotação a ficar mais adequada à realidade de uso.',
  },
  {
    question: 'Seguro cobre enchente?',
    answer:
      'Pode cobrir, desde que a cobertura esteja prevista na apólice. Por isso é importante entender exatamente o que está incluso antes de contratar.',
  },
  {
    question: 'Vocês ajudam se acontecer um sinistro?',
    answer:
      'Sim. O atendimento não termina na contratação. Você recebe orientação sobre como acionar a seguradora e quais documentos podem ser necessários.',
  },
  {
    question: 'A cotação pelo WhatsApp é segura?',
    answer:
      'Sim. O WhatsApp é usado para facilitar o atendimento e a troca de informações. Seus dados devem ser utilizados apenas para atendimento e simulação da cotação.',
  },
  {
    question: 'Meus dados serão protegidos?',
    answer:
      'As informações fornecidas são utilizadas para atendimento e cotação de seguro, conforme a Política de Privacidade.',
  },
];

export const insurers: Insurer[] = [
  { name: 'Porto Seguro', slug: 'porto-seguro', logo: '/insurers/porto-seguro.svg' },
  { name: 'Azul Seguros', slug: 'azul-seguros', logo: '/insurers/azul-seguros.svg', shape: 'square' },
  { name: 'Itaú Seguros', slug: 'itau-seguros', logo: '/insurers/itau-seguros.png' },
  {
    name: 'Tokio Marine Seguradora',
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
