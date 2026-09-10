export const galleryKinds = ["Event", "Talk", "Building", "Life", "RaheemLabs"] as const;

export type GalleryKind = (typeof galleryKinds)[number];

export type GalleryEntry = {
  id: string;
  title: string;
  caption: string;
  category: GalleryKind;
  image: string;
  alt: string;
  date: string;
  location?: string;
  sourceUrl?: string;
  format: "portrait" | "landscape" | "square";
};

export const seedGalleryEntries: readonly GalleryEntry[] = [
  {
    id: "linkedin-github-dev-days-masaka-2026",
    title: "Taking the stage at GitHub Dev Days Masaka",
    caption: "I travelled to Masaka with the UTAMU Innovation Club team and delivered a talk at GitHub Dev Days 2026—a day centred on software engineering, open source, and building with GitHub.",
    category: "Talk",
    image: "/media/linkedin-github-dev-days-masaka.jpg",
    alt: "GitHub Dev Days 2026 Masaka speaker card for Kamwanga Raheem",
    date: "2026-09-04",
    location: "Masaka, Uganda",
    sourceUrl: "https://www.linkedin.com/posts/utamu-innovation-club_the-team-gets-to-masaka-tomorrow-proud-activity-7501201941708992514-oDxt",
    format: "portrait",
  },
  {
    id: "linkedin-aifest-sistercare-top-ten-2026",
    title: "SisterCare reached the AI Fest Top 10",
    caption: "We presented SisterCare at the AI Fest Hackathon and finished among the Top 10 projects. The result strengthened our resolve to keep building private menstrual-health and emotional-wellbeing support for girls and women.",
    category: "Building",
    image: "/media/linkedin-aifest-sistercare.jpg",
    alt: "The SisterCare team presenting on stage at AI Fest 2026",
    date: "2026-05-09",
    location: "Kampala, Uganda",
    sourceUrl: "https://www.linkedin.com/posts/kamwanga-rahiim-b1b055271_womenintech-digitalhealth-techforgood-activity-7458989644991418368--YE0",
    format: "portrait",
  },
  {
    id: "linkedin-github-dev-days-wakiso-2026",
    title: "Explaining Copilot Coding Agent in Wakiso",
    caption: "At GitHub Copilot Dev Days Wakiso, I joined the speaker lineup at UTAMU Kungu Campus to unpack Copilot Coding Agent for students, developers, and technology enthusiasts.",
    category: "Talk",
    image: "/media/linkedin-tech-community.jpg",
    alt: "Kamwanga Rahiim with fellow GitHub Dev Days speakers and technology community members",
    date: "2026-05-15",
    location: "UTAMU Kungu Campus, Wakiso",
    sourceUrl: "https://www.linkedin.com/company/utamu-innovation-club",
    format: "landscape",
  },
  {
    id: "linkedin-stellar-kenya-community-2026",
    title: "East African builders, gathered in Kenya",
    caption: "A first field note from the inaugural Stellar East African Community Hackathon in Kenya—a three-day residency that brought builders together around technology with local context.",
    category: "Event",
    image: "/media/linkedin-stellar-kenya-01.jpg",
    alt: "Participants and organisers at the Stellar East African Community Hackathon in Kenya",
    date: "2026-02-16",
    location: "CEMASTEA, Kenya",
    sourceUrl: "https://www.linkedin.com/posts/stellareastafrica_stellareastafrica-buildonstellar-web3forgood-activity-7429131375598854144-m1w0",
    format: "landscape",
  },
  {
    id: "linkedin-stellar-kenya-building-2026",
    title: "Building around real needs in Kenya",
    caption: "My second Kenya note captures the work behind the event: teams turning lived experiences from the domestic-work sector into focused ideas and prototypes on Stellar.",
    category: "Building",
    image: "/media/linkedin-stellar-kenya-02.jpg",
    alt: "A team collaborating on laptops during the Stellar hackathon in Kenya",
    date: "2026-02-28",
    location: "CEMASTEA, Kenya",
    sourceUrl: "https://www.linkedin.com/posts/stellareastafrica_stellar-east-africa-cemastea-hackathon-2026-activity-7433394294066970624-WCvf",
    format: "landscape",
  },
  {
    id: "linkedin-stellar-kabale-bootcamp-2026",
    title: "Building on Stellar in Kabale",
    caption: "I represented UTAMU Innovation Club at the Stellar East Africa Kabale Builders Bootcamp, spending three execution-focused days learning through project development, code reviews, and mentorship.",
    category: "Building",
    image: "/media/stellar-kabale-bootcamp.png",
    alt: "Official Stellar East Africa Kabale Builders Bootcamp 2026 event card",
    date: "2026-03-06",
    location: "Orchard Motel, Kabale",
    sourceUrl: "https://luma.com/nxsgz06r",
    format: "landscape",
  },
  {
    id: "linkedin-ieee-techx-badge-winner-2025",
    title: "An IEEE TechX Badge Challenge win",
    caption: "I was proud to be among the winners as IEEE Uganda Section recorded 12 winners and emerged as the leading section globally in the IEEE Computer Society SYP TechX Badge Challenge.",
    category: "Event",
    image: "/media/linkedin-ieee-techx.jpg",
    alt: "IEEE Computer Society SYP TechX Badge Challenge results showing Uganda Section with 12 winners",
    date: "2025-02-16",
    location: "Uganda",
    sourceUrl: "https://www.linkedin.com/posts/ieee-kyambogo-university-student-branch_proudly-celebrating-a-remarkable-achievement-activity-7296801307384803328-xnYi",
    format: "landscape",
  },
  {
    id: "linkedin-innovation-hub-2025",
    title: "Learning to build with AI, not against it",
    caption: "At an Innovation Hub session in Nakawa, my strongest takeaway was that developers should adapt to current tools and use AI to amplify creativity, productivity, and problem-solving.",
    category: "Event",
    image: "/media/linkedin-innovation-hub.jpg",
    alt: "Developers attending a session around a table at the Innovation Hub in Nakawa",
    date: "2025-10-18",
    location: "Innovation Hub, Nakawa",
    sourceUrl: "https://www.linkedin.com/posts/kamwanga-rahiim-b1b055271_innovation-ai-developers-activity-7385394562829008896-vm_d",
    format: "portrait",
  },
];
