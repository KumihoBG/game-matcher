import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const session = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname } = request.nextUrl;

  if (
    session &&
    (pathname.startsWith('/login') || pathname.startsWith('/register'))
  ) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (
    !session &&
    !pathname.startsWith('/login') &&
    !pathname.startsWith('/register')
  ) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile', '/favorites', '/logout', '/login', '/register'],
};
