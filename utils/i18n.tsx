"use client";

import { translations } from "@/locale/traslations";
import { useParams } from "next/navigation";
import React, { JSX } from "react";

export type Language = "es" | "en" | "pt";

export const languageFlags: Record<Language, JSX.Element> = {
    es: <span className="fi fi-es"></span>,
    en: <span className="fi fi-us"></span>,
    pt: <span className="fi fi-br"></span>,
};
export function useTranslation() {
    const params = useParams();
    const lang = (params?.lang as Language) || "es";

    const t = (key: string): string => {
        const keys = key.split(".");
        let result: any = translations[lang];
        for (const k of keys) {
            if (result[k] === undefined) {
                throw new Error(`Translation for key "${key}" not found.`);
            }
            result = result[k];
        }
        if (typeof result !== "string") {
            throw new Error(`Translation for key "${key}" is not a string.`);
        }
        return result;
    };

    return { t, lang };
}
