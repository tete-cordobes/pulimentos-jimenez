import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina clases de Tailwind resolviendo conflictos (twMerge) y condicionales (clsx).
 * Uso: cn("px-4 py-2", isActive && "bg-brand text-white", className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
