/**
 * i18n dictionary and language switcher.
 * Every translatable element declares a `data-i18n` key; `setLanguage()`
 * swaps text content and persists the choice in localStorage.
 */
const translations = {
  pt: {
    'meta.title': 'Filipe Pacheco — Desenvolvedor Full Stack',
    'nav.about': 'Sobre',
    'nav.skills': 'Habilidades',
    'nav.experience': 'Experiência',
    'nav.projects': 'Projetos',
    'nav.education': 'Formação',
    'nav.contact': 'Contato',

    'hero.greeting': 'Olá, eu sou',
    'hero.role': 'Desenvolvedor Full Stack',
    'hero.tagline':
      'Apaixonado por tecnologia e por transformar problemas complexos em soluções elegantes. Construo aplicações web e mobile que geram valor real para pessoas e negócios.',
    'hero.cta.contact': 'Fale comigo',
    'hero.cta.cv': 'Baixar currículo',
    'hero.location': 'Eusébio, Ceará — Brasil',

    'about.title': 'Sobre mim',
    'about.p1':
      'Sou Desenvolvedor Full Stack com experiência no desenvolvimento de aplicações web e mobile, utilizando Angular, Ionic, TypeScript, Node.js, Elixir/Phoenix e PostgreSQL. Atualmente trabalho na Audo — Tecnologia e Saúde, contribuindo para a evolução de uma plataforma de saúde: implemento novas funcionalidades, mantenho a aplicação, integro APIs e aprimoro a experiência dos usuários.',
    'about.p2':
      'Meu perfil é analítico, disciplinado e voltado para a resolução de problemas. Gosto de entender o negócio a fundo, propor melhorias e desenvolver soluções escaláveis e de fácil manutenção. Tomo decisões com base em dados e evidências, mantenho a calma sob pressão e tenho autonomia para conduzir entregas de ponta a ponta.',
    'about.p3':
      'Tenho fluência em inglês e experiência real de trabalho em ambientes internacionais — já colaborei com profissionais da China, Índia, Trinidad e Tobago e Estados Unidos, incluindo a representação de empresa na IAAPA Expo em Orlando (EUA).',
    'about.highlight1.title': 'Perfil analítico',
    'about.highlight1.text':
      'Atenção a detalhes, decisões racionais baseadas em evidências e cuidado na análise de cenários.',
    'about.highlight2.title': 'Autodisciplina e resiliência',
    'about.highlight2.text':
      'Organização, constância e estabilidade emocional para entregar com qualidade, mesmo sob pressão.',
    'about.highlight3.title': 'Colaboração internacional',
    'about.highlight3.text':
      'Inglês fluente e vivência diária de conversação com times da China, Índia, Trinidad e Tobago e EUA.',

    'skills.title': 'Habilidades',
    'skills.tech.title': 'Técnicas',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.mobile': 'Mobile',
    'skills.data': 'Dados & IA',
    'skills.soft.title': 'Interpessoais',
    'skills.soft.1.title': 'Resolução de problemas',
    'skills.soft.1.text': 'Entendo o problema antes da solução — analiso cenários, avalio evidências e proponho o caminho de maior valor.',
    'skills.soft.2.title': 'Comunicação em inglês',
    'skills.soft.2.text': 'Fluência e prática diária de conversação em ambientes de trabalho multiculturais.',
    'skills.soft.3.title': 'Autodisciplina',
    'skills.soft.3.text': 'Organização, autocontrole e foco: qualidades confirmadas em avaliação comportamental (BIG 5).',
    'skills.soft.4.title': 'Iniciativa individual',
    'skills.soft.4.text': 'Autonomia para assumir responsabilidades e conduzir tarefas de ponta a ponta sem supervisão constante.',
    'skills.soft.5.title': 'Estabilidade emocional',
    'skills.soft.5.text': 'Calma e consistência sob pressão — decisões deliberadas, não impulsivas.',
    'skills.soft.6.title': 'Colaboração',
    'skills.soft.6.text': 'Perfil colaborativo: gosto de compartilhar contexto, revisar código e crescer junto com o time.',

    'experience.title': 'Experiência profissional',
    'experience.current': 'Atual',
    'exp.audo2.role': 'Desenvolvedor Full Stack',
    'exp.audo2.company': 'AUDO — Tecnologia e Saúde',
    'exp.audo2.period': 'Fev 2025 — Presente',
    'exp.audo2.d1': 'Desenvolvimento de plataforma de saúde digital utilizada por pacientes e profissionais, com interoperabilidade baseada no padrão HL7 FHIR R4.',
    'exp.audo2.d2': 'App mobile multiplataforma com React Native (Expo), React 19 e TypeScript, incluindo cliente de API gerado a partir de OpenAPI, TanStack Query e comunicação em tempo real via WebSocket (Phoenix Channels).',
    'exp.audo2.d3': 'Backend em Elixir/Phoenix (arquitetura umbrella) com PostgreSQL, integração com servidor HAPI FHIR como fonte de dados clínicos e autenticação OAuth2/OIDC (SMART on FHIR).',
    'exp.audo2.d4': 'Funcionalidades de organização de exames, questionários clínicos (FHIR Questionnaire) e sumarização com IA.',
    'exp.audo2.d5': 'Integração frontend/backend, deploy com Docker e manutenção contínua com foco na experiência do usuário.',
    'exp.audo1.role': 'Estagiário de Desenvolvimento Backend',
    'exp.audo1.company': 'AUDO — Tecnologia e Saúde',
    'exp.audo1.period': 'Ago 2024 — Fev 2025',
    'exp.audo1.d1': 'Desenvolvimento backend com Elixir e bancos de dados relacionais.',
    'exp.audo1.d2': 'Apoio à implementação de funcionalidades e correções na plataforma de saúde.',
    'exp.blog.role': 'Desenvolvedor Frontend Web',
    'exp.blog.company': 'Blog do Bernardino',
    'exp.blog.period': 'Abr 2020 — Abr 2021',
    'exp.blog.d1': 'Desenvolvimento de website com HTML, CSS e Angular Material.',
    'exp.mm.role': 'Organização de Dados & Eventos',
    'exp.mm.company': 'MasterMind Entretenimento — São Paulo',
    'exp.mm.period': 'Set 2019 — Abr 2020',
    'exp.mm.d1': 'Gestão de bases de dados de clientes e colaboradores; estruturas em MySQL Server.',
    'exp.mm.d2': 'Organização e participação em eventos por todo o Brasil.',
    'exp.mm.d3': 'Representante internacional da empresa na IAAPA Expo em Orlando, EUA (72h).',

    'projects.title': 'Projetos em destaque',
    'proj.tindoria.title': 'Tindoria',
    'proj.tindoria.text':
      'Plataforma que conecta estudantes a professores particulares, desenvolvida durante a graduação. Participei da arquitetura, do desenvolvimento e da integração dos módulos da aplicação.',
    'proj.tindoria.tag': 'Projeto acadêmico',
    'proj.health.title': 'Audo',
    'proj.health.text':
      'Plataforma de saúde digital da Audo que aproxima médicos e pacientes, centralizando a jornada de saúde em um só lugar. Atuo na implementação de novas funcionalidades, integrações com APIs e na evolução contínua da experiência dos usuários. Detalhes do produto sob confidencialidade.',
    'proj.health.tag': 'Profissional',

    'education.title': 'Formação e certificações',
    'edu.cesar.degree': 'Pós-graduação em Análise de Dados e Inteligência Artificial',
    'edu.cesar.school': 'CESAR School',
    'edu.cesar.period': 'Jan 2025 — Mar 2026 (concluída)',
    'edu.unifor.degree': 'Análise e Desenvolvimento de Sistemas',
    'edu.unifor.school': 'Universidade de Fortaleza (UNIFOR)',
    'edu.unifor.period': 'Fev 2022 — Jul 2024',
    'edu.unopar.degree': 'Ciências Aeronáuticas',
    'edu.unopar.school': 'Universidade Norte do Paraná (UNOPAR)',
    'edu.unopar.period': 'Jul 2012 — Jul 2015',
    'cert.title': 'Certificações',
    'cert.agile.name': 'Agile Explorer — IBM',
    'cert.agile.detail':
      'Convidado por um professor da graduação a realizar o curso; concluído com louvor (25h, jun/2023).',
    'cert.intl.name': 'Representante Internacional — MasterMind',
    'cert.intl.detail': 'Representação da empresa em eventos corporativos e palestras em Orlando, EUA (72h, nov/2019).',

    'intl.title': 'Experiência internacional',
    'intl.text':
      'Inglês fluente com prática diária de conversação em ambiente profissional. Experiência de colaboração com profissionais de:',
    'intl.china': 'China',
    'intl.india': 'Índia',
    'intl.tt': 'Trinidad e Tobago',
    'intl.usa': 'Estados Unidos',

    'contact.title': 'Vamos conversar?',
    'contact.text':
      'Estou sempre aberto a novos desafios, projetos e boas conversas sobre tecnologia.',
    'contact.email': 'E-mail',
    'contact.cv.title': 'Currículo',
    'contact.cv.pt': 'Português (PDF)',
    'contact.cv.en': 'Inglês (PDF)',

    'footer.text': 'Desenvolvido com dedicação por Filipe Pacheco.',
  },

  en: {
    'meta.title': 'Filipe Pacheco — Full Stack Developer',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.education': 'Education',
    'nav.contact': 'Contact',

    'hero.greeting': "Hi, I'm",
    'hero.role': 'Full Stack Developer',
    'hero.tagline':
      'Passionate about technology and about turning complex problems into elegant solutions. I build web and mobile applications that create real value for people and businesses.',
    'hero.cta.contact': 'Get in touch',
    'hero.cta.cv': 'Download resume',
    'hero.location': 'Eusébio, Ceará — Brazil',

    'about.title': 'About me',
    'about.p1':
      'I am a Full Stack Developer experienced in building web and mobile applications with Angular, Ionic, TypeScript, Node.js, Elixir/Phoenix and PostgreSQL. I currently work at Audo — Tecnologia e Saúde, helping evolve a healthcare platform: implementing new features, maintaining the application, integrating APIs and improving the user experience.',
    'about.p2':
      'My profile is analytical, disciplined and problem-solving oriented. I like to deeply understand the business, propose improvements and build scalable, maintainable solutions. I make decisions based on data and evidence, stay calm under pressure and have the autonomy to drive deliveries end to end.',
    'about.p3':
      'I am fluent in English with real experience working in international environments — I have collaborated with professionals from China, India, Trinidad and Tobago and the United States, including representing a company at the IAAPA Expo in Orlando (USA).',
    'about.highlight1.title': 'Analytical profile',
    'about.highlight1.text':
      'Attention to detail, rational evidence-based decisions and careful scenario analysis.',
    'about.highlight2.title': 'Self-discipline & resilience',
    'about.highlight2.text':
      'Organization, consistency and emotional stability to deliver with quality, even under pressure.',
    'about.highlight3.title': 'International collaboration',
    'about.highlight3.text':
      'Fluent English and daily conversational practice with teams from China, India, Trinidad and Tobago and the USA.',

    'skills.title': 'Skills',
    'skills.tech.title': 'Technical',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.mobile': 'Mobile',
    'skills.data': 'Data & AI',
    'skills.soft.title': 'Interpersonal',
    'skills.soft.1.title': 'Problem solving',
    'skills.soft.1.text': 'I understand the problem before the solution — analyzing scenarios, weighing evidence and proposing the highest-value path.',
    'skills.soft.2.title': 'English communication',
    'skills.soft.2.text': 'Fluency and daily conversational practice in multicultural work environments.',
    'skills.soft.3.title': 'Self-discipline',
    'skills.soft.3.text': 'Organization, self-control and focus: strengths confirmed by a BIG 5 behavioral assessment.',
    'skills.soft.4.title': 'Individual initiative',
    'skills.soft.4.text': 'Autonomy to take ownership and drive tasks end to end without constant supervision.',
    'skills.soft.5.title': 'Emotional stability',
    'skills.soft.5.text': 'Calm and consistent under pressure — deliberate decisions, never impulsive ones.',
    'skills.soft.6.title': 'Collaboration',
    'skills.soft.6.text': 'Collaborative by nature: I enjoy sharing context, reviewing code and growing together with the team.',

    'experience.title': 'Professional experience',
    'experience.current': 'Current',
    'exp.audo2.role': 'Full Stack Developer',
    'exp.audo2.company': 'AUDO — Tecnologia e Saúde',
    'exp.audo2.period': 'Feb 2025 — Present',
    'exp.audo2.d1': 'Development of a digital health platform used by patients and professionals, with interoperability based on the HL7 FHIR R4 standard.',
    'exp.audo2.d2': 'Cross-platform mobile app with React Native (Expo), React 19 and TypeScript, including an API client generated from OpenAPI, TanStack Query and real-time communication via WebSocket (Phoenix Channels).',
    'exp.audo2.d3': 'Backend in Elixir/Phoenix (umbrella architecture) with PostgreSQL, integration with a HAPI FHIR server as the clinical data source and OAuth2/OIDC authentication (SMART on FHIR).',
    'exp.audo2.d4': 'Features for exam organization, clinical questionnaires (FHIR Questionnaire) and AI-powered summarization.',
    'exp.audo2.d5': 'Frontend/backend integration, Docker deployment and continuous maintenance focused on user experience.',
    'exp.audo1.role': 'Backend Development Intern',
    'exp.audo1.company': 'AUDO — Tecnologia e Saúde',
    'exp.audo1.period': 'Aug 2024 — Feb 2025',
    'exp.audo1.d1': 'Backend development with Elixir and relational databases.',
    'exp.audo1.d2': 'Support for feature implementation and fixes on the healthcare platform.',
    'exp.blog.role': 'Frontend Web Developer',
    'exp.blog.company': 'Blog do Bernardino',
    'exp.blog.period': 'Apr 2020 — Apr 2021',
    'exp.blog.d1': 'Website development with HTML, CSS and Angular Material.',
    'exp.mm.role': 'Data Organization & Events',
    'exp.mm.company': 'MasterMind Entretenimento — São Paulo',
    'exp.mm.period': 'Sep 2019 — Apr 2020',
    'exp.mm.d1': 'Managed customer and employee databases; implemented structures in MySQL Server.',
    'exp.mm.d2': 'Organized and took part in events across Brazil.',
    'exp.mm.d3': 'International company representative at the IAAPA Expo in Orlando, USA (72h).',

    'projects.title': 'Featured projects',
    'proj.tindoria.title': 'Tindoria',
    'proj.tindoria.text':
      'A platform connecting students with private tutors, built during my degree. I worked on the architecture, development and integration of the application modules.',
    'proj.tindoria.tag': 'Academic project',
    'proj.health.title': 'Audo',
    'proj.health.text':
      "Audo's digital health platform that brings doctors and patients closer together, centralizing the health journey in one place. I work on new features, API integrations and the continuous evolution of the user experience. Product details under NDA.",
    'proj.health.tag': 'Professional',

    'education.title': 'Education & certifications',
    'edu.cesar.degree': 'Postgraduate Degree in Data Analysis and Artificial Intelligence',
    'edu.cesar.school': 'CESAR School',
    'edu.cesar.period': 'Jan 2025 — Mar 2026 (completed)',
    'edu.unifor.degree': 'Systems Analysis and Development',
    'edu.unifor.school': 'University of Fortaleza (UNIFOR)',
    'edu.unifor.period': 'Feb 2022 — Jul 2024',
    'edu.unopar.degree': 'Aeronautical Sciences',
    'edu.unopar.school': 'University of Northern Paraná (UNOPAR)',
    'edu.unopar.period': 'Jul 2012 — Jul 2015',
    'cert.title': 'Certifications',
    'cert.agile.name': 'Agile Explorer — IBM',
    'cert.agile.detail':
      'Invited by a university professor to take the course; completed with honors (25h, Jun 2023).',
    'cert.intl.name': 'International Representative — MasterMind',
    'cert.intl.detail': 'Represented the company at corporate events and lectures in Orlando, USA (72h, Nov 2019).',

    'intl.title': 'International experience',
    'intl.text':
      'Fluent English with daily conversational practice in professional settings. Experience collaborating with professionals from:',
    'intl.china': 'China',
    'intl.india': 'India',
    'intl.tt': 'Trinidad and Tobago',
    'intl.usa': 'United States',

    'contact.title': "Let's talk?",
    'contact.text':
      'I am always open to new challenges, projects and good conversations about technology.',
    'contact.email': 'Email',
    'contact.cv.title': 'Resume',
    'contact.cv.pt': 'Portuguese (PDF)',
    'contact.cv.en': 'English (PDF)',

    'footer.text': 'Crafted with dedication by Filipe Pacheco.',
  },
};

const LANG_STORAGE_KEY = 'portfolio-lang';

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.title = dict['meta.title'];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll('.lang-switch button').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
  });

  localStorage.setItem(LANG_STORAGE_KEY, lang);
}

function initLanguage() {
  const saved = localStorage.getItem(LANG_STORAGE_KEY);
  const browser = navigator.language && navigator.language.startsWith('pt') ? 'pt' : 'en';
  setLanguage(saved || browser);
}
