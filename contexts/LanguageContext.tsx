"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "pt" | "en" | "fr"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  pt: {
    // Navigation
    home: "Home",
    about: "Sobre",
    media: "Media",
    schedule: "Programa",
    contact: "Contato",

    // Home page
    celebration: "Uma celebração da cinematografia africana",
    location: "Praia, Cabo Verde",
    date: "16-19 Outubro 2025",
    whatIsKaff: "O que é o KAFF – Kafuka African Film Festival",
    description:
      "Kafuka African Film Festival é projetado para mostrar a rica diversidade e talento de cineastas em todo o continente e sua diáspora. Com o cenário único e vibrante de Cabo Verde como pano de fundo, este festival visa fornecer uma plataforma para cineastas emergentes e estabelecidos compartilharem suas histórias, conectarem-se com o público e promoverem a colaboração além de ser um elemento crucial para o desenvolvimento de um ecossistema cinematográfico em Cabo Verde.",
    followUs: "Siga-nos nas redes sociais",
    contactUs: "Contacte-nos:",
    submissions: "Submissões:",
    director: "Realizador",
    minutes: "minutos",
    screeningInfo: "Informações de Exibição",
    synopsis: "Sinopse",
    allFilms: "Todos os Filmes",
    festivalDates: "16-19 Outubro 2025",
    showing: "Mostrando",
    of: "de",
    films: "filmes",
    noFilmsInCategory: "Nenhum filme nesta categoria",
    programAnnouncementSoon: "A programação completa será anunciada em breve. Fique atento!",
    festivalSchedule: "Programa do Festival",
    getTicket: "Obter Entrada",
    register: "Registro",
    freeEntry: "Acesso Livre",
    legend: "Legenda",
    exploreByCategory: "Explore os filmes por categoria",
    comingSoon2025: "Coming Soon 2025",
    scheduleDescription: "A programação completa do festival será divulgada em breve.",
    addToCalendar: "Adicionar ao Calendário",
    noEventsAtVenue: "Nenhum evento neste local",

    // About page
    aboutFestival: "Sobre o Festival",
    historyObjectives: "História e Objetivos",
    historyText:
      'O KAFF foi criado por um "djunta mon" (expressão que na língua cabo-verdiana significa juntar as mãos) de cineastas, artistas, produtores unidos por uma inabalável paixão pelo cinema. O seu objetivo é iluminar o poder da narrativa africana, promovendo o intercâmbio cultural e impulsionando a construção de um ecossistema cinematográfico em Cabo Verde. O grande sonho é contribuir de forma decisiva para o crescimento de toda a indústria cinematográfica em África, garantindo que as nossas histórias sejam vistas, celebradas e que ecoem por todo o mundo.',
    projectInfo:
      "Trata-se de um projecto da produtora Korikaxoru Films mas que é totalmente organizado e implementado pelo Kuletivu Nhanha. Contando ainda com a inestimável parcerias técnicas do Lentilhas, Lda. e Ceiba Produções.",
    ourMission: "A nossa missão:",
    mission1: "Curar e exibir filmes africanos de alta qualidade",
    mission1Full:
      "Curar e exibir uma seleção de filmes africanos de alta qualidade que reflitam as diversas culturas e experiências do continente.",
    mission2: "Criar espaços de diálogo significativo",
    mission2Full:
      "Criar um espaço dinâmico para cineastas, profissionais da indústria e público se envolverem em diálogo significativo.",
    mission3: "Apoiar o desenvolvimento do cinema africano",
    mission3Full:
      "Apoiar o desenvolvimento do cinema africano através de oportunidades de networking, workshops e masterclasses.",
    mission4: "Catalisar o crescimento da indústria em Cabo Verde",
    mission4Full:
      "Catalisar o crescimento da indústria cinematográfica emergente de Cabo Verde, estabelecendo o arquipélago como um centro vital para o cinema africano.",
    artisticDirection: "Mensagem da Direção Artística",
    kafukaOrigin:
      'O nome "Kafuka" deriva de um utensílio doméstico tradicional usado em Cabo Verde até os anos 70, uma época em que o acesso à eletricidade era limitado. Este nome simboliza:',
    symbol1: "A iluminação que o cinema traz para nossas vidas.",
    symbol2: "Um farol de esperança para a crescente indústria cinematográfica em Cabo Verde.",
    symbol3:
      "Uma referência à resiliência e engenhosidade do povo cabo-verdiano em particular e o povo africano em geral.",
    symbol4: "O valor simbólico da luz em tempos de escuridão.",
    theTeam: "A Equipa",
    seeMore: "Ver Mais",
    close: "Fechar",

    // Team roles
    artisticDirectorCurator: "Directora Artística e Curadora",
    programmingDirectorCurator: "Directora de Programação e Curadora",
    productionDirectorPR: "Directora de Produção e Relações Públicas",
    festivalCoordinationDirector: "Directora de Coordenação do Festival",
    technicalCommunicationDirector: "Director Técnico e de Comunicação",
    designImageDirector: "Directora de Design e Imagem",
    honoraryDirector: "Director Honorário",
    productionCoordinator: "Coordenador de Produção",

    // Media page
    mediaTitle: "Media",
    comingSoon: "Coming Soon",
    mediaDescription: "Em breve disponibilizaremos uma galeria com fotos e vídeos do festival.",

    // Contact page
    contactTitle: "Contato",
    email: "Email",
    filmSubmissions: "Submissões de Filmes",
    socialMedia: "Redes Sociais",

    // Admin
    adminPanel: "KAFUKA - Painel Administrativo",
    adminLogin: "Admin Login",
    password: "Senha",
    login: "Entrar",
    logout: "Sair",
    pageManagement: "Gestão de Páginas",
    visible: "Visível",
    hidden: "Oculta",
    editContent: "Editar Conteúdo",
    hide: "Ocultar",
    publish: "Publicar",
    invalidCredentials: "Credenciais inválidas",
    loggingIn: "Entrando...",
  },

  en: {
    // Navigation
    home: "Home",
    about: "About",
    media: "Media",
    schedule: "Program",
    contact: "Contact",

    // Home page
    celebration: "A celebration of African cinematography",
    location: "Praia, Cape Verde",
    date: "October 16-19, 2025",
    whatIsKaff: "What is KAFF – Kafuka African Film Festival",
    description:
      "Kafuka African Film Festival is designed to showcase the rich diversity and talent of filmmakers across the continent and its diaspora. With Cape Verde's unique and vibrant setting as a backdrop, this festival aims to provide a platform for emerging and established filmmakers to share their stories, connect with audiences, and promote collaboration while being a crucial element for developing a cinematographic ecosystem in Cape Verde.",
    followUs: "Follow us on social media",
    contactUs: "Contact us:",
    submissions: "Submissions:",
    director: "Director",
    minutes: "minutes",
    screeningInfo: "Screening Information",
    synopsis: "Synopsis",
    allFilms: "All Films",
    festivalDates: "October 16-19, 2025",
    showing: "Showing",
    of: "of",
    films: "films",
    noFilmsInCategory: "No films in this category",
    programAnnouncementSoon: "The complete program will be announced soon. Stay tuned!",
    festivalSchedule: "Festival Schedule",
    getTicket: "Get Ticket",
    register: "Register",
    freeEntry: "Free Access",
    legend: "Legend",
    exploreByCategory: "Explore films by category",
    comingSoon2025: "Coming Soon 2025",
    scheduleDescription: "The complete festival program will be announced soon.",
    addToCalendar: "Add to Calendar",
    noEventsAtVenue: "No events at this venue",

    // About page
    aboutFestival: "About the Festival",
    historyObjectives: "History and Goals",
    historyText:
      'KAFF was created by a "djunta mon" (an expression in Cape Verdean language meaning joining hands) of filmmakers, artists, producers united by an unwavering passion for cinema. Its objective is to illuminate the power of African narrative, promoting cultural exchange and boosting the construction of a cinematographic ecosystem in Cape Verde. The great dream is to contribute decisively to the growth of the entire film industry in Africa, ensuring that our stories are seen, celebrated and echo throughout the world.',
    projectInfo:
      "This is a project by Korikaxoru Films but is fully organized and implemented by Kuletivu Nhanha. Also counting on the invaluable technical partnerships of Lentilhas, Lda. and Ceiba Produções.",
    ourMission: "Our mission:",
    mission1: "Curate and exhibit high-quality African films",
    mission1Full:
      "Curate and exhibit a selection of high-quality African films that reflect the diverse cultures and experiences of the continent.",
    mission2: "Create spaces for meaningful dialogue",
    mission2Full:
      "Create a dynamic space for filmmakers, industry professionals and audiences to engage in meaningful dialogue.",
    mission3: "Support African cinema development",
    mission3Full:
      "Support the development of African cinema through networking opportunities, workshops and masterclasses.",
    mission4: "Catalyze Cape Verde's film industry growth",
    mission4Full:
      "Catalyze the growth of Cape Verde's emerging film industry, establishing the archipelago as a vital center for African cinema.",
    artisticDirection: "Message from Artistic Direction",
    kafukaOrigin:
      'The name "Kafuka" derives from a traditional household utensil used in Cape Verde until the 1970s, a time when access to electricity was limited. This name symbolizes:',
    symbol1: "The illumination that cinema brings to our lives.",
    symbol2: "A beacon of hope for Cape Verde's growing film industry.",
    symbol3:
      "A reference to the resilience and ingenuity of the Cape Verdean people in particular and the African people in general.",
    symbol4: "The symbolic value of light in times of darkness.",
    theTeam: "The Team",
    seeMore: "See More",
    close: "Close",

    // Team roles
    artisticDirectorCurator: "Artistic Director and Curator",
    programmingDirectorCurator: "Programming Director and Curator",
    productionDirectorPR: "Production Director and Public Relations",
    festivalCoordinationDirector: "Festival Coordination Director",
    technicalCommunicationDirector: "Technical and Communication Director",
    designImageDirector: "Design and Image Director",
    honoraryDirector: "Honorary Director",
    productionCoordinator: "Production Coordinator",

    // Media page
    mediaTitle: "Media",
    comingSoon: "Coming Soon",
    mediaDescription: "We will soon provide a gallery with photos and videos from the festival.",

    // Contact page
    contactTitle: "Contact",
    email: "Email",
    filmSubmissions: "Film Submissions",
    socialMedia: "Social Media",

    // Admin
    adminPanel: "KAFUKA - Administrative Panel",
    adminLogin: "Admin Login",
    password: "Password",
    login: "Login",
    logout: "Logout",
    pageManagement: "Page Management",
    visible: "Visible",
    hidden: "Hidden",
    editContent: "Edit Content",
    hide: "Hide",
    publish: "Publish",
    invalidCredentials: "Invalid credentials",
    loggingIn: "Logging in...",
  },

  fr: {
    // Navigation
    home: "Accueil",
    about: "À propos",
    media: "Média",
    schedule: "Programme",
    contact: "Contact",

    // Home page
    celebration: "Une célébration de la cinématographie africaine",
    location: "Praia, Cap-Vert",
    date: "16-19 Octobre 2025",
    whatIsKaff: "Qu'est-ce que le KAFF – Kafuka African Film Festival",
    description:
      "Le Kafuka African Film Festival est conçu pour présenter la riche diversité et le talent des cinéastes à travers le continent et sa diaspora. Avec le cadre unique et vibrant du Cap-Vert comme toile de fond, ce festival vise à fournir une plateforme aux cinéastes émergents et établis pour partager leurs histoires, se connecter avec le public et promouvoir la collaboration tout en étant un élément crucial pour développer un écosystème cinématographique au Cap-Vert.",
    followUs: "Suivez-nous sur les réseaux sociaux",
    contactUs: "Contactez-nous:",
    submissions: "Soumissions:",
    director: "Réalisateur",
    minutes: "minutes",
    screeningInfo: "Informations de Projection",
    synopsis: "Synopsis",
    allFilms: "Tous les Films",
    festivalDates: "16-19 Octobre 2025",
    showing: "Affichage",
    of: "de",
    films: "films",
    noFilmsInCategory: "Aucun film dans cette catégorie",
    programAnnouncementSoon: "Le programme complet sera annoncé prochainement. Restez à l'écoute!",
    festivalSchedule: "Programme du Festival",
    getTicket: "Obtenir un Billet",
    register: "Inscription",
    freeEntry: "Accès Libre",
    legend: "Légende",
    exploreByCategory: "Explorer les films par catégorie",
    comingSoon2025: "Bientôt Disponible 2025",
    scheduleDescription: "Le programme complet du festival sera annoncé bientôt.",
    addToCalendar: "Ajouter au Calendrier",
    noEventsAtVenue: "Aucun événement dans ce lieu",

    // About page
    aboutFestival: "À propos du Festival",
    historyObjectives: "Histoire et Objectifs",
    historyText:
      "Le KAFF a été créé par un \"djunta mon\" (expression en langue cap-verdienne signifiant joindre les mains) de cinéastes, artistes, producteurs unis par une passion inébranlable pour le cinéma. Son objectif est d'illuminer le pouvoir du récit africain, en promouvant l'échange culturel et en stimulant la construction d'un écosystème cinématographique au Cap-Vert. Le grand rêve est de contribuer de manière décisive à la croissance de toute l'industrie cinématographique en Afrique, en veillant à ce que nos histoires soient vues, célébrées et résonnent dans le monde entier.",
    projectInfo:
      "Il s'agit d'un projet de la société de production Korikaxoru Films mais qui est entièrement organisé et mis en œuvre par Kuletivu Nhanha. Comptant également sur les partenariats techniques inestimables de Lentilhas, Lda. et Ceiba Produções.",
    ourMission: "Notre mission:",
    mission1: "Organiser et présenter des films africains de qualité",
    mission1Full:
      "Organiser et présenter une sélection de films africains de haute qualité qui reflètent les diverses cultures et expériences du continent.",
    mission2: "Créer des espaces de dialogue significatif",
    mission2Full:
      "Créer un espace dynamique pour que les cinéastes, les professionnels de l'industrie et le public s'engagent dans un dialogue significatif.",
    mission3: "Soutenir le développement du cinéma africain",
    mission3Full:
      "Soutenir le développement du cinéma africain grâce à des opportunités de réseautage, des ateliers et des masterclasses.",
    mission4: "Catalyser la croissance de l'industrie au Cap-Vert",
    mission4Full:
      "Catalyser la croissance de l'industrie cinématographique émergente du Cap-Vert, établissant l'archipel comme un centre vital pour le cinéma africain.",
    artisticDirection: "Message de la Direction Artistique",
    kafukaOrigin:
      "Le nom \"Kafuka\" dérive d'un ustensile domestique traditionnel utilisé au Cap-Vert jusqu'aux années 70, une époque où l'accès à l'électricité était limité. Ce nom symbolise:",
    symbol1: "L'illumination que le cinéma apporte à nos vies.",
    symbol2: "Un phare d'espoir pour l'industrie cinématographique croissante du Cap-Vert.",
    symbol3:
      "Une référence à la résilience et à l'ingéniosité du peuple cap-verdien en particulier et du peuple africain en général.",
    symbol4: "La valeur symbolique de la lumière dans les moments d'obscurité.",
    theTeam: "L'Équipe",
    seeMore: "Voir Plus",
    close: "Fermer",

    // Team roles
    artisticDirectorCurator: "Directrice Artistique et Curatrice",
    programmingDirectorCurator: "Directrice de Programmation et Curatrice",
    productionDirectorPR: "Directrice de Production et Relations Publiques",
    festivalCoordinationDirector: "Directrice de Coordination du Festival",
    technicalCommunicationDirector: "Directeur Technique et de Communication",
    designImageDirector: "Directrice de Design et Image",
    honoraryDirector: "Directeur Honoraire",
    productionCoordinator: "Coordinateur de Production",

    // Media page
    mediaTitle: "Média",
    comingSoon: "Bientôt Disponible",
    mediaDescription: "Nous fournirons bientôt une galerie avec des photos et vidéos du festival.",

    // Contact page
    contactTitle: "Contact",
    email: "Email",
    filmSubmissions: "Soumissions de Films",
    socialMedia: "Réseaux Sociaux",

    // Admin
    adminPanel: "KAFUKA - Panneau Administratif",
    adminLogin: "Connexion Admin",
    password: "Mot de passe",
    login: "Se connecter",
    logout: "Déconnexion",
    pageManagement: "Gestion des Pages",
    visible: "Visible",
    hidden: "Caché",
    editContent: "Modifier le Contenu",
    hide: "Cacher",
    publish: "Publier",
    invalidCredentials: "Identifiants invalides",
    loggingIn: "Connexion...",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("kafuka-language") as Language
    if (savedLanguage && ["pt", "en", "fr"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("kafuka-language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
