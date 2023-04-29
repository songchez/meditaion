export { default } from "next-auth/middleware";

export const config = { matcher: ["/editor", "/meditations/:path*", "/tree"] };
