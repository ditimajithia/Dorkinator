import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import PocketBase from "pocketbase";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const pocketbase_ip = "http://20.56.210.28:3000";

export const pocketbase = new PocketBase(pocketbase_ip);
