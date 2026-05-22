import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ipAddress = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";
  return NextResponse.json({ ip: ipAddress });
}

