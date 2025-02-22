import { Favorite } from '../domain/models/favorite';
import { Menu, Place } from '../domain/models/place';
import { Review } from '../domain/models/review';

export const placesMock: Place[] = [
  {
    id: 'c2e8f0ef-4cc9-4a4f-b7b1-1ef2bb5cd956',
    name: 'Mercado Brasco - Bom Fim',
    imageUrl:
      'https://lh3.googleusercontent.com/p/AF1QipMbhgupk-fNIQu7L-x5GQq1rXoXyDrSjnuem7_e=s680-w680-h510',
    description:
      'Localizado no charmoso bairro do Bom Fim, Brasco é muito mais do que apenas um local para refeições, é um ponto de encontro para amigos, famílias e colegas de trabalho. \n Desde a sua inauguração em 2020, Brasco tem sido um espaço querido pelos frequentadores, que o consideram quase como uma segunda casa. E não é para menos, pois Brasco oferece uma experiência completa, com uma variedade de ambientes para desfrutar. \nA diversidade gastronômica é um dos pontos altos do Brasco, que abriga diversos estabelecimentos em um só lugar: mercado, café, sorveteria, cantinho saudável, burritos e padaria. \n Além disso, a estrutura ótima do espaço superior proporciona um ambiente ideal para trabalhar ou estudar, garantindo conforto e tranquilidade aos clientes.',
    address: 'Rua Fernandes Vieira, 286 - Bom Fim',
    city: 'Porto Alegre',
    country: 'Brazil',
    latitude: -30.0319164,
    longitude: -51.2107576,
    slug: 'mercado-brasco-bom-fim',
    phone: '',
    category: ['coffee', 'restaurant', 'market'],
    rating: 4.5,
    created_at: '2024-05-21T12:54:57.820588Z',
  },
  {
    id: 'dc9ce62f-4e9d-45e3-ab9f-d72ecfe2129b',
    name: 'Mercado Brasco - Padre Chagas',
    imageUrl: 'https://onnerevista.com.br/images/news/3781_2.jpg',
    description:
      'O Mercado Brasco é um espaço moderno e aconchegante que oferece uma experiência gastronômica diversificada e de alta qualidade. Com dois andares, o local é ideal para diversas ocasiões, seja um café da manhã tranquilo, um happy hour ou um encontro casual. No andar de cima, você encontra mesinhas perfeitas para relaxar, enquanto o andar de baixo abriga o balcão de atendimento, prateleiras com itens do mercado e mesas para sentar.\n\nO cardápio autoral é variado, com opções saudáveis como iogurte com sementes e granola, ovos mexidos, e lanches sem glúten. Além disso, todos os cafés podem ser preparados com leite vegetal sem custo adicional, uma ótima notícia para veganos e intolerantes à lactose. O café, de excelente qualidade, é feito com grãos do William and Sons, e as opções de sanduíches, como o de cogumelos, são imperdíveis.\n\nO espaço é pet friendly, possui um mini market com produtos diferenciados, incluindo vinhos que podem ser degustados no local e flores em diversas apresentações. O ambiente acolhedor é complementado por um atendimento atencioso e opções para todas as horas do dia, incluindo pizzas da Brizza e o famoso pão de queijo da Williams and Sons.',
    address: 'R. Padre Chagas, 300 - Moinhos de Vento',
    city: 'Porto Alegre',
    country: 'Brazil',
    latitude: -30.0246204,
    longitude: -51.2056722,
    slug: 'mercado-brasco-padre-chagas',
    phone: '',
    rating: 4.5,
    category: ['restaurant', 'coffee', 'market', 'bakery'],
    created_at: '2024-05-28T08:55:06.93938Z',
  },
  {
    id: '979e99d8-230d-4e84-9886-966b8a57ce89',
    name: 'SO Coffee Roasters - Torrefação, Café \u0026 Lab',
    imageUrl:
      'https://images.squarespace-cdn.com/content/v1/62263a3331d71e1ef6efb76b/c3eb19c0-0be1-48b7-a4c4-e32a264a9ffb/IMG_1474.JPG?format=2500w%202500w',
    description:
      'Localizado no coração do Porto, este café destaca-se pela combinação perfeita entre sabor e hospitalidade. Com uma seleção de cafés excepcionais, acompanhados da tradicional nata, o estabelecimento oferece uma experiência gastronômica que agrada aos paladares mais exigentes. O ambiente é lindo e super acolhedor, proporcionando um espaço convidativo para relaxar e desfrutar de boas conversas.\n\nO atendimento é uma das marcas registradas do café. Os funcionários são extremamente simpáticos e profundos conhecedores do assunto, garantindo um serviço atencioso e personalizado. Não é surpresa que muitos clientes fiéis considerem este café um dos melhores da cidade, um lugar que sempre vale a pena revisitar.',
    address: 'Rua da Restauração, 455',
    city: 'Porto',
    country: 'Portugal',
    latitude: 41.1460503,
    longitude: -8.6206796,
    slug: 'so-coffee-roasters-torrefacao',
    rating: 4.5,
    phone: '',
    category: ['coffee'],
    created_at: '2024-05-30T12:04:45.017605Z',
  },
  {
    id: '1ae66668-4477-495b-93ba-c835607897be',
    name: 'SO Coffee Roasters - Sá de Noronha',
    imageUrl:
      'https://images.squarespace-cdn.com/content/v1/62263a3331d71e1ef6efb76b/9d6c4153-dc52-4136-9ab5-aacec634da6d/360b5d5c-62aa-47f6-b0f7-6286c1823dc8.JPG',
    description:
      'Escondido atrás de uma discreta portinha, encontra-se um charmoso café que é um verdadeiro refúgio para os amantes do café especial. O ambiente é acolhedor e exala uma vibe hipster, proporcionando uma experiência única e descontraída. A decoração bonita e aconchegante convida os clientes a relaxar e aproveitar um momento de tranquilidade, longe da agitação do dia a dia.\n\nEste pequeno tesouro urbano é conhecido pela excelência dos seus cafés, como o flat white, elogiado por sua perfeição sem defeitos. Embora a oferta de comidas seja limitada, a qualidade das bebidas compensa qualquer falta. Frequentadores regulares e novos visitantes são unânimes: este é um lugar que vale a pena visitar e revisitar, recomendando-o especialmente aos apreciadores de cafés especiais.',
    address: 'R. de Sá de Noronha, 119',
    city: 'Porto',
    country: 'Portugal',
    latitude: 41.1484471,
    longitude: -8.6150923,
    slug: 'so-coffee-roasters-sa-noronha',
    rating: 4.5,
    phone: '',
    category: ['coffee'],
    created_at: '2024-05-30T12:13:11.181053Z',
  },
  {
    id: '057e9cd9-883a-4af7-aad8-fd77a2d0043a',
    name: 'The Coffee',
    imageUrl:
      'https://lh3.googleusercontent.com/p/AF1QipMU9P7IWoeNMkcQ7R83JHnX3NvUVxB547Qx_LOb=s680-w680-h510',
    description:
      'Localizada em uma charmosa esquina da cidade, a filial do The Coffee é uma verdadeira joia para os amantes de café que buscam conveniência e qualidade. Com uma proposta take-away bem definida, o espaço encanta pela sua atmosfera acolhedora e minimalista. \n Os clientes têm à disposição uma variedade de opções, desde os clássicos cafés até os refrescantes chocolates com menta gelado, proporcionando uma experiência única a cada visita. \n O conceito inovador de autoatendimento, onde os pedidos são feitos através de tablets, garante praticidade e agilidade no atendimento. Além disso, a opção de levar os produtos para casa ou desfrutá-los no ambiente aconchegante e bem organizado agrada a todos os gostos.',
    address: 'Rua Fernandes Vieira, 656 - Bom Fim',
    city: 'Porto Alegre',
    country: 'Brazil',
    latitude: -30.0352498,
    longitude: -51.2109251,
    rating: 4.5,
    slug: 'the-coffee-poa',
    phone: '',
    category: ['coffee'],
    created_at: '2024-05-19T22:12:59.210402Z',
  },
  {
    id: 'd7dfaad4-4942-4b9b-b9d4-86a440a875a7',
    name: 'Café Porto Farrô',
    imageUrl:
      'https://lh3.googleusercontent.com/p/AF1QipPbACYI3oBIuHf3gdv8fhH9taAnra9Bd9S6jew=s1360-w1360-h1020',
    description: '',
    address: 'Av. Venâncio Aires, 1031',
    city: 'Porto Alegre',
    country: 'Brazil',
    latitude: -30.0379052,
    longitude: -51.2107758,
    slug: 'cafe-porto-farro',
    phone: '',
    category: ['coffee'],
    rating: 4.5,
    created_at: '2024-05-21T12:54:57.820588Z',
  },
  {
    id: 'b10028fc-5809-42c9-aa94-07dc42470c2a',
    name: 'Síndico Torra e Café',
    imageUrl:
      'https://lh3.googleusercontent.com/p/AF1QipPj47YnWPE7PzyRkJASw1NA0bQBYNCE3eRN58ng=s1360-w1360-h1020',
    description: '',
    address: 'R. dos Andradas, 419',
    city: 'Porto Alegre',
    country: 'Brazil',
    latitude: -30.0326438,
    longitude: -51.2374101,
    slug: 'sindico-torra-cafe',
    phone: '',
    category: ['coffee'],
    rating: 4.5,
    created_at: '2024-05-21T12:54:57.820588Z',
  },
  {
    id: 'c599ef67-b42b-4b88-a17e-4d27cf307b73',
    name: 'Café República Cup',
    imageUrl:
      'https://lh3.googleusercontent.com/p/AF1QipPcxE3kiRVqR1nS-ShBqVCC7UH0UHjuUPG7d6u9=s1360-w1360-h1020',
    description: '',
    address: 'R. da República, 358',
    city: 'Porto Alegre',
    country: 'Brazil',
    latitude: -30.0385201,
    longitude: -51.2231726,
    slug: 'cafe-republica-cup',
    phone: '',
    category: ['coffee'],
    rating: 4.5,
    created_at: '2024-05-21T12:54:57.820588Z',
  },
  {
    id: 'ac4d6338-8cc6-4b22-a02b-f6639c556ada',
    name: 'Casa de Pelotas',
    imageUrl:
      'https://lh3.googleusercontent.com/p/AF1QipNjIZQRNfz5khgCcZXRpXEt-NYXSp6nYDHP0vAb=s1360-w1360-h1020',
    description: '',
    address: 'R. da República, 421',
    city: 'Porto Alegre',
    country: 'Brazil',
    latitude: -30.0387123,
    longitude: -51.2238261,
    slug: 'casa-pelotas',
    phone: '',
    category: ['coffee'],
    rating: 4.5,
    created_at: '2024-05-21T12:54:57.820588Z',
  },
  {
    id: '07a53bd6-8640-4d48-b5b8-015c6361eeeb',
    name: 'Macun Livraria e Café',
    imageUrl:
      'https://lh3.googleusercontent.com/p/AF1QipMWdFrsmf8eBShqiDg_5A0E0oarQ3Ffhv0nN1DK=s1360-w1360-h1020',
    description: '',
    address: 'R. Octávio Corrêa, 67',
    city: 'Porto Alegre',
    country: 'Brazil',
    latitude: -30.0396478,
    longitude: -51.2186717,
    slug: 'macun-livraria-cafe',
    phone: '',
    category: ['coffee'],
    rating: 4.5,
    created_at: '2024-05-21T12:54:57.820588Z',
  },
  {
    id: 'd1a9dbaf-ef8e-4e88-a0f6-f0708ad0e831',
    name: 'Yami Café',
    imageUrl:
      'https://lh3.googleusercontent.com/p/AF1QipNdp73QnDRwMRW0YWl_Ae6JrfkhJxEj0xYuRrjG=s1360-w1360-h1020',
    description: '',
    address: 'R. Tenente Coronel Fabricio Pillar, 198',
    city: 'Porto Alegre',
    country: 'Brazil',
    latitude: -30.0259032,
    longitude: -51.1954156,
    slug: 'yami-cafe',
    phone: '',
    category: ['coffee'],
    rating: 4.5,
    created_at: '2024-05-21T12:54:57.820588Z',
  },
  {
    id: '0b0ded95-9b1b-4e1a-803c-1b3b90152241',
    name: 'William & Sons Coffee Co. - Torrefação',
    imageUrl:
      'https://lh3.googleusercontent.com/p/AF1QipO-KedvzzG1yjJZ3U2ioOYsbxYxIQMRfbIvdQ4S=s1360-w1360-h1020',
    description: '',
    address: 'R. Pedro Ivo, 492',
    city: 'Porto Alegre',
    country: 'Brazil',
    latitude: -30.0259032,
    longitude: -51.1954156,
    slug: 'william-sons-coffee',
    phone: '',
    category: ['coffee'],
    rating: 4.5,
    created_at: '2024-05-21T12:54:57.820588Z',
  },
  {
    id: '0b0ded95-9b1b-4e1a-803c-1b3b90152242',
    name: 'William & Sons Coffee Co. - Garagem',
    imageUrl:
      'https://lh3.googleusercontent.com/p/AF1QipM8Z8SAP6Xfo28VJh7MIEYmhMan4X695qnzASo-=s1360-w1360-h1020',
    description: '',
    address: 'R. Dinarte Ribeiro, 214',
    city: 'Porto Alegre',
    country: 'Brazil',
    latitude: -30.023669,
    longitude: -51.2022351,
    slug: 'william-sons-coffee-garagem',
    phone: '',
    category: ['coffee'],
    rating: 4.5,
    created_at: '2024-05-21T12:54:57.820588Z',
  },
  {
    id: '9ac6805c-932e-4b2f-ba6c-3cc89f28e115',
    name: 'Startt & Brothers Café',
    imageUrl:
      'https://lh3.googleusercontent.com/p/AF1QipOkbLpYUunksGdzFYEPc1OHKwXZmeZsY9LfUv6V=s1360-w1360-h1020',
    description: '',
    address: 'R. Eudoro Berlink, 520',
    city: 'Porto Alegre',
    country: 'Brazil',
    latitude: -30.0242863,
    longitude: -51.1924936,
    slug: 'startt-brothers-cafe',
    phone: '',
    category: ['coffee'],
    rating: 4.5,
    created_at: '2024-05-21T12:54:57.820588Z',
  },
  {
    id: '93319b81-8f3e-4702-8513-a8c467f1e3d5',
    name: 'Ginkgo',
    imageUrl:
      'https://lh3.googleusercontent.com/p/AF1QipMn7U3adzGDphBsWvoUWvY-l8XpyBUE9CTEWmT6=s1360-w1360-h1020',
    description: '',
    address: 'R. Cel. Bordini, 332',
    city: 'Porto Alegre',
    country: 'Brazil',
    latitude: -30.0209428,
    longitude: -51.1969999,
    slug: 'ginkgo',
    phone: '',
    category: ['coffee'],
    rating: 4.5,
    created_at: '2024-05-21T12:54:57.820588Z',
  },
];

