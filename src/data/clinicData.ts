export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  badge: string;
  highlights: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  crmv: string;
  specialty: string;
  bio: string;
  avatarColor: string;
  initials: string;
}

export interface Testimonial {
  id: string;
  author: string;
  pet?: string;
  rating: number;
  content: string;
  date: string;
  initials: string;
}

export interface ClinicPhoto {
  id: string;
  title: string;
  caption: string;
  url: string;
  fallbackUrl: string;
  dimensions: string;
  aspectRatio: string;
}

export const CLINIC_PHOTOS: ClinicPhoto[] = [
  {
    id: 'fachada',
    title: 'Fachada da Clínica Animal Care',
    caption: 'Localização privilegiada na Avenida Nossa Senhora Medianeira, 1567, com fácil acesso e estacionamento em Santa Maria - RS.',
    url: 'https://lh3.googleusercontent.com/grass-cs/AABkmLeUXUzVDjJN_7b01herVN_I-Fl1rZ4g8rRlOPobvCe7ndLOP0dfCVIaIuBvurubenh2njPqHV5TUO1ufq7v-efiZYUcnHvMLD5E1GXBpX7BzoA_45byn5E1d2hM7n28FkFqI0JiUQwZXCg=w1376-h768-k-no',
    fallbackUrl: 'https://lh3.googleusercontent.com/grass-cs/AABkmLeUXUzVDjJN_7b01herVN_I-Fl1rZ4g8rRlOPobvCe7ndLOP0dfCVIaIuBvurubenh2njPqHV5TUO1ufq7v-efiZYUcnHvMLD5E1GXBpX7BzoA_45byn5E1d2hM7n28FkFqI0JiUQwZXCg=w154-h86-k-no',
    dimensions: '1376 × 768',
    aspectRatio: '16/9',
  },
  {
    id: 'interior-1',
    title: 'Recepção e Espera Climatizada',
    caption: 'Ambiente aconchegante e acolhedor pensado para reduzir o estresse de cães e gatos durante a espera.',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q5dlNxtY7lsZHqzZlD3ALMvUVp1VsXZzOhHi1xbHY4t93SgBQmUMoReNsDaMgh9CN1AWrIsx_yQGUhYn3XQR83mC4W2wyeFduhZI6AwiVGaFq0QHillWfMyYrNIgrpDplMhApAxjxhYmjr=w1024-h1024-k-no',
    fallbackUrl: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q5dlNxtY7lsZHqzZlD3ALMvUVp1VsXZzOhHi1xbHY4t93SgBQmUMoReNsDaMgh9CN1AWrIsx_yQGUhYn3XQR83mC4W2wyeFduhZI6AwiVGaFq0QHillWfMyYrNIgrpDplMhApAxjxhYmjr=w203-h203-k-no',
    dimensions: '1024 × 1024',
    aspectRatio: '1/1',
  },
  {
    id: 'interior-2',
    title: 'Consultório Veterinário Clínico',
    caption: 'Espaço higienizado com equipamentos modernos para atendimento clínico detalhado, seguro e tranquilo.',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sto6SNxYpe_o_T-AaCYyXArIqZOQwDSGRz8DUus96-r1VOQiL-_fCyIVPDQ8Cw1pAq07UC3OS5DhqMpWQifNDkW9Gqf0sqZXtkWbTQRzoTR58C1j8noLeEkANbaECg8ojuoUJJOr-NAGy6=w1080-h1080-k-no',
    fallbackUrl: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sto6SNxYpe_o_T-AaCYyXArIqZOQwDSGRz8DUus96-r1VOQiL-_fCyIVPDQ8Cw1pAq07UC3OS5DhqMpWQifNDkW9Gqf0sqZXtkWbTQRzoTR58C1j8noLeEkANbaECg8ojuoUJJOr-NAGy6=w203-h203-k-no',
    dimensions: '1080 × 1080',
    aspectRatio: '1/1',
  },
  {
    id: 'interior-3',
    title: 'Ala de Exames e Diagnóstico Completo',
    caption: 'Estrutura técnica avançada para realização de exames complementares com rapidez e diagnóstico integrado.',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QPT5LSzKvoB7XA3ds4vHSFiVOrK17JDFWu3bt95H4OGX0SnJlSc9cz5FWrsARhzM-IjM4pZUMvqsdzlZj50eMJSHlxZ0_dcnBFawSh6z2f0AtN3Zaunp2K6H-ZdestgVoxfM7npNXPU9EQ=w1024-h1024-k-no',
    fallbackUrl: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QPT5LSzKvoB7XA3ds4vHSFiVOrK17JDFWu3bt95H4OGX0SnJlSc9cz5FWrsARhzM-IjM4pZUMvqsdzlZj50eMJSHlxZ0_dcnBFawSh6z2f0AtN3Zaunp2K6H-ZdestgVoxfM7npNXPU9EQ=w203-h203-k-no',
    dimensions: '1024 × 1024',
    aspectRatio: '1/1',
  },
  {
    id: 'interior-4',
    title: 'Espaço de Atendimento e Conforto Animal',
    caption: 'Ambiente planejado com carinho e conforto para proporcionar a melhor experiência ao paciente e seu tutor.',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S1y-wayegcME9iRJeVY46c_l0FSOtnLYuR3bI-zFvKQi6RWw-aUAq_kP54cv0qpG58Ea-Ot_TaThbxVAwsp0Edf8vSzKF6ZWPjvZP88B8PdZWAZf02opTaBE0Kq20XfSIMBcsRAyNCa7td=w1024-h1024-k-no',
    fallbackUrl: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S1y-wayegcME9iRJeVY46c_l0FSOtnLYuR3bI-zFvKQi6RWw-aUAq_kP54cv0qpG58Ea-Ot_TaThbxVAwsp0Edf8vSzKF6ZWPjvZP88B8PdZWAZf02opTaBE0Kq20XfSIMBcsRAyNCa7td=w203-h203-k-no',
    dimensions: '1024 × 1024',
    aspectRatio: '1/1',
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'exames-rotina',
    title: 'Exames de Rotina',
    subtitle: 'Prevenção e Diagnóstico Precoce',
    badge: 'Saúde Preventiva',
    description:
      'Exames de rotina são fundamentais para garantir a saúde do seu amigo! Através dos check-ups, podemos identificar precocemente se há algum problema com a saúde do pet, impedindo que atinja proporções maiores. Também, alguns exames podem ser feitos a fim de detectar com maior precisão a existência de enfermidades. Como por exemplo: Ultrassonografia; Exame de sangue; Exame oftalmológico; Exame de urina e de fezes; e Raio-X. Por fim, a prevenção é sempre o melhor remédio. Garanta a qualidade de vida do seu melhor amigo com profissionais especializados e com nossa clinica extremamente completa.',
    imageUrl: 'https://i.postimg.cc/k4ng4852/exame.jpg',
    highlights: [
      'Ultrassonografia e Raio-X digital',
      'Exames laboratoriais de sangue, urina e fezes',
      'Avaliação oftalmológica e cardiológica',
      'Resultados rápidos e diagnóstico integrado',
    ],
  },
  {
    id: 'geriatria-felinos',
    title: 'Geriatria para Felinos',
    subtitle: 'Longevidade e Bem-estar para Gatos Idosos',
    badge: 'Medicina Felina',
    description:
      'Aqui na Animal Care, além de contarmos com uma equipe especializada em geriatria, dispomos de todo conforto e produtos de primeira, tudo de melhor para o seu amigo!',
    imageUrl: 'https://i.postimg.cc/mDt2C470/204825339-528923215116383-4133383277446454059-n.jpg',
    highlights: [
      'Acompanhamento de doenças crônicas e renais',
      'Controle de dores articulares e mobilidade',
      'Manejo amigável de estresse felino (Cat Friendly)',
      'Planos de nutrição clínica e suplementação',
    ],
  },
  {
    id: 'castracao',
    title: 'Castração',
    subtitle: 'Cirurgia Segura e Cuidados Pós-Operatórios',
    badge: 'Cirurgia Eletiva',
    description:
      'A castração contribui para que seu pet tenha uma vida mais saudável e ainda ajuda a salvar a vida de muitos outros animais que não possuem a mesma oportunidade de ter um lar e receber os cuidados que precisam. Algumas vantagens entre as quais podemos destacar com a castração são a redução drástica do risco de doenças nas vias uterinas e órgãos genitais (como câncer de mama, útero, próstata, testículos e infecções na bexiga), fim do risco das fugas e brigas, assim como dos latidos, uivos e miados excessivos que ocorrem por ocasião do cio. O procedimento também elimina a gravidez psicológica, comum em algumas fêmeas após o término do cio, o que ocasiona aumento das mamas, a produção de leite e irritabilidade excessiva.',
    imageUrl: 'https://i.postimg.cc/851z5WCJ/castracao.jpg',
    highlights: [
      'Anestesia inalatória monitorada de alta segurança',
      'Redução comprovada de riscos de tumores e infecções',
      'Prevenção de fugas, brigas e marcação de território',
      'Acompanhamento pós-operatório atencioso e humanizado',
    ],
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'dra-mariana',
    name: 'Dra. Mariana Silveira',
    role: 'Diretora Clínica & Cirurgiã',
    crmv: 'CRMV-RS 14.820',
    specialty: 'Clínica Geral, Cirurgia de Tecidos Moles e Castração Segura',
    bio: 'Mais de 10 anos dedicados à saúde preventiva e procedimentos cirúrgicos minuciosos, com foco no conforto e na recuperação rápida dos pacientes.',
    avatarColor: 'from-[#00B1B2] to-[#00898A]',
    initials: 'MS',
  },
  {
    id: 'dr-gabriel',
    name: 'Dr. Gabriel Medeiros',
    role: 'Especialista em Diagnóstico por Imagem',
    crmv: 'CRMV-RS 16.245',
    specialty: 'Ultrassonografia, Radiologia e Medicina Diagnóstica',
    bio: 'Especializado em diagnóstico precoce e check-ups preventivos, trazendo tecnologia e interpretação rápida para salvar vidas.',
    avatarColor: 'from-[#0284C7] to-[#0369A1]',
    initials: 'GM',
  },
  {
    id: 'dra-juliana',
    name: 'Dra. Juliana Prado',
    role: 'Especialista em Medicina Felina & Geriatria',
    crmv: 'CRMV-RS 17.512',
    specialty: 'Geriatria Felina, Doenças Renais e Manejo Cat-Friendly',
    bio: 'Apaixonada por gatos e atendimento compassivo na terceira idade pet, garantindo uma rotina sem dor e cheia de carinho aos felinos idosos.',
    avatarColor: 'from-[#00B1B2] to-[#0D9488]',
    initials: 'JP',
  },
  {
    id: 'dr-lucas',
    name: 'Dr. Lucas Fontoura',
    role: 'Anestesiologista & Terapia Intensiva',
    crmv: 'CRMV-RS 18.093',
    specialty: 'Anestesia Inalatória, Monitoramento Multiparamétrico e Dor',
    bio: 'Garante que cada procedimento cirúrgico ocorra com estabilidade hemodinâmica máxima e protocolo analgésico de padrão hospitalar.',
    avatarColor: 'from-[#0F766E] to-[#115E59]',
    initials: 'LF',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'dep-1',
    author: 'Carolina Ramos',
    rating: 5,
    content:
      'Excelente atendimento na Animal Care! O Thor fez todos os exames de rotina e ultrassom com uma calma impressionante. A equipe é super atenciosa, explicou cada detalhe dos resultados e a estrutura na Medianeira é impecável. Recomendo de olhos fechados!',
    date: 'Setembro 2026',
    initials: 'CR',
  },
  {
    id: 'dep-2',
    author: 'Matheus Becker',
    rating: 5,
    content:
      'A atenção com a geriatria felina é fora de série. Minha gatinha idosa foi tratada com um carinho e delicadeza que nunca vi em outra clínica de Santa Maria. Eles realmente entendem o comportamento e as necessidades específicas dos gatos mais velhos.',
    date: 'Agosto 2026',
    initials: 'MB',
  },
  {
    id: 'dep-3',
    author: 'Fernanda Oliveira',
    rating: 5,
    content:
      'Levamos a Pipoca para castração e o acolhimento antes e depois da cirurgia foi maravilhoso. A cicatrização foi perfeita e recebemos mensagens com orientações de recuperação no mesmo dia. Dá para sentir o amor verdadeiro que eles têm pelos animais!',
    date: 'Julho 2026',
    initials: 'FO',
  },
  {
    id: 'dep-4',
    author: 'Rodrigo Vargas',
    rating: 5,
    content:
      'A clínica é moderna, limpa e muito bem localizada na Av. Medianeira. O agendamento pelo WhatsApp foi super rápido e pontual. Dá uma segurança enorme saber que nossos pets estão em mãos tão capacitadas!',
    date: 'Junho 2026',
    initials: 'RV',
  },
];
