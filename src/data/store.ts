export interface SubMenu {
  id: number;
  label: string;
  href: string;
}

export interface Nav {
  id: number;
  label: string;
  subMenu?: SubMenu[];
  href: string;
}

export const nav: Nav[] = [
  {
    id: 1,
    label: "Solution",
    href: "#",
    subMenu: [
      {
        id: 1,
        label: "AnyCaaS",
        href: "#",
      },
      {
        id: 2,
        label: "AnyBaaS",
        href: "#",
      },
      {
        id: 3,
        label: "AnyPaaS",
        href: "#",
      },
    ],
  },
  {
    id: 2,
    label: "Services",
    href: "#",
  },
  {
    id: 3,
    label: "About Us",
    href: "#",
  },
];
