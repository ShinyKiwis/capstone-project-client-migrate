import {
  FaChalkboardTeacher,
  FaProjectDiagram,
  FaUserGraduate,
} from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { MdManageAccounts } from "react-icons/md";

const sidebarItems = [
  {
    Icon: MdManageAccounts,
    title: "Management",
    pages: [
      {
        title: "Users Management",
        href: "/management/users",
      },
      {
        title: "Deadline Management",
        href: "/management/deadline",
      },
    ],
  },
  {
    Icon: FaChalkboardTeacher,
    title: "Program",
    paths: ["/program"],
    pages: [
      {
        title: "Programs Management",
        href: "/programs",
      },
    ],
  },
  {
    Icon: FaProjectDiagram,
    title: "Projects",
    pages: [
      {
        title: "Specialized Projects",
        href: "/project?project=specialized",
      },
      {
        title: "Capstone Projects",
        href: "/project?project=capstone",
      },
    ],
  },
  {
    Icon: FaUserGraduate,
    title: "Assessment",
    pages: [
      {
        title: "Assessment schemes",
        href: "/assessment/schemes",
      },
      {
        title: "Assessment records",
        href: "/assessment/records",
      },
    ],
  },
  {
    Icon: VscGraph,
    title: "Evaluation",
    pages: [
      {
        title: "Evaluation Setup",
        href: "",
      },
      {
        title: "Feedback Management",
        href: "",
      },
    ],
  },
];

export default sidebarItems;