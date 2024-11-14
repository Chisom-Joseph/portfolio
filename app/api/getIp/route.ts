import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const ipAddress = request.headers.get("x-forwarded-for") || request.ip;
  return NextResponse.json({ ip: ipAddress });
}
