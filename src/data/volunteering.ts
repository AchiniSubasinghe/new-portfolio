export interface VolunteeringExperience {
  title: string;
  organization: string;
  period: string;
  description: string;
  image1: string;
  image2: string;
}

export const volunteeringExperiences: VolunteeringExperience[] = [
  {
    title: "Nexora 1.0 ",
    organization: "Asscociation of computer science and data science (NSBM)",
    period: "2024",
    description:
      "Helped organize technical workshops, coding competitions, and knowledge-sharing sessions for the university community. Coordinated with speakers, managed event logistics, and promoted events across campus.",
    image1: "/images/nexoraCertificate.jpeg",
    image2: "/images/nexora.jpeg",
  },
  {
    title: "IEEE Day 2025",
    organization: "Institute of Electrical and Electronics Engineers. (NSBM)",
    period: "2025",
    description:
      "Provided free tutoring in programming and mathematics to underprivileged high school students. Designed lesson plans, conducted weekly online sessions, and mentored students through their exam preparation.",
    image1: "/images/ieeeMe.jpeg",
    image2: "/images/ieee.jpeg",
  },
  {
    title: "Plymhack ",
    organization: "Hackathon Hub of NSBM",
    period: "2026",
    description:
      "Participated in coastal and urban cleanup drives. Helped raise awareness about waste management and environmental conservation through social media campaigns and community outreach.",
    image1: "/images/vice.jpeg",
    image2: "/images/vice",
  },
];
