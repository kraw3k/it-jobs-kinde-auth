import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest } from "next/server";

// Note: kinde doesn't provide typescript types for withAuth
export default withAuth(async function middleware(
  req: NextRequest & { kindeAuth: any },
) {
  // Note: unable to use prism here, because it's not available in the middleware
  // https://kinde.com/docs/developer-tools/nextjs-sdk/#protecting-routes
  // https://nextjs.org/docs/messages/nested-middleware
});
export const config = {
  matcher: ["/admin", "/profile", "/employer", "/offers"],
};
