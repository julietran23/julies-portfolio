export type Project = {
  slug: string;
  number: string;
  category: string;
  title: string;
  summary: string;
  year: string;
  role: string[];
  tools: string[];
  overview: string;
  challenge: string;
  approach: string[];
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "media-metadata",
    number: "01",
    category: "DEVELOPMENT + UI/UX",
    title: "Digital Asset Management Application",
    summary:
      "A full-stack application designed to index, search, tag, filter, and retrieve video files across local and centralized storage.",
    year: "2026 — Present",

    role: [
      "Full-Stack Development",
      "UI/UX Design",
      "System Architecture",
    ],

    tools: [
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "REST APIs",
    ],

    overview:
      "This project explores how video libraries can be made easier to organize, search, and navigate through structured metadata and a purpose-built interface.",

    challenge:
      "Large collections of video can become difficult to search and manage when files are distributed across storage locations or rely primarily on folder structures and filenames.",

    approach: [
      "Designed workflows for indexing and organizing video files.",
      "Developed metadata, timestamp, and incremental scanning workflows.",
      "Created search, tagging, and filtering functionality.",
      "Designed the interface around fast navigation and media discovery.",
      "Used PostgreSQL and Docker to support the application's data and development environment.",
    ],

    outcome:
      "The project is currently in development. The goal is to create a scalable media-management workflow that makes large video collections easier to search, understand, and retrieve.",
  },

  {
    slug: "marketing-video",
    number: "02",
    category: "VIDEO + MARKETING",
    title: "Company Marketing Video",
    summary:
      "A recruiting and marketing video created to communicate company culture and highlight the internship experience.",
    year: "2026",

    role: [
      "Video Production",
      "Editing",
      "Creative Planning",
      "Stakeholder Collaboration",
    ],

    tools: [
      "Adobe Creative Cloud",
      "Videography",
      "Video Editing",
    ],

    overview:
      "The project focused on using video storytelling to present company culture and the internship experience in a way that could support recruiting and marketing efforts.",

    challenge:
      "The video needed to communicate an authentic view of the company while also serving broader recruiting and business-development goals.",

    approach: [
      "Participated in project planning and concept development.",
      "Filmed footage for the final production.",
      "Edited the video into a cohesive marketing piece.",
      "Worked with human resources and business-development stakeholders.",
      "Incorporated feedback through stakeholder review.",
    ],

    outcome:
      "The completed video provided the company with a recruiting and marketing asset centered on culture, employees, and the internship experience.",
  },

  {
    slug: "patriothacks",
    number: "03",
    category: "DESIGN + MARKETING",
    title: "PatriotHacks",
    summary:
      "Promotional graphics and social content supporting hackathon outreach, announcements, and event branding.",
    year: "2026 — Present",

    role: [
      "Graphic Design",
      "Marketing",
      "Visual Communication",
    ],

    tools: [
      "Adobe Creative Cloud",
      "Canva",
      "Social Media",
    ],

    overview:
      "My work with PatriotHacks focuses on communicating technical event information through approachable and visually consistent promotional material.",

    challenge:
      "Hackathon communication needs to present schedules, announcements, opportunities, and technical information clearly while maintaining a recognizable event identity.",

    approach: [
      "Create promotional graphics for social platforms.",
      "Design visual assets for event announcements.",
      "Translate technical information into accessible visual communication.",
      "Collaborate with organizers on messaging and event needs.",
      "Maintain consistency across multiple pieces of promotional content.",
    ],

    outcome:
      "The ongoing work supports PatriotHacks outreach and gives event communications a more consistent visual presence.",
  },

  {
    slug: "graphic-design",
    number: "04",
    category: "VISUAL DESIGN",
    title: "Graphic Design",
    summary:
      "A collection of branded graphics created for training materials, documentation, company events, and professional communication.",
    year: "2026",

    role: [
      "Graphic Design",
      "Layout Design",
      "Visual Communication",
    ],

    tools: [
      "Adobe Creative Cloud",
      "Canva",
      "Typography",
      "Layout",
    ],

    overview:
      "This collection highlights graphic-design work created across professional communication, training, documentation, and event-related projects.",

    challenge:
      "Each project required information to be presented clearly while remaining visually consistent with the intended audience, purpose, and existing branding.",

    approach: [
      "Developed layouts around content hierarchy and readability.",
      "Applied typography and spacing to organize information.",
      "Created branded graphics for digital and print applications.",
      "Adapted designs to different audiences and deliverables.",
      "Collaborated with customers and internal stakeholders.",
    ],

    outcome:
      "The resulting materials support clearer communication while maintaining professional and consistent visual presentation.",
  },
];