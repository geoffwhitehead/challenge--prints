import { Print } from "../api/types";

export const generatePrint = (values: Partial<Print> = {}): Print => {
  return {
    title: "A Paraleytic Woman",
    verificationleveldescription:
      "Best. Object is extensively researched, well described and information is vetted",
    copyright: null,
    images: [],
    creditline:
      "Harvard Art Museums/Fogg Museum, Gift of Belinda L. Randall from the collection of John Witt Randall",
    standardreferencenumber: "Goodwin 136; John Chaloner Smith 62",
    signed: null,
    technique: "Mezzotint technique",
    description: "This is a description.",
    classification: "Prints",
    verificationlevel: 4,
    primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:INV034167_dynmc",
    people: [
      {
        role: "a1 Artist",
        birthplace: "a1 London",
        gender: "a1 male",
        displaydate: "a1 c. 1729 - 1765",
        prefix: null,
        culture: "British",
        displayname: "James McArdell",
        alphasort: "McArdell, James",
        name: "James McArdell",
        personid: 32221,
        deathplace: null,
        displayorder: 1,
      },
      {
        role: "a2 Artist after",
        birthplace: "a2 Devon, England",
        gender: "a2 unknown",
        displaydate: "a2 1701 - 1779",
        prefix: "After",
        culture: "British",
        displayname: "After Thomas Hudson",
        alphasort: "Hudson, Thomas",
        name: "Thomas Hudson",
        personid: 26649,
        deathplace: "Twickenham, England",
        displayorder: 2,
      },
    ],
    colors: [
      {
        color: "#191919",
        spectrum: "#1eb264",
        hue: "Grey",
        percent: 0.7100641025641026,
        css3: "#000000",
      },
      {
        color: "#c8c8af",
        spectrum: "#b55592",
        hue: "Green",
        percent: 0.12519230769230769,
        css3: "#c0c0c0",
      },
    ],
    url: "https://www.harvardartmuseums.org/collections/object/248659",
    provenance:
      "John Witt Randall, bequest; to Belinda Lull Randall, his sister, gift; to Harvard University, 1892\r\n",
    culture: "British culture",
    contact: "am_europeanamerican@harvard.edu",
    imagepermissionlevel: 0,
    rank: 9999999999999,
    dated: "dated a very long time ago",
    id: 248659,
    seeAlso: [],
    ...values,
  };
};
