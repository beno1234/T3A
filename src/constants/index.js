import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discordBlack,
  ecl,
  facebook,
  fiber,
  whatsapp,
  file02,
  linha,
  homeSmile,
  instagram,
  mouratta,
  notification2,
  notification3,
  notification4,
  agenda,
  oswaldo,
  inteligencia,
  plusSquare,
  computador,
  rafael,
  customization,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  seguranca,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  lameds,
  life,
  finance,
  ensino,
  energy,
  superFlow,
  relatorio,
} from "../assets";
import { links } from "../config";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Source Code",
    url: links.sourceCode,
    onlyMobile: true,
    external: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [
  ecl,
  rafael,
  fiber,
  oswaldo,
  mouratta,
  lameds,
  life,
  finance,
  ensino,
  energy,
  superFlow,
];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "A nossa Tecnologia transforma o seu WhatsApp em uma máquina de vendas automática que qualifica leads, agenda reuniões e fecha negócios 24 horas por dia. Você foca na gestão estratégica e ganha tempo";

export const collabContent = [
  {
    id: "0",
    title: "Secretária Humanizada",
  },
  {
    id: "1",
    title: "Atendente SDR",
  },
  {
    id: "2",
    title: "Vendedora / Closer",
  },
  {
    id: "3",
    title: "Customização Completa",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "WhatsApp",
    icon: whatsapp,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Agenda",
    icon: agenda,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "relatorio",
    icon: relatorio,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "seguranca",
    icon: seguranca,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "inteligencia",
    icon: inteligencia,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "computador",
    icon: computador,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "linha",
    icon: linha,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "customization",
    icon: customization,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
    premium: false,
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
    premium: true,
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
    premium: false,
  },
];

export const benefits = [
  {
    id: "0",
    title: "Humanizada.",
    text: "A Trinity responde como um profissional humano, com empatia e intuitividade, tornando a experiência do cliente incrível.",
    backgroundUrl: "/src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Gerencia multitarefas.",
    text: "No seu WhatsApp Business, a IA estará pronta para gerar performance, e responder centenas de clientes ao mesmo tempo.",
    backgroundUrl: "/src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Escalável.",
    text: "Melhor que o seu melhor atendente humano, proporciona escalabilidade no atendimento e vendas.",
    backgroundUrl: "/src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
