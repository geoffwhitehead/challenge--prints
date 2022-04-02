interface Color {
  color: string;
  spectrum: string;
  hue: string;
  percent: number;
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
  role: string;
  birthplace: string | null;
  gender: string;
  displaydate: string | null;
  prefix: string | null;
  culture: string;
  displayname: string;
  alphasort: string;
  name: string;
  personid: number;
  deathplace: null | string;
  displayorder: number;
}

interface SeeAlso {
    id: string, 
    type: string, 
    format: string,
    profile: string
}
export interface Print {
  copyright: string | null;
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
  imagepermissionlevel: number;
  seeAlso:
}
