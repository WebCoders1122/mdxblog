

import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  if (searchParams.get("secret") === process.env.MY_SECRED_KEY) {
    revalidatePath("/");
    return Response.json({ revalidated: true, now: Date.now() });
  }
  return Response.json({
    revalidated: false,
    now: Date.now(),
    message: "Missing path to revalidate",
  });
}
