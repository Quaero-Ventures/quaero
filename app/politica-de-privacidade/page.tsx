import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade | Quaero",
  description: "Política de Privacidade da Quaero e do projeto Me Conta.",
};

const sections = [
  {
    title: "1. Quem somos",
    content: [
      "Para fins desta Política, “Quaero”, “nós” ou “nosso” se referem ao projeto responsável pela coleta e análise das informações descritas aqui.",
      "Projetos, campanhas ou iniciativas específicas da Quaero, como o Me Conta, também podem ser referidos pelo próprio nome dentro de formulários, anúncios ou comunicações.",
      "Controlador dos dados: Quaero",
      "Contato para assuntos de privacidade: gaba@liberula.com",
    ],
  },
  {
    title: "2. Quais dados podemos coletar",
    content: [
      "Podemos coletar dados fornecidos diretamente por você, incluindo:",
    ],
    list: [
      "nome ou forma como prefere ser chamado;",
      "email;",
      "telefone ou WhatsApp;",
      "cargo, profissão, ocupação ou área de atuação;",
      "estado, região ou localização aproximada;",
      "faixa etária, quando perguntada;",
      "respostas a formulários, pesquisas, entrevistas, testes ou experimentos;",
      "relatos sobre rotina, trabalho, consumo, família, renda, lazer, dificuldades, problemas recentes, gastos, interesses, opiniões, hábitos ou experiências;",
      "disponibilidade para participar de pesquisas, entrevistas, testes, validações ou estudos futuros;",
      "informações enviadas por WhatsApp, email ou outros canais de contato;",
      "data, horário, origem aproximada, campanha ou formulário relacionado ao cadastro ou resposta.",
    ],
    after: [
      "Não pedimos, no cadastro inicial de pesquisas gerais, CPF, senha, dados bancários, número de cartão, documentos pessoais, endereço completo ou informações financeiras detalhadas.",
      "Se algum teste, entrevista, pagamento, pesquisa específica ou projeto futuro exigir informações adicionais, isso será informado antes da coleta.",
    ],
  },
  {
    title: "3. Como coletamos os dados",
    content: ["Podemos coletar dados por meio de:"],
    list: [
      "anúncios e formulários do Meta, incluindo Facebook e Instagram Lead Ads ou Instant Forms;",
      "formulários próprios ou de terceiros, como Google Forms, Tally ou ferramentas semelhantes;",
      "páginas, landing pages ou sites da Quaero;",
      "mensagens por WhatsApp, email ou outros canais;",
      "entrevistas, chamadas, conversas, testes ou pesquisas futuras;",
      "testes de produto, testes de usabilidade, testes de conceito, testes de oferta ou validações de mercado;",
      "ferramentas de análise, organização, planilhas, CRM, automação ou gestão interna.",
    ],
  },
  {
    title: "4. Para que usamos os dados",
    content: ["Usamos os dados para:"],
    list: [
      "cadastrar pessoas interessadas em participar de pesquisas, entrevistas, testes ou experimentos;",
      "entender perfis, contextos, interesses, hábitos, opiniões e problemas relatados;",
      "selecionar participantes para pesquisas, testes ou entrevistas compatíveis com seus perfis;",
      "entrar em contato por WhatsApp, email ou outro canal informado;",
      "enviar convites para formulários, entrevistas, testes, pesquisas, validações ou experimentos;",
      "analisar respostas de forma individual, agrupada ou agregada;",
      "gerar aprendizados internos sobre problemas, necessidades, comportamentos, oportunidades, produtos, serviços, ofertas, marcas e mercados;",
      "testar interesse, compreensão, percepção, intenção, demanda ou viabilidade de ideias, produtos, serviços e ofertas;",
      "melhorar nossos formulários, anúncios, comunicações, produtos, serviços e processos de pesquisa;",
      "prevenir abuso, fraude, respostas duplicadas, respostas falsas ou uso indevido;",
      "cumprir obrigações legais, regulatórias ou solicitações de autoridades competentes.",
    ],
    after: [
      "Não vendemos seus dados pessoais.",
      "Não usamos seus dados para conceder crédito, tomar decisões financeiras, contratar pessoas, negar serviços essenciais ou realizar decisões automatizadas com efeitos legais relevantes sobre você.",
    ],
  },
  {
    title: "5. Bases legais",
    content: [
      "Tratamos dados pessoais conforme as bases legais aplicáveis da Lei Geral de Proteção de Dados Pessoais, LGPD.",
      "Dependendo do caso, o tratamento pode se basear em:",
    ],
    list: [
      "seu consentimento, quando você preenche um formulário, participa de uma pesquisa ou autoriza contato;",
      "execução de procedimentos preliminares relacionados à sua participação em pesquisas, entrevistas, testes ou experimentos;",
      "legítimo interesse da Quaero em organizar, analisar e melhorar suas pesquisas, testes, produtos, serviços, ofertas e processos, desde que respeitados seus direitos e expectativas;",
      "cumprimento de obrigação legal ou regulatória, quando aplicável.",
    ],
    after: [
      "Você pode solicitar a remoção do seu cadastro ou a interrupção de contatos futuros a qualquer momento.",
    ],
  },
  {
    title: "6. Compartilhamento de dados",
    content: [
      "Podemos compartilhar ou armazenar dados em ferramentas necessárias para operar a Quaero e seus projetos, tais como:",
    ],
    list: [
      "Meta, Facebook ou Instagram, quando você preenche formulários desses serviços;",
      "provedores de formulário, como Google Forms, Tally ou equivalentes;",
      "serviços de email, mensagens, planilhas, armazenamento, CRM, automação ou análise;",
      "plataformas de videoconferência, quando houver entrevistas;",
      "plataformas de teste, prototipagem, analytics, hospedagem ou gestão de experimentos;",
      "prestadores de serviço que nos auxiliem na operação, análise, organização ou segurança dos dados.",
    ],
    after: [
      "Esses terceiros podem tratar dados conforme suas próprias políticas de privacidade e termos de uso.",
      "Podemos também compartilhar informações quando necessário para cumprir obrigações legais, proteger direitos, prevenir fraude, responder a solicitações de autoridades competentes ou investigar uso indevido.",
      "Não vendemos listas de contatos.",
      "Não compartilhamos seus dados com anunciantes externos para que eles façam contato direto com você.",
    ],
  },
  {
    title: "7. Pesquisas pagas, entrevistas, testes e recompensas",
    content: [
      "Cadastros iniciais em projetos da Quaero, incluindo o Me Conta, geralmente são gratuitos e não remunerados, salvo quando informado de forma diferente.",
      "Algumas pesquisas, entrevistas, testes ou experimentos futuros podem ser pagos, oferecer sorteios, recompensas ou outros incentivos. Quando isso ocorrer, as condições serão informadas antes da participação.",
      "Podemos solicitar informações adicionais apenas para viabilizar pagamento, confirmação de participação, controle operacional ou prevenção de fraude. Essas informações serão usadas somente para essa finalidade, salvo quando houver obrigação legal de retenção.",
      "O envio de cadastro ou resposta não garante convite, seleção, pagamento, recompensa ou participação em pesquisas futuras.",
      "Respostas incompletas, falsas, duplicadas, abusivas ou fora dos critérios da pesquisa podem ser desconsideradas.",
    ],
  },
  {
    title: "8. Retenção e exclusão",
    content: [
      "Manteremos seus dados pelo tempo necessário para cumprir as finalidades descritas nesta Política, incluindo cadastro para pesquisas futuras, análise de respostas, condução de testes e experimentos, prevenção de fraude, controle operacional e cumprimento de obrigações legais.",
      "Podemos excluir ou anonimizar dados quando eles deixarem de ser necessários.",
      "Você pode solicitar a exclusão do seu cadastro ou a interrupção de contatos futuros pelo email: gaba@liberula.com",
      "Após recebermos sua solicitação, poderemos manter alguns registros mínimos quando necessário para cumprir obrigações legais, prevenir fraude, comprovar atendimento da solicitação ou proteger direitos.",
    ],
  },
  {
    title: "9. Seus direitos",
    content: ["Nos termos da LGPD, você pode solicitar, quando aplicável:"],
    list: [
      "confirmação da existência de tratamento de seus dados;",
      "acesso aos dados pessoais;",
      "correção de dados incompletos, inexatos ou desatualizados;",
      "anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade;",
      "portabilidade dos dados, quando aplicável e conforme regulamentação;",
      "informação sobre compartilhamento de dados;",
      "revogação do consentimento;",
      "eliminação de dados tratados com base no consentimento, observadas hipóteses legais de retenção;",
      "oposição a determinados tratamentos, quando cabível.",
    ],
    after: [
      "Para exercer seus direitos, entre em contato por: gaba@liberula.com",
      "Poderemos solicitar informações adicionais para confirmar sua identidade e proteger seus dados contra acesso indevido.",
    ],
  },
  {
    title: "10. Segurança",
    content: [
      "Adotamos medidas razoáveis para proteger os dados contra acesso não autorizado, perda, alteração, divulgação indevida ou uso inadequado.",
      "Apesar disso, nenhum sistema é totalmente seguro. Por isso, recomendamos que você não envie informações sensíveis, senhas, documentos, dados bancários ou dados de cartão por nossos formulários, salvo se isso for solicitado de forma específica e justificada em uma etapa futura.",
    ],
  },
  {
    title: "11. Dados sensíveis",
    content: [
      "Não buscamos coletar dados sensíveis em cadastros iniciais, pesquisas gerais ou testes exploratórios.",
      "Pedimos que você evite enviar informações sobre saúde detalhada, religião, opinião política, origem racial ou étnica, vida sexual, dados genéticos, biométricos ou outros dados sensíveis, a menos que isso seja claramente necessário para uma pesquisa específica e tenha sido explicado antes.",
      "Se você enviar espontaneamente dados sensíveis em respostas abertas, poderemos excluir, anonimizar ou desconsiderar essas informações quando não forem necessárias.",
    ],
  },
  {
    title: "12. Menores de idade",
    content: [
      "A Quaero e seus projetos de pesquisa geral não são destinados a menores de 18 anos, salvo quando um projeto específico informar regras próprias e autorização adequada.",
      "Não buscamos coletar dados de menores de idade em cadastros gerais. Caso identifiquemos cadastro de menor de 18 anos sem autorização apropriada, poderemos excluir os dados.",
    ],
  },
  {
    title: "13. Transferência internacional",
    content: [
      "Algumas ferramentas que usamos podem armazenar ou processar dados fora do Brasil, como serviços de formulário, email, armazenamento, análise, mensagens, hospedagem, automação ou infraestrutura tecnológica.",
      "Quando isso ocorrer, adotaremos medidas razoáveis para usar fornecedores reconhecidos e compatíveis com padrões de proteção de dados aplicáveis.",
    ],
  },
  {
    title: "14. Alterações nesta Política",
    content: [
      "Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças na Quaero, em seus projetos, nas ferramentas usadas, nos requisitos legais ou em nossas práticas.",
      "A versão mais recente estará sempre disponível nesta página, com a data de atualização indicada no início.",
    ],
  },
  {
    title: "15. Contato",
    content: [
      "Para dúvidas, solicitações, remoção de cadastro ou exercício de direitos relacionados a dados pessoais, entre em contato: gaba@liberula.com",
      "Responderemos em prazo razoável, conforme a natureza da solicitação e a legislação aplicável.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#0A0A0A]">
      <article className="mx-auto max-w-3xl px-6 py-10 sm:py-14 lg:px-0">
        <header className="border-b border-[#E5E7EB] pb-10">
          <Link href="/" className="text-sm text-[#6B7280] transition-colors hover:text-[#0A0A0A]">
            Quaero
          </Link>
          <p className="mt-16 text-xs font-medium uppercase text-[#6B7280]">
            Política institucional
          </p>
          <h1 className="mt-5 text-4xl font-light leading-tight sm:text-6xl">
            Política de Privacidade
          </h1>
          <p className="mt-6 text-sm text-[#6B7280]">
            Última atualização: 08 de julho de 2026
          </p>
        </header>

        <div className="space-y-6 border-b border-[#E5E7EB] py-10 text-lg leading-8 text-[#6B7280]">
          <p>
            Esta Política de Privacidade explica como a Quaero coleta, usa, armazena e protege dados pessoais de pessoas que interagem com nossos sites, páginas, formulários, anúncios, pesquisas, entrevistas, testes, experimentos, mensagens, produtos, serviços ou outros canais.
          </p>
          <p>
            A Quaero é um projeto de descoberta, validação e experimentação de ideias, produtos, serviços, marcas, ofertas e processos. Podemos conduzir pesquisas, testes de interesse, testes de usabilidade, entrevistas, formulários, experimentos de mercado, cadastros de participantes e outros estudos exploratórios.
          </p>
          <p>
            Alguns projetos específicos da Quaero podem ter nomes próprios, como o Me Conta. Esses projetos também são cobertos por esta Política, salvo quando houver uma política específica informando o contrário.
          </p>
          <p>
            Ao preencher um formulário, enviar respostas, participar de pesquisas, entrevistas, testes ou entrar em contato conosco, você declara estar ciente desta Política de Privacidade.
          </p>
        </div>

        <div className="divide-y divide-[#E5E7EB]">
          {sections.map((section) => (
            <section key={section.title} className="py-10">
              <h2 className="text-2xl font-light leading-tight text-[#0A0A0A]">
                {section.title}
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-[#6B7280] sm:text-lg">
                {section.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.list ? (
                  <ul className="list-disc space-y-3 pl-6">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                {section.after?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
