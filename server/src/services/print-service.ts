import { ServerError } from "@shared/errors";
import fetch from "node-fetch";
import { Print } from "./types";
import logger from "jet-logger";
import * as redis from "@services/redis";

const baseUrl = "https://api.harvardartmuseums.org";

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
  const search = new URLSearchParams({
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

  try {
    const cached = await redis.get(page);

    if (cached) {
      return cached;
    } else {
      const response = await fetch(`${baseUrl}/object?${search.toString()}`);
      const data = (await response.json()) as Print[];
      await redis.set(page, data);
      return data;
    }
  } catch {
    logger.err("Failed to fetch prints");
    throw new ServerError("Failed to fetch prints");
  }
}

export default {
  getPrints,
} as const;
