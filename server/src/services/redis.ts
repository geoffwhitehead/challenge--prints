import { createClient } from "redis";
import { Print } from "./types";

const REDIS_CACHE_EXPIRY_SECONDS = 60 * 15;

const redis = createClient({
  url: process.env.REDIS_URL,
});

export async function connect() {
  redis.on("error", (err) => console.log("redis client error", err));
  redis.on("connect", () => console.log("redis client successfully connected"));

  await redis.connect();
}

export async function set(key: string, value: Record<string, any>) {
  await redis.json.set(key, ".", value);
  await redis.expire(key, REDIS_CACHE_EXPIRY_SECONDS);
}

export async function get(key: string): Promise<Print[] | null> {
  return (await redis.json.get(key)) as unknown as Print[] | null;
}
