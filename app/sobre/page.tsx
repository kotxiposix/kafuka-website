"use client"
import { useState } from "react"
import { Poppins } from "next/font/google"
import Image from "next/image"
import { Film, Users, Lightbulb, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import TeamModal from "@/components/TeamModal"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
  fullBio?: string
  fullBioEN?: string
  fullBioFR?: string
}

export default function Sobre() {
  const { t, language } = useLanguage()
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const teamMembers: TeamMember[] = [
    {
      name: "Natasha Craveiro",
      role: t("artisticDirectorCurator"),
      image: "/team/natasha-optimized.jpg",
      bio: "Socióloga, realizadora e produtora cabo-verdiana",
      fullBio:
        'Natasha Craveiro é uma socióloga, realizadora e produtora cabo-verdiana. Cofundadora da casa de produção de cinema independente Korikaxoru Films em 2017, Natasha é reconhecida pela produção de documentários como "Dona Mónica", e as longas-metragens aclamadas "The Master\'s Plan" e "OMI NOBU", este último premiado com o Étalon d\'or no FESPACO 2023. Como realizadora, o seu documentário "Mama" (2022) foi selecionado para vários festivais internacionais, e a sua docuficção "Pirinha" (2024), que estreou em maio 2024, já conta com mais de 30 seleções e vários prémios, incluindo o de Melhor Longa-Metragem de Direitos Humanos no Ecocine Festival - Brasil, o Grand Prix de la Critique no Stlouis\'Docs - Senegal e o prémio REEL IMPACT do Pulling Focus Film Festival - EUA. Além da sua obra, Natasha destaca-se na curadoria de festivais como o Festival Brasileiro Adélia Sampaio, o Festival Cinémás d\'Afrique – Lausanne e o Festival de Cinema Europeu em Cabo Verde (2024 e 2025). Tem prestado mentoria para projectos de jovens que acedem ao programa Korikaxoru Academy, bem como noutras residências de escrita. É assumidamente feminista negra, mentora do Cineclube Mankara e membro fundador do Kuletivu Nhanha, o primeiro coletivo de mulheres cabo-verdianas no cinema. O seu empenho no desenvolvimento da indústria cinematográfica em Cabo Verde e na capacitação de talentos locais é uma constante no seu percurso profissional. Reconhecida internacionalmente, Natasha participou no Deental@Cannes no Festival de Cannes em 2023 e foi membro da Delegação Africana no IDFA 2023.',
      fullBioEN:
        'Natasha Craveiro is a Cape Verdean sociologist, director and producer. Co-founder of the independent film production house Korikaxoru Films in 2017, Natasha is recognized for producing documentaries such as "Dona Mónica", and the acclaimed feature films "The Master\'s Plan" and "OMI NOBU", the latter awarded the Étalon d\'or at FESPACO 2023. As a director, her documentary "Mama" (2022) was selected for several international festivals, and her docufiction "Pirinha" (2024), which premiered in May 2024, already has over 30 selections and several awards, including Best Human Rights Feature Film at the Ecocine Festival - Brazil, the Grand Prix de la Critique at Stlouis\'Docs - Senegal and the REEL IMPACT award at the Pulling Focus Film Festival - USA. Beyond her work, Natasha stands out in festival curation such as the Brazilian Adélia Sampaio Festival, the Cinémás d\'Afrique Festival – Lausanne and the European Film Festival in Cape Verde (2024 and 2025). She has provided mentorship for young people\'s projects accessing the Korikaxoru Academy program, as well as other writing residencies. She is an outspoken black feminist, mentor of Cineclube Mankara and founding member of Kuletivu Nhanha, the first collective of Cape Verdean women in cinema. Her commitment to developing the film industry in Cape Verde and building local talent capacity is a constant in her professional journey. Internationally recognized, Natasha participated in Deental@Cannes at the Cannes Film Festival in 2023 and was a member of the African Delegation at IDFA 2023.',
      fullBioFR:
        'Natasha Craveiro est une sociologue, réalisatrice et productrice cap-verdienne. Co-fondatrice de la maison de production cinématographique indépendante Korikaxoru Films en 2017, Natasha est reconnue pour la production de documentaires comme "Dona Mónica", et les longs métrages acclamés "The Master\'s Plan" et "OMI NOBU", ce dernier primé avec l\'Étalon d\'or au FESPACO 2023. En tant que réalisatrice, son documentaire "Mama" (2022) a été sélectionné pour plusieurs festivals internationaux, et sa docufiction "Pirinha" (2024), qui a eu sa première en mai 2024, compte déjà plus de 30 sélections et plusieurs prix, dont celui du Meilleur Long Métrage de Droits Humains au Festival Ecocine - Brésil, le Grand Prix de la Critique au Stlouis\'Docs - Sénégal et le prix REEL IMPACT du Pulling Focus Film Festival - États-Unis. Au-delà de son œuvre, Natasha se distingue dans la curation de festivals comme le Festival Brésilien Adélia Sampaio, le Festival Cinémás d\'Afrique – Lausanne et le Festival de Cinéma Européen au Cap-Vert (2024 et 2025). Elle a fourni du mentorat pour des projets de jeunes accédant au programme Korikaxoru Academy, ainsi que dans d\'autres résidences d\'écriture. Elle est ouvertement féministe noire, mentore du Cineclube Mankara et membre fondatrice du Kuletivu Nhanha, le premier collectif de femmes cap-verdiennes au cinéma. Son engagement dans le développement de l\'industrie cinématographique au Cap-Vert et dans la formation de talents locaux est une constante dans son parcours professionnel. Reconnue internationalement, Natasha a participé au Deental@Cannes au Festival de Cannes en 2023 et était membre de la Délégation Africaine à l\'IDFA 2023.',
    },
    {
      name: "Emilia Wojciechowska",
      role: t("programmingDirectorCurator"),
      image: "/team/emilia-optimized.jpg",
      bio: "Produtora, realizadora e organizadora de festivais de cinema",
      fullBio:
        'Emilia Wojciechowska, Polaca residente em Cabo Verde desde 2011, é produtora, realizadora e curadora de festivais. Apaixonada por levar o cinema além das grandes cidades, é a força motriz por trás do projeto "Movies in the Backpack", promovendo engajamento cultural e acessibilidade. Emilia contribuiu para diversos projetos cinematográficos, incluindo o seu papel como assistente de Abderrahmane Sissako em Black Tea e como produtora do premiado Pirinha, de Natasha Craveiro. Em 2022, estreou como realizadora com o curta-metragem Sonho d narrador. Para além das telas, é cofundadora e mentora do Cineclube Mankara, o único cineclube de Cabo Verde, uma das fundadoras do REDE Cinema e Audiovisual PALOP+TL, que promove produções dos países africanos de língua portuguesa, e membro fundador do Kuletivu Nhanha, um coletivo pioneiro de mulheres dedicado a fortalecer vozes femininas no cinema e na narrativa audiovisual. Foi também mentora do Cabo Verde Film Lab em 2020, do São Tomé and Príncipe Lab em 2022 e do curso de verão de cinema na Academia Cesária Évora em 2025.',
      fullBioEN:
        "Emilia Wojciechowska, Polish resident in Cape Verde since 2011, is a producer, director and festival curator. Passionate about bringing cinema beyond big cities, she is the driving force behind the \"Movies in the Backpack\" project, promoting cultural engagement and accessibility. Emilia has contributed to various film projects, including her role as assistant to Abderrahmane Sissako in Black Tea and as producer of the award-winning Pirinha, by Natasha Craveiro. In 2022, she debuted as a director with the short film Sonho d narrador. Beyond the screens, she is co-founder and mentor of Cineclube Mankara, Cape Verde's only film club, one of the founders of REDE Cinema e Audiovisual PALOP+TL, which promotes productions from Portuguese-speaking African countries, and founding member of Kuletivu Nhanha, a pioneering women's collective dedicated to strengthening female voices in cinema and audiovisual narrative. She was also a mentor for the Cape Verde Film Lab in 2020, the São Tomé and Príncipe Lab in 2022 and the summer cinema course at Academia Cesária Évora in 2025.",
      fullBioFR:
        "Emilia Wojciechowska, Polonaise résidente au Cap-Vert depuis 2011, est productrice, réalisatrice et curatrice de festivals. Passionnée par l'idée d'amener le cinéma au-delà des grandes villes, elle est la force motrice derrière le projet \"Movies in the Backpack\", promouvant l'engagement culturel et l'accessibilité. Emilia a contribué à divers projets cinématographiques, notamment son rôle d'assistante d'Abderrahmane Sissako dans Black Tea et comme productrice du primé Pirinha, de Natasha Craveiro. En 2022, elle a fait ses débuts en tant que réalisatrice avec le court métrage Sonho d narrador. Au-delà des écrans, elle est co-fondatrice et mentore du Cineclube Mankara, le seul ciné-club du Cap-Vert, l'une des fondatrices du REDE Cinema e Audiovisual PALOP+TL, qui promeut les productions des pays africains lusophones, et membre fondatrice du Kuletivu Nhanha, un collectif pionnier de femmes dédié au renforcement des voix féminines dans le cinéma et la narration audiovisuelle. Elle a également été mentore du Cape Verde Film Lab en 2020, du São Tomé and Príncipe Lab en 2022 et du cours d'été de cinéma à l'Academia Cesária Évora en 2025.",
    },
    {
      name: "Artemisa Ferreira",
      role: t("productionDirectorPR"),
      image: "/team/artemisa-optimized.jpg",
      bio: "Realizadora, Guionista, Poetisa, Docente Universitária",
      fullBio:
        'Artemisa Ferreira, Realizadora, Guionista, Poetisa, Docente Universitária, ex Diretora Gabinete Comunicação e Imagem da UniCV. Fundadora da produtora Ceibas Producoes audiovisual, com foco no impulsionamento feminino no cinema. Realizou e produziu o documentário "Identidade Repartida" 2013, Realizadora e guionista do filme ficção "oji" prêmio revelação festival cinema Plateau 2015, seleção oficial NAU – Festival de Cinema e Artes de Expressão Ibérica 2016 e Prêmio melhor montagem no festival de cinema Adélia Sampaio 2016 no Brasil. Realizou e produziu da longa metragem documentário "Os 47\'s - depoimentos que ficaram" (em divulgação). Realizou o documentário "Ilidio do Amaral" 2016. Na empresa Artemedia realizou vários spot\'s publicitários, video-clips e alguns programas televisivos como Kriola Magazine. Autora do livro de poesia "Desejo" 2009 e "Gruta abençoada" 2017, e com participação em outras coletâneas poéticas (Cabo Verde e Galiza, Mulheres e seus destinos VI e VII) e com ensaio Erotismo na Literatura Cabo-verdiana no livro Ilhéus de Cabo Verde, com Corsino Tolentino como um dos coordenadores). JÚRI em vários festivais e editais como: Festival de Cinema Negro Adélia Sampaio - Brasil, FESPACO - Burkina Faso, Óia SV e Plateau filme festival ambos em Cabo Verde. Curadoria Cinema Negro Adélia Sampaio e Pavillon Africain - Festival de Cannes. Como Docente para além de orientou é coordenou algumas dezenas de documentários TFC, tem vindo a apostar na adaptação da música e literatura cabo-verdiana para o cinema algumas dos quais já premiados.',
      fullBioEN:
        'Artemisa Ferreira, Director, Screenwriter, Poet, University Professor, former Director of Communication and Image Office at UniCV. Founder of Ceibas Producoes audiovisual production company, with a focus on promoting women in cinema. She directed and produced the documentary "Identidade Repartida" 2013, Director and screenwriter of the fiction film "oji" revelation award at Plateau cinema festival 2015, official selection NAU – Festival de Cinema e Artes de Expressão Ibérica 2016 and Best Editing Award at Adélia Sampaio cinema festival 2016 in Brazil. She directed and produced the feature documentary "Os 47\'s - depoimentos que ficaram" (in release). She directed the documentary "Ilidio do Amaral" 2016. At Artemedia company she directed various advertising spots, video clips and some television programs like Kriola Magazine. Author of poetry books "Desejo" 2009 and "Gruta abençoada" 2017, and participation in other poetry collections (Cape Verde and Galicia, Women and their destinies VI and VII) and with essay Eroticism in Cape Verdean Literature in the book Ilhéus de Cabo Verde, with Corsino Tolentino as one of the coordinators). JURY member in various festivals and calls such as: Adélia Sampaio Black Cinema Festival - Brazil, FESPACO - Burkina Faso, Óia SV and Plateau film festival both in Cape Verde. Curator of Adélia Sampaio Black Cinema and Pavillon Africain - Cannes Film Festival. As a Professor, beyond supervising, she coordinated dozens of TFC documentaries, has been investing in adapting Cape Verdean music and literature to cinema, some of which have already been awarded.',
      fullBioFR:
        'Artemisa Ferreira, Réalisatrice, Scénariste, Poète, Professeure Universitaire, ancienne Directrice du Bureau de Communication et Image de l\'UniCV. Fondatrice de la société de production audiovisuelle Ceibas Producoes, avec un focus sur la promotion des femmes dans le cinéma. Elle a réalisé et produit le documentaire "Identidade Repartida" 2013, Réalisatrice et scénariste du film de fiction "oji" prix révélation du festival de cinéma Plateau 2015, sélection officielle NAU – Festival de Cinema e Artes de Expressão Ibérica 2016 et Prix du meilleur montage au festival de cinéma Adélia Sampaio 2016 au Brésil. Elle a réalisé et produit le long métrage documentaire "Os 47\'s - depoimentos que ficaram" (en diffusion). Elle a réalisé le documentaire "Ilidio do Amaral" 2016. À la société Artemedia, elle a réalisé divers spots publicitaires, clips vidéo et quelques programmes télévisés comme Kriola Magazine. Auteure des livres de poésie "Desejo" 2009 et "Gruta abençoada" 2017, et participation à d\'autres recueils poétiques (Cap-Vert et Galice, Femmes et leurs destins VI et VII) et avec essai Érotisme dans la Littérature Cap-verdienne dans le livre Ilhéus de Cabo Verde, avec Corsino Tolentino comme l\'un des coordinateurs). JURY dans divers festivals et appels tels que : Festival de Cinéma Noir Adélia Sampaio - Brésil, FESPACO - Burkina Faso, Óia SV et Plateau film festival tous deux au Cap-Vert. Curatrice du Cinéma Noir Adélia Sampaio et Pavillon Africain - Festival de Cannes. En tant que Professeure, au-delà de superviser, elle a coordonné des dizaines de documentaires TFC, a investi dans l\'adaptation de la musique et littérature cap-verdienne au cinéma, dont certains ont déjà été primés.',
    },
    {
      name: "Simone Spencer",
      role: t("festivalCoordinationDirector"),
      image: "/team/simone-optimized.jpg",
      bio: "Artista visual cabo-verdiana",
      fullBio:
        "Simone Spencer é uma artista visual cabo-verdiana cujo trabalho explora temas como identidade, memória, vulnerabilidade e a criação de espaços seguros através da arte. Conhecida pelo uso expressivo da cor e pela incorporação de materiais reaproveitados, a sua prática combina pintura, colagem e elementos gráficos. Após estudar Design Arquitetónico e formar-se em Língua e Literatura Chinesa na China, iniciou o seu percurso artístico ao regressar a Cabo Verde, onde apresentou a sua primeira exposição individual em 2021. Foi bolseira do programa Mandela Washington Fellowship em 2024, tendo estudado Liderança em Engajamento Cívico na Louisiana State University e trabalhado como pesquisadora de exposições no Museum of the African Diaspora, em São Francisco. Participou em residências internacionais como a Àsìkò Art School, expôs na mostra L'Art Africaine au Féminin em Paris (2024), e representou Cabo Verde no festival Surajkund Mela, na Índia (2025). Simone é cofundadora da produtora audiovisual Lentilhas Lda e criadora do TAWI Fest, um festival de arte urbana que valoriza a arte pública como ferramenta de transformação social.",
      fullBioEN:
        "Simone Spencer is a Cape Verdean visual artist whose work explores themes such as identity, memory, vulnerability and the creation of safe spaces through art. Known for her expressive use of color and incorporation of repurposed materials, her practice combines painting, collage and graphic elements. After studying Architectural Design and graduating in Chinese Language and Literature in China, she began her artistic journey upon returning to Cape Verde, where she presented her first solo exhibition in 2021. She was a fellow of the Mandela Washington Fellowship program in 2024, having studied Leadership in Civic Engagement at Louisiana State University and worked as an exhibition researcher at the Museum of the African Diaspora in San Francisco. She participated in international residencies such as the Àsìkò Art School, exhibited in the L'Art Africaine au Féminin show in Paris (2024), and represented Cape Verde at the Surajkund Mela festival in India (2025). Simone is co-founder of the audiovisual production company Lentilhas Lda and creator of TAWI Fest, an urban art festival that values public art as a tool for social transformation.",
      fullBioFR:
        "Simone Spencer est une artiste visuelle cap-verdienne dont le travail explore des thèmes tels que l'identité, la mémoire, la vulnérabilité et la création d'espaces sûrs à travers l'art. Connue pour son usage expressif de la couleur et l'incorporation de matériaux réutilisés, sa pratique combine peinture, collage et éléments graphiques. Après avoir étudié le Design Architectural et obtenu son diplôme en Langue et Littérature Chinoises en Chine, elle a commencé son parcours artistique en retournant au Cap-Vert, où elle a présenté sa première exposition individuelle en 2021. Elle a été boursière du programme Mandela Washington Fellowship en 2024, ayant étudié le Leadership en Engagement Civique à la Louisiana State University et travaillé comme chercheuse d'expositions au Museum of the African Diaspora à San Francisco. Elle a participé à des résidences internationales comme l'Àsìkò Art School, exposé dans l'exposition L'Art Africaine au Féminin à Paris (2024), et représenté le Cap-Vert au festival Surajkund Mela en Inde (2025). Simone est co-fondatrice de la société de production audiovisuelle Lentilhas Lda et créatrice du TAWI Fest, un festival d'art urbain qui valorise l'art public comme outil de transformation sociale.",
    },
    {
      name: "Sandro Fonseca",
      role: t("technicalCommunicationDirector"),
      image: "/team/sandro-optimized.jpg",
      bio: "Artista audiovisual e diretor criativo cabo-verdiano",
      fullBio:
        'Sandro Fonseca é um artista audiovisual, diretor criativo e empreendedor cabo-verdiano com mais de uma década de experiência na criação de conteúdos que unem estética, tecnologia e transformação social. É CEO e cofundador da LENTiLHAS Lda e cofundador da CreativeBase by Lentilhas LDA, reconhecida com o prémio de Startup Promessa na 1ª edição do Digital Awards Cabo Verde. Em 2024, também cofundou a MedKey – Sistema Virtual de Saúde, vencedora do Re!nventa Hackathon, que propôs soluções digitais inovadoras para o setor da saúde. À frente da Lentilhas LDA, Sandro lidera uma abordagem inovadora no setor audiovisual, focada na formação de talentos, produção de conteúdos impactantes e desenvolvimento de soluções digitais para o ecossistema criativo. Através da marca pessoal @sandroufonsecaCREATIVE, conduz projetos autorais e institucionais que valorizam narrativas locais e promovem novos modelos de colaboração na indústria criativa. É criador da exposição e podcast "Só Por Hoje", que aborda o processo de recuperação de dependentes químicos através da arte, além de ter uma forte atuação em iniciativas de impacto social como Narcóticos Anónimos Cabo Verde. Também desempenha um papel ativo no fortalecimento da cena cultural cabo-verdiana como membro da organização do Festival Oiá, evento de cinema e criação audiovisual que impulsiona jovens realizadores e promove a troca entre artistas do arquipélago e da diáspora. Na sua trajetória profissional, atuou como fotógrafo oficial do Secretário de Estado da Economia Digital, do Ministro da Economia Digital e do Ministro das Finanças, além de colaborar com diversas instituições públicas e projetos estratégicos nacionais. A sua prática reflete um equilíbrio entre visão artística, compromisso social e capacidade de gestão, tornando-o uma figura central no desenvolvimento do setor audiovisual e criativo em Cabo Verde. Lema pessoal: "Só por hoje Cabo Verde" – filosofia que guia sua caminhada artística, espiritual e empreendedora.',
      fullBioEN:
        'Sandro Fonseca is a Cape Verdean audiovisual artist, creative director and entrepreneur with over a decade of experience creating content that unites aesthetics, technology and social transformation. He is CEO and co-founder of LENTiLHAS Lda and co-founder of CreativeBase by Lentilhas LDA, recognized with the Startup Promise award at the 1st edition of Digital Awards Cape Verde. In 2024, he also co-founded MedKey – Virtual Health System, winner of the Re!nventa Hackathon, which proposed innovative digital solutions for the health sector. Leading Lentilhas LDA, Sandro leads an innovative approach in the audiovisual sector, focused on talent training, impactful content production and development of digital solutions for the creative ecosystem. Through his personal brand @sandroufonsecaCREATIVE, he conducts authorial and institutional projects that value local narratives and promote new collaboration models in the creative industry. He is creator of the exhibition and podcast "Só Por Hoje", which addresses the recovery process of drug addicts through art, in addition to having a strong role in social impact initiatives such as Narcotics Anonymous Cape Verde. He also plays an active role in strengthening the Cape Verdean cultural scene as a member of the organization of Festival Oiá, a cinema and audiovisual creation event that boosts young filmmakers and promotes exchange between artists from the archipelago and diaspora. In his professional trajectory, he worked as official photographer for the Secretary of State for Digital Economy, Minister of Digital Economy and Minister of Finance, in addition to collaborating with various public institutions and national strategic projects. His practice reflects a balance between artistic vision, social commitment and management capacity, making him a central figure in the development of the audiovisual and creative sector in Cape Verde. Personal motto: "Só por hoje Cabo Verde" – philosophy that guides his artistic, spiritual and entrepreneurial journey.',
      fullBioFR:
        "Sandro Fonseca est un artiste audiovisuel, directeur créatif et entrepreneur cap-verdien avec plus d'une décennie d'expérience dans la création de contenus qui unissent esthétique, technologie et transformation sociale. Il est PDG et co-fondateur de LENTiLHAS Lda et co-fondateur de CreativeBase by Lentilhas LDA, reconnue avec le prix Startup Promise à la 1ère édition des Digital Awards Cape Verde. En 2024, il a également co-fondé MedKey – Système de Santé Virtuel, gagnant du Re!nventa Hackathon, qui a proposé des solutions numériques innovantes pour le secteur de la santé. À la tête de Lentilhas LDA, Sandro dirige une approche innovante dans le secteur audiovisuel, axée sur la formation de talents, la production de contenus impactants et le développement de solutions numériques pour l'écosystème créatif. À travers sa marque personnelle @sandroufonsecaCREATIVE, il mène des projets d'auteur et institutionnels qui valorisent les narratifs locaux et promeuvent de nouveaux modèles de collaboration dans l'industrie créative. Il est créateur de l'exposition et podcast \"Só Por Hoje\", qui aborde le processus de récupération des toxicomanes à travers l'art, en plus d'avoir un rôle fort dans les initiatives d'impact social comme Narcotiques Anonymes Cap-Vert. Il joue également un rôle actif dans le renforcement de la scène culturelle cap-verdienne en tant que membre de l'organisation du Festival Oiá, événement de cinéma et création audiovisuelle qui stimule les jeunes réalisateurs et promeut l'échange entre artistes de l'archipel et de la diaspora. Dans sa trajectoire professionnelle, il a travaillé comme photographe officiel du Secrétaire d'État à l'Économie Numérique, du Ministre de l'Économie Numérique et du Ministre des Finances, en plus de collaborer avec diverses institutions publiques et projets stratégiques nationaux. Sa pratique reflète un équilibre entre vision artistique, engagement social et capacité de gestion, faisant de lui une figure centrale dans le développement du secteur audiovisuel et créatif au Cap-Vert. Devise personnelle : \"Só por hoje Cabo Verde\" – philosophie qui guide son parcours artistique, spirituel et entrepreneurial.",
    },
    {
      name: "Josiana Cardoso",
      role: t("designImageDirector"),
      image: "/team/josiana-optimized.jpg",
      bio: "Licenciada em comunicação e multimédia",
      fullBio:
        'Natural da cidade da Praia, ilha de Santiago em Cabo Verde; Apaixonada por basquetebol desde os 16 anos; Licenciada em comunicação e multimédia pela universidade de Cabo Verde, onde começou a dar os primeiros passos em direção à vida profissional; Teve sempre uma predilecção pelas disciplinas onde aprendia sobre audiovisual e cinema; Envolveu-se em vários projetos do cinema Cabo-verdiano tais como "Hora di Bai" e "SUKURU" da Samira Vera-Cruz, e PIRINHA de Natasha Craveiro. Em 2018 fez parte da equipa criativa da Kriolscope Films e colabora em vários projetos audiovisuais de produtoras nacionais, de entre as quais da Korikaxoru Films. Fez também parte da equipa de Comunicação e Imagem do instituto do Turismo de Cabo Verde. Desde 2022 é mestranda em Design Gráfico em Portugal.',
      fullBioEN:
        'Born in the city of Praia, Santiago island in Cape Verde; Passionate about basketball since age 16; Graduate in communication and multimedia from the University of Cape Verde, where she began taking her first steps towards professional life; Always had a preference for subjects where she learned about audiovisual and cinema; Got involved in various Cape Verdean cinema projects such as "Hora di Bai" and "SUKURU" by Samira Vera-Cruz, and PIRINHA by Natasha Craveiro. In 2018 she was part of the creative team at Kriolscope Films and collaborates on various audiovisual projects from national production companies, including Korikaxoru Films. She was also part of the Communication and Image team at the Cape Verde Tourism Institute. Since 2022 she has been a master\'s student in Graphic Design in Portugal.',
      fullBioFR:
        "Née dans la ville de Praia, île de Santiago au Cap-Vert ; Passionnée de basketball depuis l'âge de 16 ans ; Diplômée en communication et multimédia de l'Université du Cap-Vert, où elle a commencé à faire ses premiers pas vers la vie professionnelle ; A toujours eu une préférence pour les matières où elle apprenait l'audiovisuel et le cinéma ; S'est impliquée dans divers projets du cinéma cap-verdien tels que \"Hora di Bai\" et \"SUKURU\" de Samira Vera-Cruz, et PIRINHA de Natasha Craveiro. En 2018, elle a fait partie de l'équipe créative de Kriolscope Films et collabore à divers projets audiovisuels de sociétés de production nationales, y compris Korikaxoru Films. Elle a également fait partie de l'équipe Communication et Image de l'Institut du Tourisme du Cap-Vert. Depuis 2022, elle est étudiante en master de Design Graphique au Portugal.",
    },
    {
      name: "Ricardo Leote",
      role: t("productionCoordinator"),
      image: "/team/ricardo-optimized.jpg",
      bio: "Engenheiro Eletrotécnico, realizador e fundador da NOS RAIZ",
      fullBio:
        'Ricardo Leote nasceu em Lisboa, em 1981. Tem nacionalidade Portuguesa e Caboverdiana. Formou-se em Engenharia Eletrotécnica na Universidade Nova de Lisboa. De 2010 a 2022 viveu e trabalhou em Angola, tendo-se estabelecido em Cabo Verde em 2023, onde reside. Fundou a NOS RAIZ, uma editora vocacionada para o fomento e promoção da literatura, cinema, música e artes plásticas, representante da plataforma cultural AUTORES.club sediada em Portugal, Angola e Cabo Verde com distribuição nos PALOP. Como realizador de cinema e audiovisual, cuja formação iniciou com a mentoria do realizador Mário Cabral, concretizou, em 2024, a realização do filme "O Menino Pirata" vencedor do F.A.I.L - Projecto "Ilhas e Encantamentos" apoiado pelo PROCULTURA e o documentário "M a r i n a" curta-metragem selecionada para 2ª edição BODJI - Aliança DHAA, ambos financiadas pela União Europeia. É também membro colaborador do CineClub Mankara.',
      fullBioEN:
        'Ricardo Leote was born in Lisbon in 1981. He holds Portuguese and Cape Verdean nationality. He graduated in Electrical Engineering from Universidade Nova de Lisboa. From 2010 to 2022 he lived and worked in Angola, having established himself in Cape Verde in 2023, where he resides. He founded NOS RAIZ, a publishing house dedicated to promoting literature, cinema, music and visual arts, representative of the cultural platform AUTORES.club based in Portugal, Angola and Cape Verde with distribution in PALOP countries. As a film and audiovisual director, whose training began with mentorship from director Mário Cabral, he completed in 2024 the film "O Menino Pirata" winner of F.A.I.L - Project "Ilhas e Encantamentos" supported by PROCULTURA and the documentary "M a r i n a" short film selected for the 2nd edition BODJI - DHAA Alliance, both financed by the European Union. He is also a collaborating member of CineClub Mankara.',
      fullBioFR:
        'Ricardo Leote est né à Lisbonne en 1981. Il possède la nationalité portugaise et cap-verdienne. Il a obtenu son diplôme en Génie Électrique à l\'Universidade Nova de Lisboa. De 2010 à 2022, il a vécu et travaillé en Angola, s\'étant établi au Cap-Vert en 2023, où il réside. Il a fondé NOS RAIZ, une maison d\'édition dédiée à la promotion de la littérature, du cinéma, de la musique et des arts visuels, représentante de la plateforme culturelle AUTORES.club basée au Portugal, en Angola et au Cap-Vert avec distribution dans les pays PALOP. En tant que réalisateur de cinéma et audiovisuel, dont la formation a commencé avec le mentorat du réalisateur Mário Cabral, il a réalisé en 2024 le film "O Menino Pirata" gagnant du F.A.I.L - Projet "Ilhas e Encantamentos" soutenu par PROCULTURA et le documentaire "M a r i n a" court métrage sélectionné pour la 2ème édition BODJI - Alliance DHAA, tous deux financés par l\'Union Européenne. Il est également membre collaborateur du CineClub Mankara.',
    },
    {
      name: "Samuel Tebandeke",
      role: t("honoraryDirector"),
      image: "/team/samuel-optimized.jpg",
      bio: "CEO e cofundador da Kiasi",
      fullBio:
        "Samuel Tebandeke é um argumentista, produtor e realizador com formação em finanças e contabilidade. Ele é o CEO e co-fundador da Kiasi, uma plataforma de streaming multiformato para conteúdos audiovisuais afrocentrados. Com mais de uma década de experiência no cinema, ele iniciou e facilitou várias iniciativas de capacitação na África Oriental. A sua iniciativa atual, o Great Lakes Creative Producers Lab, realiza-se anualmente em novembro em Nairobi, no Quénia, e tem como objetivo dar aos produtores criativos emergentes as competências necessárias para gerir um projeto cinematográfico desde o desenvolvimento até à distribuição. Samuel também gere a Kiasi Productions, uma produtora de serviço completo e uma empresa de aluguer de equipamentos que produz conteúdo de diferentes géneros e formatos. Argumentista, produtor e realizador, Samuel é ex-aluno do MNET Screenwriters workshop (2009) e do Maisha Film Lab (2008 & 2009). Ele escreveu para televisão e cinema, tendo dois dos seus filmes de longa-metragem sido comprados, com vários outros projetos em diferentes fases de desenvolvimento.",
      fullBioEN:
        "Samuel Tebandeke is a screenwriter, producer and director with training in finance and accounting. He is the CEO and co-founder of Kiasi, a multi-format streaming platform for Afrocentric audiovisual content. With over a decade of experience in cinema, he has initiated and facilitated various capacity-building initiatives in East Africa. His current initiative, the Great Lakes Creative Producers Lab, takes place annually in November in Nairobi, Kenya, and aims to give emerging creative producers the skills needed to manage a film project from development to distribution. Samuel also manages Kiasi Productions, a full-service production company and equipment rental company that produces content of different genres and formats. Screenwriter, producer and director, Samuel is an alumnus of the MNET Screenwriters workshop (2009) and the Maisha Film Lab (2008 & 2009). He has written for television and cinema, having two of his feature films purchased, with several other projects in different stages of development.",
      fullBioFR:
        "Samuel Tebandeke est un scénariste, producteur et réalisateur avec une formation en finance et comptabilité. Il est le PDG et co-fondateur de Kiasi, une plateforme de streaming multi-format pour contenus audiovisuels afrocentrés. Avec plus d'une décennie d'expérience au cinéma, il a initié et facilité diverses initiatives de renforcement des capacités en Afrique de l'Est. Son initiative actuelle, le Great Lakes Creative Producers Lab, se déroule annuellement en novembre à Nairobi, au Kenya, et vise à donner aux producteurs créatifs émergents les compétences nécessaires pour gérer un projet cinématographique du développement à la distribution. Samuel gère également Kiasi Productions, une société de production de service complet et une entreprise de location d'équipements qui produit du contenu de différents genres et formats. Scénariste, producteur et réalisateur, Samuel est un ancien élève de l'atelier MNET Screenwriters (2009) et du Maisha Film Lab (2008 & 2009). Il a écrit pour la télévision et le cinéma, ayant deux de ses longs métrages achetés, avec plusieurs autres projets à différentes étapes de développement.",
    },
  ]

  const missions = [
    {
      icon: <Film className="w-8 h-8" />,
      title: t("mission1"),
      description: t("mission1Full"),
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t("mission2"),
      description: t("mission2Full"),
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: t("mission3"),
      description: t("mission3Full"),
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t("mission4"),
      description: t("mission4Full"),
    },
  ]

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedMember(null)
  }

  return (
    <div className="min-h-screen bg-charcoal">
      <Navigation currentPage="about" />

      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4 py-12">
          <h1 className={`text-4xl md:text-5xl font-bold text-text-light mb-12 text-center ${poppins.className}`}>
            {t("aboutFestival")}
          </h1>

          {/* História e Objetivos */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className={`text-3xl font-semibold text-text-light mb-8 ${poppins.className}`}>
              {t("historyObjectives")}
            </h2>
            <p className="text-sand text-lg leading-relaxed mb-6 text-justify font-medium">{t("historyText")}</p>
            <p className="text-sand text-lg leading-relaxed mb-8 text-justify font-medium">{t("projectInfo")}</p>
          </section>

          {/* Mission Cards */}
          <section className="max-w-6xl mx-auto mb-16">
            <h3 className={`text-3xl font-semibold text-text-light mb-8 text-center ${poppins.className}`}>
              {t("ourMission")}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {missions.map((mission, index) => (
                <div
                  key={index}
                  className="bg-sand/10 backdrop-blur-sm p-6 rounded-lg border border-primary/20 text-center hover:bg-sand/20 transition-all duration-300"
                >
                  <div className="text-primary mb-4 flex justify-center">{mission.icon}</div>
                  <h4 className={`text-lg font-semibold text-text-light mb-3 ${poppins.className}`}>{mission.title}</h4>
                  <p className="text-sand text-sm leading-relaxed">{mission.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Mensagem da Direção */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className={`text-3xl font-semibold text-text-light mb-8 ${poppins.className}`}>
              {t("artisticDirection")}
            </h2>
            <p className="text-sand text-lg leading-relaxed mb-8 text-justify font-medium">{t("kafukaOrigin")}</p>
            <ul className="text-sand text-lg leading-relaxed space-y-4 list-disc list-inside font-medium">
              <li>{t("symbol1")}</li>
              <li>{t("symbol2")}</li>
              <li>{t("symbol3")}</li>
              <li>{t("symbol4")}</li>
            </ul>
          </section>

          {/* Equipa */}
          <section className="max-w-6xl mx-auto">
            <h2 className={`text-3xl font-semibold text-text-light mb-12 text-center ${poppins.className}`}>
              {t("theTeam")}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-sand/10 backdrop-blur-sm p-6 rounded-lg border border-primary/20 text-center hover:bg-sand/20 transition-all duration-300 cursor-pointer"
                  onClick={() => handleMemberClick(member)}
                >
                  <div className="mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="w-24 h-24 object-cover rounded-full mx-auto"
                    />
                  </div>
                  <h3 className={`text-lg font-semibold text-text-light mb-2 ${poppins.className}`}>{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                  <button className="text-sand hover:text-primary transition-colors text-sm font-medium underline">
                    {t("seeMore")}
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />

      <TeamModal member={selectedMember} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
}