export const favoritesMock: Favorite[] = [
  {
    id: 'c2e8f0ef-4cc9-4a4f-b7b1-1ef2bb5cd956',
    name: 'Mercado Brasco - Bom Fim',
    imageUrl:
      'https://lh3.googleusercontent.com/p/AF1QipMbhgupk-fNIQu7L-x5GQq1rXoXyDrSjnuem7_e=s680-w680-h510',
    address: 'Rua Fernandes Vieira, 286 - Bom Fim',
    city: 'Porto Alegre',
    country: 'Brazil',
    slug: 'mercado-brasco-bom-fim',
    rating: 4.5,
  },
  {
    id: 'dc9ce62f-4e9d-45e3-ab9f-d72ecfe2129b',
    name: 'Mercado Brasco - Padre Chagas',
    imageUrl: 'https://onnerevista.com.br/images/news/3781_2.jpg',
    address: 'R. Padre Chagas, 300 - Moinhos de Vento',
    city: 'Porto Alegre',
    country: 'Brazil',
    slug: 'mercado-brasco-padre-chagas',
    rating: 4.5,
  },
];

export const menuMock: Menu[] = [
  {
    id: 'b0855a01-765c-4803-8961-5ad9e85f13df',
    item: 'Espresso',
    price: 10,
    menu_type: 'drink',
    place_id: 'c2e8f0ef-4cc9-4a4f-b7b1-1ef2bb5cd956',
  },
  {
    id: '20c2e3d7-bdad-4998-991a-9ac414e499af',
    item: 'Espresso',
    price: 12,
    menu_type: 'drink',
    place_id: '057e9cd9-883a-4af7-aad8-fd77a2d0043a',
  },
  {
    id: 'f5198bd5-496f-4828-b962-eb3741780c7e',
    item: 'Cappuccino',
    price: 20,
    menu_type: 'drink',
    place_id: 'c2e8f0ef-4cc9-4a4f-b7b1-1ef2bb5cd956',
  },
  {
    id: 'c8bd0e1d-7d41-4360-8fcd-8fbb1c47d756',
    item: 'Espresso',
    price: 12,
    menu_type: 'drink',
    place_id: '057e9cd9-883a-4af7-aad8-fd77a2d0043a',
  },
];

