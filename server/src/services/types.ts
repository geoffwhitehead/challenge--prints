interface Color {
  color: string;
  spectrum: string;
  hue: string;
  percent: string;
  css3: string;
}

interface Image {
  date: string;
  copyright: string;
  imageid: number;
  idsid: number;
  format: string;
  description: string | null;
  technique: string | null;
  renditionnumber: string;
  displayorder: number;
  baseimageurl: string;
  alttext: string | null;
  width: number;
  publiccaption: null | string;
  iiifbaseuri: string;
  height: number;
}

interface Person {
  role: "Artist";
  birthplace: null;
  gender: "male";
  displaydate: "c. 1729 - 1765";
  prefix: null;
  culture: "British";
  displayname: "James McArdell";
  alphasort: "McArdell, James";
  name: "James McArdell";
  personid: 32221;
  deathplace: null;
  displayorder: 1;
}

export interface Print {
  copyright: string;
  creditline: string;
  contact: string;
  rank: number;
  id: number;
  verificationleveldescription: string;
  images: Image[];
  standardreferencenumber: string;
  signed: null | string;
  classification: string;
  verificationlevel: number;
  primaryimageurl: string;
  technique: string;
  description: string | null;
  colors: Color[];
  provenance: string;
  dated: string;
  people: Person[];
  url: string;
  culture: string;
}
