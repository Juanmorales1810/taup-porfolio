import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const supportedLocales = ["es", "en", "pt"];

function getPreferredLocale(request: NextRequest): string {
    const acceptLanguage = request.headers.get("accept-language");
    if (acceptLanguage) {
        const preferredLocale = acceptLanguage
            .split(",")
            .map((lang) => lang.split(";")[0].trim().substring(0, 2))
            .find((lang) => supportedLocales.includes(lang));

        if (preferredLocale) {
            return preferredLocale;
        }
    }
    return "es"; // Idioma por defecto si no se puede determinar
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    const pathnameIsMissingValidLocale = supportedLocales.every(
        (locale) =>
            !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    if (pathnameIsMissingValidLocale) {
        const locale = getPreferredLocale(request);
        return NextResponse.redirect(
            new URL(
                `/${locale}${pathname === "/" ? "" : pathname}`,
                request.url
            )
        );
    }
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
