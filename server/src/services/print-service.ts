import fetch from "node-fetch";
import { Print } from "./types";

const baseUrl = "https://api.harvardartmuseums.org/";

const fields = [
  "copyright",
  "creditline",
  "contact",
  "rank",
  "id",
  "verificationleveldescription",
  "images",
  "standardreferencenumber",
  "signed",
  "classification",
  "verificationlevel",
  "primaryimageurl",
  "technique",
  "description",
  "colors",
  "provenance",
  "dated",
  "people",
  "url",
  "culture",
];

async function getPrints(page: string): Promise<Print[]> {
  const query = new URLSearchParams({
    apikey: process.env.API_KEY as string,
    size: "10",
    page,
    classification: "Prints",
    sort: "rank",
    sortorder: "desc",
    hasimage: "1",
    q: "verificationlevel:4",
    fields: fields.join(","),
  });

  const response = await fetch(`${baseUrl}object?${query.toString()}`);

  const data = await response.json();
  return data as Print[];
}

export default {
  getPrints,
} as const;
