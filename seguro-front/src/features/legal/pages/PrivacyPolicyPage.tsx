import { LegalPage } from './LegalPage';

const sections = [
  {
    title: 'Quais dados coletamos',
    content: [
      'Podemos coletar informações fornecidas por você durante o atendimento, como nome, telefone, CPF, CEP, placa, dados do veículo, perfil de uso, informações sobre condutores e dados da apólice quando houver renovação.',
      'Também podemos registrar a origem do contato, como site, campanha, anúncio, indicação ou rede social, para entender de onde chegam as solicitações de cotação.',
    ],
  },
  {
    title: 'Como usamos os dados',
    content: [
      'Usamos os dados para atendimento, simulação de cotação de seguro, contato comercial, comparação de opções e acompanhamento do pedido.',
      'As informações podem ser compartilhadas com seguradoras, plataformas de cotação e parceiros necessários para calcular ou apresentar propostas de seguro.',
    ],
  },
  {
    title: 'Armazenamento e segurança',
    content: [
      'Os dados podem ser armazenados em ferramentas utilizadas no atendimento, como WhatsApp, sistemas internos e banco de dados do projeto.',
      'Adotamos cuidados razoáveis para proteger as informações e limitar o uso ao atendimento e à cotação solicitada.',
    ],
  },
  {
    title: 'Direitos do titular',
    content: [
      'Você pode solicitar acesso, correção ou exclusão dos seus dados, quando aplicável, entrando em contato pelos canais informados nesta página.',
      'Também pode pedir para não receber novos contatos comerciais relacionados à cotação.',
    ],
  },
];

export function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Política de Privacidade"
      description="Esta política explica, de forma simples, como usamos os dados enviados para cotação e atendimento de seguro."
      sections={sections}
    />
  );
}
