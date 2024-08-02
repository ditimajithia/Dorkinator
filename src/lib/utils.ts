import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import PocketBase from "pocketbase";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const pocketbase_ip = "3.75.158.163" || "3.125.183.140" || "35.157.117.28";

export const pocketbase = new PocketBase(pocketbase_ip);
