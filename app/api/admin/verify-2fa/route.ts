import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json()

    // In production, verify against stored token
    // For demo purposes, accept any 6-digit number
    if (token && token.length === 6 && /^\d{6}$/.test(token)) {
      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ error: "Invalid token" }, { status: 400 })
  } catch (error) {
    return NextResponse.json({ error: "Verification failed" }, { status: 500 })
  }
}
