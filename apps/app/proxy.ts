import { authMiddleware } from "@repo/auth/proxy";
import {
  noseconeOptions,
  noseconeOptionsWithToolbar,
  securityMiddleware,
} from "@repo/security/proxy";
import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { env } from "./env";

// Determine if we are in "Dummy Mode" (Vercel Build or Local Dev without Keys)
const isDummyMode =
  !process.env.CLERK_SECRET_KEY ||
  process.env.CLERK_SECRET_KEY.includes("placeholder") ||
  process.env.CLERK_SECRET_KEY.startsWith("sk_test_dummy");

const enableSecurity = !!env.ARCJET_KEY && !!env.FLAGS_SECRET;

const securityHeaders = enableSecurity
  ? securityMiddleware(noseconeOptionsWithToolbar)
  : securityMiddleware(noseconeOptions);

// If ARCJET_KEY is invalid/missing, securityMiddleware might crash?
// Let's protect it further.
// Actually, nosecone wrapper handles missing keys gracefully usually, but let's be sure.

const authHandler = authMiddleware(async () => {
  if (enableSecurity) {
    return securityHeaders();
  }
  return NextResponse.next();
});

export default function middleware(req: NextRequest, ev: NextFetchEvent) {
  if (isDummyMode) {
    return NextResponse.next();
  }
  return (authHandler as any)(req, ev);
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