export const reviewsMock: Review[] = [
  {
    id: '1',
    review:
      'Fui apenas uma vez e eu pedi um chocolate quente, mas achei muito forte! Claro isso vai de pessoa para pessoa. Não consegui tomar todo por conta disso. O ambiente é pequeno mas é bem organizado, um lugar muito bonito. O atendimento é ótimo.',
    rating: 4.5,
    created_at: '2024-01-21T09:46:10.477Z',
    user: {
      id: '',
      firstName: 'John',
      lastName: 'Doe',
      email: 'email@example.com',
      image: '',
      is_admin: false,
      created_at: '2024-02-13T15:56:56.376Z',
    },
    place: {
      id: 'c2e8f0ef-4cc9-4a4f-b7b1-1ef2bb5cd956',
      name: 'Mercado Brasco - Bom Fim',
      slug: 'mercado-brasco-bom-fim',
      rating: 4.5,
    },
  },
  {
    id: '2',
    review:
      'Fui no lugar e pedi um café e um pão de queijo. O café estava muito bom, mas o pão de queijo estava um pouco frio. O ambiente é muito bonito e aconchegante. O atendimento é muito bom.',
    rating: 4.5,
    created_at: '2024-01-21T09:46:10.477Z',
    user: {
      id: '',
      firstName: 'Yasmin',
      lastName: 'Doe',
      email: 'email@example.com',
      image: '',
      is_admin: false,
      created_at: '2024-02-13T15:56:56.376Z',
    },
    place: {
      id: 'c2e8f0ef-4cc9-4a4f-b7b1-1ef2bb5cd956',
      name: 'Mercado Brasco - Bom Fim',
      slug: 'mercado-brasco-bom-fim',
      rating: 4.5,
    },
  },
];

