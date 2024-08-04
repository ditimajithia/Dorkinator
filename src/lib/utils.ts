import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import PocketBase from "pocketbase";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export const pocketbase = new PocketBase("http://20.56.210.28:3000");
const POCKETBASE_URL =
  process.env.REACT_APP_POCKETBASE_URL || "https://dorkinator.pockethost.io";
export const pocketbase = new PocketBase(POCKETBASE_URL);
