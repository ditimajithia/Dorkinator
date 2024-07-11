import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import PocketBase from "pocketbase";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const pocketbase = new PocketBase("http://127.0.0.1:8090");
