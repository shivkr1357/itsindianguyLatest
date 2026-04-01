import { NextResponse } from "next/server";

/** Stops browsers/CDNs from caching admin/CMS proxy responses (fixes stale lists after refresh). */
export const CACHE_CONTROL_NO_STORE = {
  "Cache-Control": "private, no-store, max-age=0, must-revalidate",
} as const;

export function jsonNoStore(data: unknown, status = 200) {
  return NextResponse.json(data, {
    status,
    headers: CACHE_CONTROL_NO_STORE,
  });
}
