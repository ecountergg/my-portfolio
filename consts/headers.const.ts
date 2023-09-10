// Interfaces
export interface Header {
  id: number;
  href: string;
  label: string;
}

export const HEADERS: Header[] = [
  {
    id: 1,
    href: "#home",
    label: "Home",
  },
  {
    id: 2,
    href: "#skills",
    label: "Skills",
  },
  {
    id: 3,
    href: "#experiences",
    label: "Experiences",
  },
  {
    id: 4,
    href: "#portfolio",
    label: "Portfolio",
  },
  {
    id: 5,
    href: "#contact",
    label: "Contact",
  },
];
