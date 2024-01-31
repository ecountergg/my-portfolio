export interface Contacts {
  id: number;
  title: string;
  value: string;
  icon: string;
  link: string;
}

export const CONTACTS: Contacts[] = [
  {
    id: 1,
    title: "Telegram",
    value: "@ecountergg",
    icon: "basil:telegram-outline",
    link: "https://telegram.me/ecountergg",
  },
  {
    id: 2,
    title: "Instagram",
    value: "@ecountergg",
    icon: "basil:instagram-outline",
    link: "https://ig.me/m/ecountergg",
  },
  {
    id: 2,
    title: "Email",
    value: "ecountergg@gmail.com",
    icon: "mdi:email-outline",
    link: "mailto:ecountergg@gmail.com?subject=Greetings from a Frontend Engineer - Let's Connect and Collaborate!",
  },
];
