import { Agriculture, Audit, Buget, Education, Enviromental, Finance, Health, Hr, Ict, Legal, Marriage, Media, Procurment, Tourism } from "../app/_shared/icons/icons";
import { Department } from "./types";

export const departments :Department[] = [
  {
    icon: <Agriculture />,
    title: "Agriculture and Rural Development",
    content:
      "Focuses on advancing agricultural practices, supporting rural communities, and promoting food security through sustainable development programs.",
  },
  {
    icon: <Buget/>,
    title: "Budget, Planning, Research, and Statistics",
    content:
      "Responsible for financial planning, policy research, data analysis, and strategic budgeting to ensure efficient resource allocation and development.",
  },
  {
    icon: <Ict/>,
    title: "Information and Communications Technology (ICT)",
    content:
      "Drives digital transformation, enhances technological infrastructure, and manages IT systems to improve operational efficiency and service delivery.",
  },
  {
    icon: <Legal />,
    title: "Legal Unit",
    content:
      "Provides legal guidance, ensures regulatory compliance, and represents the organization in legal matters to uphold justice and governance.",
  },
  {
    icon: <Procurment />,
    title: "Procurement Unit",
    content:
      "Manages the acquisition of goods and services, ensuring transparency, cost-effectiveness, and compliance with procurement policies.",
  },
  {
    icon: <Marriage />,
    title: "Marriage Registry",
    content:
      "Focuses on advancing agricultural practices, supporting rural communities, and promoting food security through sustainable development programs.",
  },
  {
    icon: <Hr/>,
    title: "Administrative and Human Resource",
    content:
      "Handles personnel management, staff welfare, recruitment, and workplace policies to foster a productive and efficient workforce.",
  },
  {
    icon:<Health/>,
    title: "Health",
    content:
      "Ensures public health standards, promotes medical services, and oversees healthcare initiatives for the well-being of the community.",
  },
  {
    icon: <Education />,
    title: "Education",
    content:
      "Focuses on improving educational standards, curriculum development, teacher training, and student welfare to enhance learning outcomes.",
  },
  {
    icon:<Finance />,
    title: "Finance and Accounts",
    content:
      "Manages financial records, budgeting, and expenditure, ensuring fiscal responsibility and effective financial management.",
  },
  {
    icon: <Audit />,
    title: "Audit",
    content:
      "Conducts internal reviews, financial assessments, and risk evaluations to maintain accountability and transparency within the organization.",
  },
  {
    icon: <Media />,
    title: "Media",
    content:
      "Oversees public relations, content creation, and communication strategies to enhance visibility and engagement.",
  },
  {
    icon: <Enviromental />,
    title: "Environmental",
    content:
      "Implements policies and initiatives for environmental conservation, waste management, and sustainable development.",
  },
  {
    icon:<Tourism />,
    title: "Tourism (Arts and Culture)",
    content:
      "Promotes cultural heritage, supports tourism initiatives, and fosters artistic expression to enhance local and international engagement.",
  }
];
