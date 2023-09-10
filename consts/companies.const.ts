import { Icon } from "~/types/icon";

export const COMPANY_NAME = {
  NOSTRA: "PT Nostra Solusi Teknologi",
  DEVIXEL: "PT Devixel Teknologi Indonesia",
  TRADARU: "PT Tradaru Digital Niaga",
  HOLA_HALO: "PT Holahalo Mekar Konsep",
} as const;
export type CompanyName = (typeof COMPANY_NAME)[keyof typeof COMPANY_NAME];

export const TYPE_WORK = {
  FULL_TIME: "FULL_TIME",
  PART_TIME: "PART_TIME",
  CONTRACT: "CONTRACT",
} as const;
export type TypeWork = (typeof TYPE_WORK)[keyof typeof TYPE_WORK];

// Interfaces
export interface Company {
  id: number;
  name: CompanyName;
  desc: string;
  typeWork: TypeWork;
  techStacks: Icon[];
  link?: string;
}

export const COMPANIES: Company[] = [
  {
    id: 1,
    name: COMPANY_NAME.NOSTRA,
    desc: "nostra",
    typeWork: TYPE_WORK.FULL_TIME,
    link: "https://www.nostratech.com/",
    techStacks: [
      {
        label: "HTML",
        icon: "material-symbols:html",
      },
      {
        label: "CSS",
        icon: "akar-icons:css-fill",
      },
      {
        label: "SCSS",
        icon: "bi:filetype-scss",
      },
      {
        label: "Tailwind",
        icon: "mdi:tailwind",
      },
      {
        label: "Javascript",
        icon: "ri:javascript-fill",
      },
      {
        label: "Typescript",
        icon: "bxl:typescript",
      },
      {
        label: "Vue 3",
        icon: "mingcute:vue-fill",
      },
      {
        label: "Nuxt 3",
        icon: "simple-icons:nuxtdotjs",
      },
      {
        label: "Metabase",
        icon: "simple-icons:metabase",
      },
    ],
  },
  {
    id: 2,
    name: COMPANY_NAME.DEVIXEL,
    desc: "devixel",
    typeWork: TYPE_WORK.CONTRACT,
    techStacks: [
      {
        label: "HTML",
        icon: "material-symbols:html",
      },
      {
        label: "CSS",
        icon: "akar-icons:css-fill",
      },
      {
        label: "SCSS",
        icon: "bi:filetype-scss",
      },
      {
        label: "Tailwind",
        icon: "mdi:tailwind",
      },
      {
        label: "Bootstrap",
        icon: "mdi:bootstrap",
      },
      {
        label: "Javascript",
        icon: "ri:javascript-fill",
      },
      {
        label: "Typescript",
        icon: "bxl:typescript",
      },
      {
        label: "Vue 2",
        icon: "mingcute:vue-fill",
      },
      {
        label: "Vue 3",
        icon: "mingcute:vue-fill",
      },
      {
        label: "Nuxt 3",
        icon: "simple-icons:nuxtdotjs",
      },
    ],
  },
  {
    id: 3,
    name: COMPANY_NAME.TRADARU,
    desc: "tradaru",
    typeWork: TYPE_WORK.CONTRACT,
    link: "https://popaket.com/",
    techStacks: [
      {
        label: "PHP",
        icon: "material-symbols:php",
      },
      {
        label: "Laravel",
        icon: "mdi:laravel",
      },
      {
        label: "MySQL",
        icon: "simple-icons:mysql",
      },
      {
        label: "HTML",
        icon: "material-symbols:html",
      },
      {
        label: "CSS",
        icon: "akar-icons:css-fill",
      },
      {
        label: "SCSS",
        icon: "bi:filetype-scss",
      },
      {
        label: "Tailwind",
        icon: "mdi:tailwind",
      },
      {
        label: "Javascript",
        icon: "ri:javascript-fill",
      },
      {
        label: "Typescript",
        icon: "bxl:typescript",
      },
      {
        label: "Angular",
        icon: "mdi:angular",
      },
      {
        label: "Nuxt 2",
        icon: "simple-icons:nuxtdotjs",
      },
    ],
  },
  {
    id: 4,
    name: COMPANY_NAME.HOLA_HALO,
    desc: "holahalo",
    typeWork: TYPE_WORK.FULL_TIME,
    techStacks: [
      {
        label: "HTML",
        icon: "material-symbols:html",
      },
      {
        label: "CSS",
        icon: "akar-icons:css-fill",
      },
      {
        label: "SCSS",
        icon: "bi:filetype-scss",
      },
      {
        label: "Bootstrap",
        icon: "mdi:bootstrap",
      },
      {
        label: "Javascript",
        icon: "ri:javascript-fill",
      },
      {
        label: "Typescript",
        icon: "bxl:typescript",
      },
      {
        label: "Vue 2",
        icon: "mingcute:vue-fill",
      },
    ],
  },
];
