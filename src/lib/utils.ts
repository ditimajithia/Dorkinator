import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import PocketBase from "pocketbase";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const pocketbase = new PocketBase("http://20.56.210.28:3000");