export const placeScheduleMock = [
  {
    week_day: 'Segunda-feira',
    open_time: '08:00',
    close_time: '18:00',
  },
  {
    week_day: 'Terça-feira',
    open_time: '08:00',
    close_time: '18:00',
  },
  {
    week_day: 'Quarta-feira',
    open_time: '08:00',
    close_time: '18:00',
  },
  {
    week_day: 'Quinta-feira',
    open_time: '08:00',
    close_time: '18:00',
  },
  {
    week_day: 'Sexta-feira',
    open_time: '08:00',
    close_time: '18:00',
  },
  {
    week_day: 'Sábado',
    open_time: '08:00',
    close_time: '18:00',
  },
  {
    week_day: 'Domingo',
    open_time: '08:00',
    close_time: '18:00',
  },
];

export const placeScheduleMock1 = [
  {
    week_day: 'monday',
    open_time: '08:00',
    close_time: '18:00',
  },
  {
    week_day: 'tuesday',
    open_time: '08:00',
    close_time: '18:00',
  },
  {
    week_day: 'wednesday',
    open_time: '08:00',
    close_time: '18:00',
  },
  {
    week_day: 'thursday',
    open_time: '08:00',
    close_time: '18:00',
  },
  {
    week_day: 'friday',
    open_time: '08:00',
    close_time: '18:00',
  },
  {
    week_day: 'saturday',
    open_time: '08:00',
    close_time: '18:00',
  },
  {
    week_day: 'sunday',
    open_time: '08:00',
    close_time: '18:00',
  },
];
