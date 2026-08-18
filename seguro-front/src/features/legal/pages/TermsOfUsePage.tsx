import { LegalPage } from './LegalPage';

const sections = [
  {
    title: 'Uso do site',
    content: [
      'Este site apresenta informações sobre cotação e atendimento de seguros. Ao usar o site ou iniciar contato pelo WhatsApp, você concorda com estes termos.',
      'Você se compromete a fornecer informações verdadeiras e atualizadas para que a cotação possa ser analisada corretamente.',
    ],
  },
  {
    title: 'Cotações e propostas',
    content: [
      'As informações apresentadas no site não garantem aprovação, contratação ou preço final de seguro.',
      'Valores, coberturas, franquias e condições dependem da análise das seguradoras e podem mudar conforme perfil, veículo, região, uso e demais critérios.',
    ],
  },
  {
    title: 'Atendimento',
    content: [
      'O atendimento pode ocorrer por WhatsApp, telefone, e-mail ou outros canais informados pela Torrezan Stelluti Seguros.',
      'Ao iniciar uma cotação, você autoriza o contato para fins de atendimento, simulação, renovação e acompanhamento comercial relacionado ao seguro.',
    ],
  },
  {
    title: 'Responsabilidades',
    content: [
      'A contratação do seguro depende da aceitação da seguradora e da conferência dos dados informados.',
      'A Torrezan Stelluti Seguros pode atualizar este site, seus textos e estes termos sempre que necessário.',
    ],
  },
];

export function TermsOfUsePage() {
  return (
    <LegalPage
      title="Termos de Uso"
      description="Estes termos explicam as condições básicas para uso do site e solicitação de cotação."
      sections={sections}
    />
  );
}
