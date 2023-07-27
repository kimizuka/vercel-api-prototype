import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const delay = Number(searchParams.get('delay') || 0);

  await new Promise(resolve => setTimeout(resolve, Number(delay)));

  return NextResponse.json({
    message: 'Hello!',
    delay,
  });
}